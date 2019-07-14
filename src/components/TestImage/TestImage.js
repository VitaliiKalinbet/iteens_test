import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import PropTypes from 'prop-types';
import BoxShadow from '../Shared/BoxShadow/BoxShadow';

const TestImage = ({ language, codeString }) => {
  return (
    <BoxShadow boxShadow={2}>
      <SyntaxHighlighter
        language={language}
        style={monokaiSublime}
        showLineNumbers
      >
        {codeString}
      </SyntaxHighlighter>
    </BoxShadow>
  );
};
TestImage.propTypes = {
  language: PropTypes.oneOf(['csharp', 'javascript', 'java']).isRequired,
  codeString: PropTypes.string.isRequired,
};
export default TestImage;
