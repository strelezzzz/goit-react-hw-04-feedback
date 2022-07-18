import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    <section className={css.FeedbackListBtn}>
      {options.map(key => {
        return (
          <button
            key={key}
            type="button"
            className={css.button}
            onClick={() => onLeaveFeedback(key)}
          >
            {key}
          </button>
        );
      })}
    </section>
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
