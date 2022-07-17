import React from 'react';

import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';

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
    <Section title="Please live feedback">
      <FeedbackOptions options={keys} onLeaveFeedback={onHandleIncrement} />
    </Section>
    <Section title="Statistics">
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
      />
    </Section>
  </>
);

export default Feedback;
