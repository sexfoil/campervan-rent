import { NAMES } from 'properties/Constants';
import Price from 'components/Price/Price';
import css from './CamperDetailsHeader.module.css';
import Raiting from 'components/Rating/Rating';
import CamperLocation from 'components/Location/CamperLocation';
import SvgIcon from 'components/SvgIcon/SvgIcon';

const CamperDetailsHeader = ({ name, price, rating, reviews, location }) => {
  return (
    <div className={css.container}>
      <div className={css.group}>
        <h3 className={css.header}>{name}</h3>
        <div className={css.groupData}>
          <Raiting rating={rating} reviews={reviews} />
          <CamperLocation location={location} />
        </div>
      </div>
      <Price currency={NAMES.CURRENCY.euro} price={price} />
      <div className={css.svgBox}>
        <SvgIcon icon={'heart'} />
      </div>
    </div>
  );
};

export default CamperDetailsHeader;
