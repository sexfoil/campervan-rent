import { NAMES } from 'properties/Constants';
import Price from 'components/Price/Price';
import css from './CamperDetailsHeader.module.css';

const CamperDetailsHeader = ({ name, price }) => {
  return (
    <div className={css.container}>
      <div className={css.group}>
        <h3>{name}</h3>
        <div>Raite</div>
      </div>
      <Price currency={NAMES.CURRENCY.euro} price={price} />
    </div>
  );
};

export default CamperDetailsHeader;
