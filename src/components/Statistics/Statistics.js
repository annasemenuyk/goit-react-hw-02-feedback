import PropTypes from 'prop-types';
import styles from './Statistics.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <h2 className={styles.text}>Good</h2>
        <p className={styles.statistic}>{good} </p>
      </li>

      <li className={styles.item}>
        <h2 className={styles.text}>Neutral</h2>
        <p className={styles.statistic}>{neutral}</p>
      </li>

      <li className={styles.item}>
        <h2 className={styles.text}>Bad</h2>
        <p className={styles.statistic}>{bad}</p>
      </li>

      <li className={styles.item}>
        <h2 className={styles.text}>Total</h2>
        <p className={styles.statistic}> {total} </p>
      </li>

      <li className={styles.item}>
        <h2 className={styles.text}>Positive Percentage</h2>
        <p className={styles.statistic}>{positivePercentage}%</p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
