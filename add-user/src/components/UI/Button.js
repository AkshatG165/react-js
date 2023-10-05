import classes from './Button.module.css';

function Button({ type, label, onClick }) {
  return (
    <button type={type} className={classes['button']} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
