import css from './Button.module.css';

const SubmitButton = ({ name }) => {
  return (
    <button className={`${css.button} ${css.submit}`} type="submit">
      {name}
    </button>
  );
};

export default SubmitButton;
