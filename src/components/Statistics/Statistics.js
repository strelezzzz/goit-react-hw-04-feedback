import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <section className={css.Statistics}>
    <ul className={css.Statistics__list}>
      <li className={css.Statistics__item}>Good: {good}</li>
      <li className={css.Statistics__item}>Neutral: {neutral}</li>
      <li className={css.Statistics__item}>Bad: {bad}</li>
      <li className={css.Statistics__item}>Total: {total}</li>
      <li className={css.Statistics__item}>
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  </section>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
