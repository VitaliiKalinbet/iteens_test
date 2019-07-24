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
    const { endTime } = this.props;
    if (!endTime) return null;
    return (
      <div className={css.container}>
        <Header />
        <ResultDiagramm
          allQuestionsCount={25}
          languageTitle="C#"
          rightAnswered={20}
          rightAnsweredInPercentage={80}
          totalTime={this.getMinutes()}
        />
        <AllTestContainer />
      </div>
    );
  }
}

ResultPage.propTypes = {
  startTime: PropTypes.number.isRequired,
  endTime: PropTypes.number.isRequired,
  setEndTime: PropTypes.func.isRequired,
};
const mapDispatchToProps = {
  setEndTime: actions.endTime,
};
const mapStateToProps = state => ({
  startTime: selectors.startTime(state),
  endTime: selectors.endTime(state),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResultPage);
