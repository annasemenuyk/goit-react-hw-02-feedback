import PropTypes from 'prop-types';
import './FeedbackOptions.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className="List">
      {options.map(option => (
        <li key={option} className="Item">
          <button
            type="button"
            className="button"
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
