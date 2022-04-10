import PropTypes from 'prop-types';
import styles from './FeedbackOptions.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.container}>
      {options.map(option => (
        <li key={option} className={styles.item}>
          <button
            type="button"
            className={styles.button}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
};

export default FeedbackOptions;
