import css from './Button.module.css';

const Button = ({ name, onClickButton }) => {
  return (
    <button
      className={css.button}
      type="button"
      onClick={() => onClickButton()}
    >
      {name}
    </button>
  );
};

export default Button;
