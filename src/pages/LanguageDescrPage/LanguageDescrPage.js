import React, { Component } from 'react';
import styles from './LanguageDescrPage.module.css';
import StatisticBlock from './StatisticBlock/StatisticBlock';
import InformationBlock from './InformationBlock/InformationBlock';
import logo from '../../assets/img/languages/csharp.png';
import '../../fonts.css';

class LanguageDescrPage extends Component {
  state = {};

  render() {
    return (
      <section className={styles.languageDescrPageContainer}>
        <StatisticBlock
          logo={logo}
          questionCount={25}
          questionPull={200}
          createdAt="20.12.2018"
          updatedAt="05.03.2019"
        />
        <InformationBlock
          title="Основы C#"
          description="Тестирование включает в себя основы синтаксиса, принципы работы
            языка, параметры и взаимодействия с другими языками. Тест
            предназначен для новичков в языке, он поможет систематизировать
            знания в C#, познакомится с принципами и первыми «подводными
            камнями» которые преподносит эта технология. Тест включает в себя
            более тысячи вопросов, что поможет корректно определить уровень
            знаний, познакомить с неизвестными направлениями новичка и освежить
            память профессионалу. Тематики вопросов включают в себя: ООП, основы
            языка, строки, массивы, работа с файлами и базой, http cookie
            session, работа со строками, базовый синтаксис, web, функции, работа
            с безопасностью, форматы данных, работа с базой данных."
        />
      </section>
    );
  }
}

export default LanguageDescrPage;
