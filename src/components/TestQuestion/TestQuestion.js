import React from 'react';
import PropTypes from 'prop-types';
import BoxShadow from '../Shared/BoxShadow/BoxShadow';
import css from './TestQuestion.module.css';

const TestQuestion = ({ question }) => {
  return (
    <BoxShadow boxShadow={14} className={css.paper}>
      <p className={css.text} dangerouslySetInnerHTML={{ __html: question }} />
    </BoxShadow>
  );
};
TestQuestion.propTypes = {
  question: PropTypes.string,
};
TestQuestion.defaultProps = {
  question: '',
};
export default TestQuestion;
