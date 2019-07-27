import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import * as actions from '../../redux/languageDescrPage/languageDescrPageActionCreators';
import * as selectors from '../../redux/languageDescrPage/languageDescrPageSelectors';
import ResultDiagramm from '../../components/ResultDiagram/ResultDiagram';
import css from './ResultPage.module.css';
import AllTestContainer from '../../components/AllTestContainer/AllTestContainer';
import * as selector from '../../redux/fakeReducer';

class ResultPage extends Component {
  componentDidMount() {
    const { setEndTime, endTime } = this.props;
    if (!endTime) setEndTime();
  }

  getMinutes() {
    const { startTime, endTime } = this.props;
    const delta = endTime - startTime;
    const day = moment(new Date(delta));
    return day.format('mm');
  }

  render() {
    const {
      endTime,
      allQuestionsCount,
      languageTitle,
      rightAnswered,
      rightAnsweredInPercentage,
    } = this.props;
    if (!endTime) return null;
    return (
      <div className={css.container}>
        <Header />
        <ResultDiagramm
          allQuestionsCount={allQuestionsCount}
          languageTitle={languageTitle}
          rightAnswered={rightAnswered}
          rightAnsweredInPercentage={rightAnsweredInPercentage}
          totalTime={this.getMinutes()}
        />
        <AllTestContainer />
      </div>
    );
  }
}

ResultPage.propTypes = {
  startTime: PropTypes.number.isRequired,
  endTime: PropTypes.number,
  setEndTime: PropTypes.func.isRequired,
  allQuestionsCount: PropTypes.number.isRequired,
  languageTitle: PropTypes.string.isRequired,
  rightAnswered: PropTypes.number.isRequired,
  rightAnsweredInPercentage: PropTypes.number.isRequired,
};
ResultPage.defaultProps = {
  endTime: null,
};
const mapDispatchToProps = {
  setEndTime: actions.endTime,
};
const mapStateToProps = state => ({
  startTime: selectors.startTime(state),
  endTime: selectors.endTime(state),
  allQuestionsCount: selector.getAllQuestionsCount(state),
  languageTitle: selector.getLanguageTitle(state),
  rightAnswered: selector.getUserRightAnswered(state),
  rightAnsweredInPercentage: selector.getUserRightAnsweredInPercentage(state),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResultPage);
