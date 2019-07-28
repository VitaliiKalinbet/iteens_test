import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withToastManager } from 'react-toast-notifications';
import Loader from 'react-loader-spinner';
import * as languageDescrPageSelectors from '../../redux/languageDescrPage/languageDescrPageSelectors';
import * as languageDescrPageActionCreators from '../../redux/languageDescrPage/languageDescrPageActionCreators';
import * as languageDescrPageOperations from '../../redux/languageDescrPage/languageDescrPageOperations';
import styles from './LanguageDescrPage.module.css';
import StatisticBlock from './StatisticBlock/StatisticBlock';
import InformationBlock from './InformationBlock/InformationBlock';
import Header from '../../components/Header/Header';
import '../../fonts.css';

class LanguageDescrPage extends Component {
  state = {};

  handleBtnBack = e => {
    const { history } = this.props;
    e.preventDefault();
    history.push('/');
  };

  addNotification = error => {
    const { toastManager } = this.props;
    toastManager.add(error, {
      appearance: 'error',
      autoDismiss: true,
      pauseOnHover: true,
    });
  };

  handleBtnStart = async e => {
    const { setStartTime, fetchTest, currentLanguageId, history } = this.props;
    e.preventDefault();
    const tests = await fetchTest(currentLanguageId);
    if (tests) {
      this.addNotification(tests.message);
    } else {
      setStartTime(Date.now());
      history.push('/test');
    }
  };

  render() {
    const {
      languageInfo,
      languageInfo: {
        title,
        description,
        image,
        pullQuestions,
        countQuestions,
        createdAt,
        updatedAt,
      },
      loading,
    } = this.props;
    return (
      <>
        <Header />
        {!languageInfo ||
          (loading && (
            <div className={styles.loader}>
              <Loader type="Circles" color="#00BFFF" height="100" width="100" />
            </div>
          ))}
        {languageInfo &&
          (!loading && (
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
          ))}
      </>
    );
  }
}

LanguageDescrPage.propTypes = {
  languageInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    countQuestions: PropTypes.number.isRequired,
    pullQuestions: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string,
  }).isRequired,
  fetchTest: PropTypes.func.isRequired,
  setStartTime: PropTypes.func.isRequired,
  currentLanguageId: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  toastManager: PropTypes.shape({
    add: PropTypes.func,
    remove: PropTypes.func,
    toasts: PropTypes.array,
  }).isRequired,
  history: PropTypes.shape().isRequired,
};
const mapStateToProps = state => ({
  languageInfo: languageDescrPageSelectors.getLanguageById(state),
  currentLanguageId: languageDescrPageSelectors.getCurrentLanguageId(state),
  loading: languageDescrPageSelectors.loading(state),
  error: languageDescrPageSelectors.error(state),
});

const mapDispatchToProps = dispatch => ({
  fetchTest: id => dispatch(languageDescrPageOperations.fetchTest(id)),
  setStartTime: startTime =>
    dispatch(languageDescrPageActionCreators.startTime(startTime)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withToastManager(LanguageDescrPage));
