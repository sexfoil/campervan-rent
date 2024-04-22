import css from './Button.module.css';

const LoadMoreButton = ({ name, onClickLoadMore }) => {
  return (
    <div
      className={`${css.button} ${css.loadMore}`}
      onClick={() => onClickLoadMore()}
    >
      {name}
    </div>
  );
};

export default LoadMoreButton;
