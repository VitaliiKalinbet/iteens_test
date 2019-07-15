import React, { Component, Fragment } from 'react';
import Nav from '../../components/Header/Header';
import style from './StartPage.module.css';
import langages from './languages';
import CardLanguage from './LanguageCard/LanguageCard';

class StartPage extends Component {
  state = {};

  render() {
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
          <ul className={style.langList}>
            {langages.map(lang => (
              <CardLanguage key={lang.key} {...lang} />
            ))}
          </ul>
        </section>
      </Fragment>
    );
  }
}

export default StartPage;
