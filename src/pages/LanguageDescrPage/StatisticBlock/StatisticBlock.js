import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatisticBlock.module.css';
import TextBlockItem from './TextBlockItem/TextBlockItem';

const changeDate = date => {
  const infoDate = new Date(Date.parse(date));
  return infoDate.toLocaleDateString();
};
const StatisticBlock = ({
  logo,
  questionCount,
  questionPull,
  createdAt,
  updatedAt,
  onClick,
}) => (
  <div className={styles.firstBlock}>
    <img className={styles.firstBlockImage} src={logo} alt="languageLogo" />
    <div className={styles.firstBlockTextInfo}>
      <TextBlockItem itemName="Количество вопросов" info={questionCount} />
      <TextBlockItem itemName="Пул вопросов" info={questionPull} />
      <TextBlockItem itemName="Создан" info={changeDate(createdAt)} />
      <TextBlockItem itemName="Обновлен" info={changeDate(updatedAt)} />
      <button className={styles.btnGoBack} type="button" onClick={onClick}>
        Вернуться к списку тестов
      </button>
    </div>
  </div>
);

StatisticBlock.propTypes = {
  logo: PropTypes.string.isRequired,
  questionCount: PropTypes.number.isRequired,
  questionPull: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default StatisticBlock;
