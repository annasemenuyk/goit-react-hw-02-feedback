import PropTypes from 'prop-types';
import styles from './Section.css';

const Section = ({ title, children }) => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{title}</h1> {children}
    </section>
  );
};
Section.PropTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
