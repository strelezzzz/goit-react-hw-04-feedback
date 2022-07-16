import React from 'react';

// import PropTypes from 'prop-types';
// import css from './Feedback.module.css';

const Feedback = ({
  keys,
  onHandleIncrement,
  good,
  neutral,
  bad,
  total,
  feedbackPercent,
}) => (
  <>
    <h2>Please live feedback</h2>
    <ul className="FeedbackListBtn">
      {keys.map(key => {
        return (
          <button
            key={key}
            type="button"
            onClick={() => onHandleIncrement(key)}
          >
            {key}
          </button>
        );
      })}
    </ul>
    <h2>Statistics</h2>
    <ul className="FedbackListStat">
      <li className="FeedbackList__item">Good: {good}</li>
      <li className="FeedbackList__item">Neutral: {neutral}</li>
      <li className="FeedbackList__item">Bad: {bad}</li>
      <li className="FeedbackList__item">Total: {total}</li>
      <li className="FeedbackList__item">
        feedbackPercent: {feedbackPercent}%
      </li>
    </ul>
  </>
);

export default Feedback;
