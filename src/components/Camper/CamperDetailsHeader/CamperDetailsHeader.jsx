import { NAMES } from 'properties/Constants';
import Price from 'components/Price/Price';
import Raiting from 'components/Rating/Rating';
import CamperLocation from 'components/Location/CamperLocation';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from 'store/selector';
import { updateFavorites } from 'store/slice';
import css from './CamperDetailsHeader.module.css';

const CamperDetailsHeader = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const swapFavorites = () => {
    if (isFavorite(camper._id)) {
      dispatch(
        updateFavorites(
          favorites.filter(favorite => favorite._id !== camper._id)
        )
      );
    } else {
      dispatch(updateFavorites([...favorites, camper]));
    }
  };

  const isFavorite = id => favorites.some(favorite => favorite._id === id);

  return (
    <div className={css.container}>
      <div className={css.group}>
        <h3 className={css.header}>{camper.name}</h3>
        <div className={css.groupData}>
          <Raiting rating={camper.rating} reviews={camper.reviews.length} />
          <CamperLocation location={camper.location} />
        </div>
      </div>
      <Price currency={NAMES.CURRENCY.euro} price={camper.price} />
      <div className={css.svgBox} onClick={() => swapFavorites()}>
        <span className={css[`${isFavorite(camper._id) ? 'favorite' : ''}`]}>
          <SvgIcon icon={'heart'} />
        </span>
      </div>
    </div>
  );
};

export default CamperDetailsHeader;
