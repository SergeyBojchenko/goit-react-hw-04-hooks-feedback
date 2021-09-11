import React from 'react';
import PropTypes from 'prop-types';
import styles from "./listStatistics.module.css"

const Statistics = ({
  total,
  positivePercentage,
  feedbackKeys,
  feedbacksObj,
}) => {
  return (
    <ul>
      {feedbackKeys.map(feedback => (
        <li key={feedback} className={styles.statistics}>
          <span>
            {feedback}:{feedbacksObj[feedback]}
          </span>
        </li>
      ))}
      <li className={styles.statistics}>Total:{total}</li>
      <li className={styles.statistics}>
        Positive feedback:{positivePercentage}%
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  feedbacksObj: PropTypes.object.isRequired,
  feedbackKeys: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Statistics;