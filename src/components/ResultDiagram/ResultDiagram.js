import React from 'react';
import ReactMinimalPieChart from 'react-minimal-pie-chart';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './ResultDiagram.module.css';

const ResultDiagramm = ({
  allQuestionsCount,
  rightAnswered,
  languageTitle,
  totalTime,
  rightAnsweredInPercentage,
}) => {
  const wishes = percentage => {
    if (percentage <= 25) return 'Рандом прошел бы этот тест лучше(((';
    if (percentage > 25 && percentage <= 50)
      return 'Ну такое... Закрывай, пока никто не увидел';
    if (percentage > 50 && percentage <= 75)
      return 'Ты на правильном пути! Не останавливайся';
    if (percentage > 75 && percentage <= 99)
      return 'Красавчик! Но можно лучше)))';
    return "Идеально! You're the BEST!";
  };
  return (
    <div className={style.container}>
      <h2 className={style.head}>
        Результаты теста &ldquo;{languageTitle}&rdquo;
      </h2>
      <div className={style.diagramm}>
        <ReactMinimalPieChart
          data={[
            {
              title: 'Correct',
              value: rightAnsweredInPercentage,
              color: '#ff6c00',
            },
            {
              title: 'Incorrect',
              value: 100 - rightAnsweredInPercentage,
              color: '#8b92ab',
            },
          ]}
          lineWidth={15}
        />
        <span className={style.digrammPercentage}>
          {Math.round(rightAnsweredInPercentage)}%
        </span>
      </div>
      <p className={style.wishes}>{wishes(rightAnsweredInPercentage)}</p>
      <p className={style.statistics}>
        <span className={style.bracket}>[ </span>Правильных ответов{' '}
        <span className={style.innerNumber}>{rightAnswered}</span>
        <span className={style.bracket}> ]</span>
      </p>
      <p className={style.statistics}>
        <span className={style.bracket}>[ </span>Всего вопросов{' '}
        <span className={style.innerNumber}>{allQuestionsCount}</span>
        <span className={style.bracket}> ]</span>
      </p>
      <p className={style.statistics}>
        <span className={style.bracket}>[ </span>Время{' '}
        <span className={style.innerNumber}>{totalTime} мин</span>
        <span className={style.bracket}> ]</span>
      </p>
      <Link className={style.link} to="/">
        Пройти еще раз
      </Link>
    </div>
  );
};

ResultDiagramm.defaultProps = {
  allQuestionsCount: 25,
  rightAnswered: 0,
  languageTitle: 'Java',
  rightAnsweredInPercentage: 0,
};

ResultDiagramm.propTypes = {
  allQuestionsCount: PropTypes.number,
  rightAnswered: PropTypes.number,
  languageTitle: PropTypes.string,
  totalTime: PropTypes.string.isRequired,
  rightAnsweredInPercentage: PropTypes.number,
};

export default ResultDiagramm;
