import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import Nav from '../../components/Header/Header';
import style from './StartPage.module.css';
import CardLanguage from './LanguageCard/LanguageCard';
import * as startPageOperations from '../../redux/startPageRedux/startPageOperations';
import * as languageSelectors from '../../redux/startPageRedux/startPageSelectors';

class StartPage extends Component {
  componentDidMount = () => {
    this.props.fetchLanguages();
  };

  render() {
    const { loading, languages, error } = this.props;
    return (
      <Fragment>
        <Nav />
        <section className={style.section}>
          <div className={style.sectionAbout}>
            <div className={style.sectionText}>
              <blockquote className={style.blockquote}>
                <span className={style.lduo}>&ldquo;</span>
                <br />Я не провалил тест, я просто нашел 100 способов сделать
                его неправильно
              </blockquote>
              <p className={style.autor}>Бенджамин Франклин</p>
              <p className={style.organization}>
                [ Онлайн тесты для студентов <span>GoITeens</span> ]
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
          {error && <p>Что-то пошло не так (</p>}
        </section>
      </Fragment>
    );
  }
}

StartPage.defaultProps = {
  error: null,
};

StartPage.propTypes = {
  fetchLanguages: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  // eslint-disable-next-line
  languages: PropTypes.array.isRequired,
  error: PropTypes.string,
};

const mapStateToProps = state => ({
  languages: languageSelectors.getPosts(state),
  loading: languageSelectors.loading(state),
  error: languageSelectors.error(state),
});

const mapDispatchToPropps = {
  fetchLanguages: startPageOperations.fetchLanguages,
};

export default connect(
  mapStateToProps,
  mapDispatchToPropps,
)(StartPage);
