import propTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      Load More
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClick: propTypes.func.isRequired,
};
