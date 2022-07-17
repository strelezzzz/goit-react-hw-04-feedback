import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
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
