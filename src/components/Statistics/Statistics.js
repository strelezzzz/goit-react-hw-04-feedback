import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <section>
    <ul className="FedbackListStat">
      <li className="FeedbackList__item">Good: {good}</li>
      <li className="FeedbackList__item">Neutral: {neutral}</li>
      <li className="FeedbackList__item">Bad: {bad}</li>
      <li className="FeedbackList__item">Total: {total}</li>
      <li className="FeedbackList__item">
        feedbackPercent: {positivePercentage}%
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
