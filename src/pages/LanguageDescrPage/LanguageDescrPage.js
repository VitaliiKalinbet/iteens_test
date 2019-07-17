import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as languageDescrPageSelectors from '../../redux/languageDescrPage/languageDescrPageSelectors';
import * as languageDescrPageActionCreators from '../../redux/languageDescrPage/languageDescrPageActionCreators';
import * as languageDescrPageOperations from '../../redux/languageDescrPage/languageDescrPageOperations';
import styles from './LanguageDescrPage.module.css';
import StatisticBlock from './StatisticBlock/StatisticBlock';
import InformationBlock from './InformationBlock/InformationBlock';
import store from '../../redux/store';
import Header from '../../components/Header/Header';
// import logo from '../../assets/img/languages/csharp.png';
import '../../fonts.css';

class LanguageDescrPage extends Component {
  state = {};

  handleBtnBack = e => {
    const { onComeBack } = this.props;
    e.preventDefault();
    onComeBack(store.getState());
  };

  handleBtnStart = e => {
    const { fetchTest, setStartTime, currentLanguageId } = this.props;
    e.preventDefault();
    fetchTest(currentLanguageId);
    setStartTime(Date.now());
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
  currentLanguageId: PropTypes.string.isRequired,
};
LanguageDescrPage.defaultProps = {
  updatedAt: '00:00:00',
};
const mapStateToProps = state => ({
  languageInfo: languageDescrPageSelectors.getLanguageById(state),
  currentLanguageId: languageDescrPageSelectors.getCurrentLanguageId(state),
});

const mapDispatchToProps = dispatch => ({
  onComeBack: currentLanguage =>
    dispatch(languageDescrPageActionCreators.onComeBack(currentLanguage)),
  fetchTest: id => dispatch(languageDescrPageOperations.fetchTest(id)),
  setStartTime: startTime =>
    dispatch(languageDescrPageActionCreators.startTime(startTime)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LanguageDescrPage);
