import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as languageDescrPageSelectors from '../../redux/languageDescrPage/languageDescrPageSelectors';
import * as languageDescrPageActionCreators from '../../redux/languageDescrPage/languageDescrPageActionCreators';
import styles from './LanguageDescrPage.module.css';
import StatisticBlock from './StatisticBlock/StatisticBlock';
import InformationBlock from './InformationBlock/InformationBlock';
import Header from '../../components/Header/Header';
import logo from '../../assets/img/languages/csharp.png';
import '../../fonts.css';

class LanguageDescrPage extends Component {
  state = {
    currentLanguage: '',
  };

  componentDidMount() {
    this.props.setCurrentLanguage('Java');
  }

  comeBackBtn = e => {
    const { onComeBack } = this.props;
    e.preventDefault();
    onComeBack();
  };

  render() {
    return (
      <>
        <Header />
        <section className={styles.languageDescrPageContainer}>
          <StatisticBlock
            logo={logo}
            questionCount={25}
            questionPull={200}
            createdAt="20.12.2018"
            updatedAt="05.03.2019"
            onClick={this.comeBackBtn}
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
      </>
    );
  }
  // render() {
  //   const {
  //     title,
  //     description,
  //     image,
  //     pullQuestions,
  //     countQuestions,
  //     createdAt,
  //     updatedAt,
  //   } = this.props;
  //   return (
  //     <>
  //       <Header />
  //       <section className={styles.languageDescrPageContainer}>
  //         <StatisticBlock
  //           logo={image}
  //           questionCount={countQuestions}
  //           questionPull={pullQuestions}
  //           createdAt={createdAt}
  //           updatedAt={updatedAt}
  //         />
  //         <InformationBlock title={title} description={description} />
  //       </section>
  //     </>
  //   );
  // }
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
};
LanguageDescrPage.defaultProps = {
  updatedAt: '00:00:00',
};
// const mapStateToProps = state => ({
//   languageInfo: languageDescrPageSelectors.getLanguageById(state),
// });

const mapDispatchToProps = dispatch => ({
  onComeBack: currentLanguage =>
    dispatch(languageDescrPageActionCreators.onComeBack(currentLanguage)),
  setCurrentLanguage: currentLanguage =>
    dispatch(languageDescrPageActionCreators.currentLanguage(currentLanguage)),
});

export default connect(
  null,
  mapDispatchToProps,
)(LanguageDescrPage);
