import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './LanguageDescrPage.module.css';
import mobilePhoto from '../../assets/img/Csharp/csharp_mobile.png';
import tabletPhoto from '../../assets/img/Csharp/csharp_tablet.png';
import desktopPhoto from '../../assets/img/Csharp/csharp_desktop.png';
import '../../fonts.css';

class LanguageDescrPage extends Component {
  state = {};

  render() {
    return (
      <section className={styles.languageDescrPageContainer}>
        <div className={styles.firstBlock}>
          <picture className={styles.firstBlockPicture}>
            <source media="(min-width: 768px)" srcSet={tabletPhoto} />
            <source media="(min-width: 1280px)" srcSet={desktopPhoto} />
            <img
              className={styles.firstBlockImageMobile}
              src={mobilePhoto}
              alt="mobile"
            />
          </picture>
          <div className={styles.firstBlockTextInfo}>
            <div className={styles.textBlock_item}>
              <p>Количество вопросов</p>
              <span />
              <p className={styles.textBlock_itemNumber}>25</p>
            </div>
            <div className={styles.textBlock_item}>
              <p>Пул вопросов</p>
              <span />
              <p className={styles.textBlock_itemNumber}>200</p>
            </div>
            <div className={styles.textBlock_item}>
              <p>Создан</p>
              <span />
              <p className={styles.textBlock_itemNumber}>20.12.2018</p>
            </div>
            <div className={styles.textBlock_item}>
              <p>Обновлен</p>
              <span />
              <p className={styles.textBlock_itemNumber}>05.03.2019</p>
            </div>
            <NavLink to="/" className={styles.btnGoBack}>
              Вернуться к списку тестов
            </NavLink>
          </div>
        </div>
        <div className={styles.secondBlock}>
          <h2 className={styles.secondBlockTitle}>Основы C#</h2>
          <p className={styles.secondBlockDescription}>
            Тестирование включает в себя основы синтаксиса, принципы работы
            языка, параметры и взаимодействия с другими языками. Тест
            предназначен для новичков в языке, он поможет систематизировать
            знания в C#, познакомится с принципами и первыми «подводными
            камнями» которые преподносит эта технология. Тест включает в себя
            более тысячи вопросов, что поможет корректно определить уровень
            знаний, познакомить с неизвестными направлениями новичка и освежить
            память профессионалу. Тематики вопросов включают в себя: ООП, основы
            языка, строки, массивы, работа с файлами и базой, http cookie
            session, работа со строками, базовый синтаксис, web, функции, работа
            с безопасностью, форматы данных, работа с базой данных.
          </p>
          <button className={styles.btnStartTest} type="button">
            Начать тест
          </button>
        </div>
      </section>
    );
  }
}

export default LanguageDescrPage;
