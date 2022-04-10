import PropTypes from 'prop-types';
import styles from './Notification.css';

const Notification = ({ message }) => {
  return <h2 className={styles.message}>{message}</h2>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
