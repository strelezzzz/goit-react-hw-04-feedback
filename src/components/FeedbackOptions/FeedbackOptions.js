import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    <h2>Please live feedback</h2>
    <ul className="FeedbackListBtn">
      {options.map(key => {
        return (
          <button key={key} type="button" onClick={() => onLeaveFeedback(key)}>
            {key}
          </button>
        );
      })}
    </ul>
  </>
);

export default FeedbackOptions;
