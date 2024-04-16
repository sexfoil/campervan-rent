import css from './Price.module.css';

const Price = ({ currency, price }) => {
  return <div className={css.container}>{currency + price.toFixed(2)}</div>;
};

export default Price;
