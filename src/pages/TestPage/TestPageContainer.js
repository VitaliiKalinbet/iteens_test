import { connect } from 'react-redux';
import TestPage from './TestPage';
import * as TestPageActions from '../../redux/testPage/testPageActions';
import * as TestPageOperations from '../../redux/testPage/testPageOperations';
import * as TestPageSelectors from '../../redux/testPage/testPageSelectors';
import { store } from '../../redux/store';

const { dispatch, getState } = store;

const mapStateToProps = state => ({
  currentQuestion: TestPageSelectors.getCurrentQuestion(state),
  resultAnswered: TestPageSelectors.getResultAnswer(state),
  userId: TestPageSelectors.getUserId(state),
  finalResult: TestPageSelectors.finalResult(state),
});
const mapDispatchToProps = {
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
  resetUserAnswer: () => dispatch(TestPageActions.resetUserAnswer()),
  fetchSkipTheQuestion: TestPageOperations.fetchSkipTheQuestion,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TestPage);
