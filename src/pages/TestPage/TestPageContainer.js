import { connect } from 'react-redux';
import TestPage from './TestPage';
import * as TestPageActions from '../../redux/TestPage/testPageActions';
import * as TestPageOperations from '../../redux/TestPage/testPageOperations';
import * as TestPageSelectors from '../../redux/TestPage/testPageSelectors';
import store from '../../redux/store';

const { dispatch, getState } = store;

const mapStateToProps = state => ({
  currentQuestion: TestPageSelectors.getCurrentQuestion(state),
  resultAnswer: TestPageSelectors.getResultAnswer(state),
});
const mapDispatchToProps = {
  fetchCurrentQuestion: TestPageOperations.fetchCurrentQuestion,
  fetchResultAnswer: TestPageOperations.fetchResultAnswer,
  onChangeAnswer: userAnswer =>
    dispatch(TestPageActions.changeUserAnswer(userAnswer)),
  rewriteCurrentQuestion: () => () =>
    dispatch(TestPageActions.rewriteCurrentQuestion(getState().nextQuestion)),
  resetFields: () => () => {
    dispatch(TestPageActions.resetResultAnswer());
    dispatch(TestPageActions.resetUserAnswer());
    dispatch(TestPageActions.resetNextQuestion());
  },
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TestPage);
