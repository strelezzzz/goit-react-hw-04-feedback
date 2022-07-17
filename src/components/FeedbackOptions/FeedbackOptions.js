import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackOptions.css';

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

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
