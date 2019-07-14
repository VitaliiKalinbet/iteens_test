import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './StatisticBlock.module.css';
import TextBlockItem from './TextBlockItem/TextBlockItem';

const StatisticBlock = ({
  logo,
  questionCount,
  questionPull,
  createdAt,
  updatedAt,
}) => (
  <div className={styles.firstBlock}>
    <img className={styles.firstBlockImage} src={logo} alt="languageLogo" />
    <div className={styles.firstBlockTextInfo}>
      <TextBlockItem itemName="Количество вопросов" info={questionCount} />
      <TextBlockItem itemName="Пул вопросов" info={questionPull} />
      <TextBlockItem itemName="Создан" info={createdAt} />
      <TextBlockItem itemName="Обновлен" info={updatedAt} />
      <NavLink to="/" className={styles.btnGoBack}>
        Вернуться к списку тестов
      </NavLink>
    </div>
  </div>
);

StatisticBlock.propTypes = {
  logo: PropTypes.string.isRequired,
  questionCount: PropTypes.number.isRequired,
  questionPull: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
};

export default StatisticBlock;
