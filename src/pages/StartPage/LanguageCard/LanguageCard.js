import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './LanguageCard.module.css';

const LanguageCard = ({ img, lang, qustions }) => (
  <li className={style.card}>
    <Link className={style.link} to="/language_descr" />
    <div className={style.shadow} />
    {img.length ? (
      <img className={style.logo} src={img} alt="logoLang" />
    ) : (
      <div className={style.emptyImg} />
    )}

    <p className={style.lang}>{lang}</p>
    <p className={style.questions}>{qustions} вопросов</p>
  </li>
);

LanguageCard.defaultProps = {
  img: '',
};

LanguageCard.propTypes = {
  img: PropTypes.string,
  lang: PropTypes.string.isRequired,
  qustions: PropTypes.number.isRequired,
};

export default LanguageCard;
