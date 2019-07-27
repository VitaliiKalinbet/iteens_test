import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Media from 'react-media';
import Loader from 'react-loader-spinner';
import { withToastManager } from 'react-toast-notifications';
import Nav from '../../components/Header/Header';
import style from './StartPage.module.css';
import CardLanguage from './LanguageCard/LanguageCard';
import * as startPageOperations from '../../redux/startPageRedux/startPageOperations';
import * as languageSelectors from '../../redux/startPageRedux/startPageSelectors';
import { finishTest } from '../../redux/testPage/testPageOperations';
import { getUserId } from '../../redux/testPage/testPageSelectors';

class StartPage extends Component {
  componentDidMount = () => {
    if (this.props.userId) this.props.finishTest(this.props.userId);
    this.fetchLang();
  };

  fetchLang = async () => {
    const lang = this.props.fetchLanguages();
    lang.then(res => {
      if (res) {
        this.addNotification('Что-то пошло не так, перезагрузи страницу');
      }
    });
  };

  addNotification = error => {
    const { toastManager } = this.props;
    toastManager.add(error, {
      appearance: 'error',
      autoDismiss: true,
      pauseOnHover: true,
    });
  };

  render() {
    const { loading, languages } = this.props;
    return (
      <Fragment>
        <Nav />
        <section className={style.section}>
          <div className={style.sectionAbout}>
            <div className={style.sectionText}>
              <Media query={{ minWidth: 768 }}>
                {matches =>
                  matches && (
                    <Fragment>
                      <blockquote className={style.blockquote}>
                        <span className={style.lduo}>&ldquo;</span>
                        <br />Я не провалил тест, я просто нашел 100 способов
                        сделать его неправильно
                      </blockquote>
                      <p className={style.autor}>Бенджамин Франклин</p>
                    </Fragment>
                  )
                }
              </Media>
              <p className={style.organization}>
                [ Онлайн тесты для студентов{' '}
                <a
                  href="https://goiteens.ua/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GoITeens
                </a>{' '}
                ]
              </p>
            </div>
          </div>
          {loading && (
            <div className={style.loader}>
              <Loader type="Circles" color="#00BFFF" height="100" width="100" />
            </div>
          )}
          {languages.length > 0 && (
            <ul className={style.langList}>
              {languages.map(lang => (
                <CardLanguage key={lang.languageId} {...lang} />
              ))}
            </ul>
          )}
        </section>
      </Fragment>
    );
  }
}

StartPage.defaultProps = {
  error: null,
  userId: null,
};

StartPage.propTypes = {
  fetchLanguages: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  // eslint-disable-next-line
  languages: PropTypes.array.isRequired,
  error: PropTypes.string,
  userId: PropTypes.string,
  finishTest: PropTypes.func.isRequired,
  toastManager: PropTypes.shape({
    add: PropTypes.func,
    remove: PropTypes.func,
    toasts: PropTypes.array,
  }).isRequired,
};

const mapStateToProps = state => ({
  languages: languageSelectors.getPosts(state),
  loading: languageSelectors.loading(state),
  error: languageSelectors.error(state),
  userId: getUserId(state),
});

const mapDispatchToPropps = {
  fetchLanguages: startPageOperations.fetchLanguages,
  finishTest,
};

export default connect(
  mapStateToProps,
  mapDispatchToPropps,
)(withToastManager(StartPage));
