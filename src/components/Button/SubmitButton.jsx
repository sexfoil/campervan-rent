import css from './Button.module.css';

const SubmitButton = ({ name }) => {
  return <div className={`${css.button} ${css.submit}`}>{name}</div>;
};

export default SubmitButton;
