import css from './Button.module.css';

const LoadMoreButton = ({ name }) => {
  return <div className={`${css.button} ${css.loadMore}`}>{name}</div>;
};

export default LoadMoreButton;
