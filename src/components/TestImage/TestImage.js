import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import PropTypes from 'prop-types';
import csh from 'prettier-csharp';
import prettier from 'prettier/standalone';
import babel from 'prettier/parser-babylon';
import java from 'prettier-plugin-java';
import BoxShadow from '../Shared/BoxShadow/BoxShadow';

const TestImage = ({ language, codeString }) => {
  const code = prettier.format(codeString, {
    semi: true,
    parser: language,
    plugins: [csh, java, babel],
    tabWidth: 2,
  });

  return (
    <BoxShadow boxShadow={2}>
      <SyntaxHighlighter
        language={language}
        style={monokaiSublime}
        showLineNumbers
      >
        {code}
      </SyntaxHighlighter>
    </BoxShadow>
  );
};
TestImage.propTypes = {
  language: PropTypes.oneOf(['cs', 'java', 'babel']).isRequired,
  codeString: PropTypes.string.isRequired,
};

export default TestImage;
