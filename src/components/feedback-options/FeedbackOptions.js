import React from 'react';
import PropTypes from "prop-types";
import styles from "./feedback-options.module.css"



export default function FeedbackOptions({ onLeaveFeedback, feedbackKeys }) {
  return (
    <ul className={styles.list}>
      {feedbackKeys.map(feedback => (
        <li key={feedback}>
          <button
            type="button"
            name={feedback}
            className={styles.buttonContainer}
            onClick={onLeaveFeedback}
          >
            {feedback}
          </button>
        </li>
      ))}
    </ul>
  );
}
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  feedbackKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
};