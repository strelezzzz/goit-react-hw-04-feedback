import React from 'react';

import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';

// import PropTypes from 'prop-types';
// import css from './Feedback.module.css';

const Feedback = ({
  keys,
  onHandleIncrement,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <>
    <FeedbackOptions options={keys} onLeaveFeedback={onHandleIncrement} />
    <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      total={total}
      positivePercentage={positivePercentage}
    />
  </>
);

export default Feedback;
