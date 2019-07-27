import React, { Component, ReactDOM } from 'react';
import hljs from 'highlight.js';
import PropTypes from 'prop-types';
import java from 'highlight.js/lib/languages/java';
import Prism from 'prismjs';
import BoxShadow from '../Shared/BoxShadow/BoxShadow';
import './prism.module.css';

hljs.registerLanguage('java', java);
// const TestImage = ({ language, codeString }) => {
//   return (
//     <BoxShadow boxShadow={2}>
//       <div />
//     </BoxShadow>
//   );
// };
class TestImage extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    const { language, codeString } = this.props;
    return (
      // <BoxShadow boxShadow={2}>
      //   <Highlight languages={[language]} className="my-class">
      //     {codeString}
      //   </Highlight>
      // </BoxShadow>
      <pre>
        <code className={`language-${language}`}>{codeString}</code>
      </pre>
    );
  }
}
TestImage.propTypes = {
  language: PropTypes.oneOf(['csharp', 'javascript', 'java']).isRequired,
  codeString: PropTypes.string.isRequired,
};
export default TestImage;
