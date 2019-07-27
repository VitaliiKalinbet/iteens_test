import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './LanguageCard.module.css';
import { setLanguage } from '../../../redux/startPageRedux/startPageActions';

const LanguageCard = ({
  image,
  title,
  countQuestions,
  languageId,
  setLanguageReducer = () => null,
}) => (
  <li className={style.card}>
    <Link
      className={style.link}
      onClick={() => setLanguageReducer(languageId)}
      to="/language_descr"
    />
    <div className={style.shadow} />
    <div className={style.wrapper}>
      {image.length ? (
        <img
          height="85"
          width="auto"
          className={style.logo}
          src={image}
          alt="logoLang"
        />
      ) : (
        <div className={style.emptyImg} />
      )}

      <p className={style.lang}>{title}</p>
      <p className={style.questions}>{countQuestions} вопросов</p>
    </div>
  </li>
);

LanguageCard.defaultProps = {
  image: '',
};

LanguageCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  countQuestions: PropTypes.number.isRequired,
  languageId: PropTypes.string.isRequired,
  setLanguageReducer: PropTypes.func.isRequired,
};

const mapDispatchToPropps = dispatch => ({
  setLanguageReducer: languageId => dispatch(setLanguage(languageId)),
});

export default connect(
  null,
  mapDispatchToPropps,
)(LanguageCard);
