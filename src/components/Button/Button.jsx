import css from './Button.module.css';

const Button = ({ name }) => {
  return <div className={css.button}>{name}</div>;
};

export default Button;
