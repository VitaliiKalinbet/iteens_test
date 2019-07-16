import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect, getState } from 'react-redux';
import * as languageDescrPageSelectors from '../../redux/languageDescrPage/languageDescrPageSelectors';
import * as languageDescrPageActionCreators from '../../redux/languageDescrPage/languageDescrPageActionCreators';
import * as languageDescrPageOperations from '../../redux/languageDescrPage/languageDescrPageOperations';
import styles from './LanguageDescrPage.module.css';
import StatisticBlock from './StatisticBlock/StatisticBlock';
import InformationBlock from './InformationBlock/InformationBlock';
import Header from '../../components/Header/Header';
// import logo from '../../assets/img/languages/csharp.png';
import '../../fonts.css';

class LanguageDescrPage extends Component {
  state = {
    timeStart: 0,
  };

  handleBtnBack = e => {
    const { onComeBack } = this.props;
    e.preventDefault();
    onComeBack();
  };

  handleBtnStart = e => {
    const { fetchTest, setStartTime } = this.props;
    e.preventDefault();
    fetchTest(languageDescrPageSelectors.getCurrentLanguageId(getState()));

    this.setState({
      timeStart: Date.now(),
    });
    setStartTime({ ...this.state });
  };

  render() {
    const {
      title,
      description,
      image,
      pullQuestions,
      countQuestions,
      createdAt,
      updatedAt,
    } = this.props;
    return (
      <>
        <Header />
        <section className={styles.languageDescrPageContainer}>
          <StatisticBlock
            logo={image}
            questionCount={countQuestions}
            questionPull={pullQuestions}
            createdAt={createdAt}
            updatedAt={updatedAt}
            onClick={this.handleBtnBack}
          />
          <InformationBlock
            title={title}
            description={description}
            onStart={this.handleBtnStart}
          />
        </section>
      </>
    );
  }
}

LanguageDescrPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  countQuestions: PropTypes.number.isRequired,
  pullQuestions: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string,
  onComeBack: PropTypes.func.isRequired,
  fetchTest: PropTypes.func.isRequired,
  setStartTime: PropTypes.func.isRequired,
};
LanguageDescrPage.defaultProps = {
  updatedAt: '00:00:00',
};
const mapStateToProps = state => ({
  languageInfo: languageDescrPageSelectors.getLanguageById(state),
});

const mapDispatchToProps = dispatch => ({
  onComeBack: currentLanguage =>
    dispatch(languageDescrPageActionCreators.onComeBack(currentLanguage)),
  fetchTest: languageDescrPageOperations.fetchTest,
  setStartTime: startTime =>
    dispatch(languageDescrPageActionCreators.timeStart(startTime)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LanguageDescrPage);
