import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <section>
    <h2>Statistics</h2>
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

export default Statistics;
