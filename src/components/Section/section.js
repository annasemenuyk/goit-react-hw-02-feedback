import PropTypes from 'prop-types';
import styles from './Section.css';

export default function Section({ title, children }) {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{title}</h1> {children}
    </section>
  );
}
Sections.PropTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
