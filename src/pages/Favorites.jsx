import SvgIcon from 'components/SvgIcon/SvgIcon';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'store/selector';
import CamperInfoCard from 'components/Camper/CamperInfoCard/CamperInfoCard';
import { useScrollVisibility } from 'hooks/useScrollVisibility';
import css from './Favorites.module.css';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  const scrollUp = useScrollVisibility(false);

  const onClickScrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className={css.container}>
      {favorites.length !== 0 ? (
        <ul className={css.list}>
          {favorites.map(camper => {
            return <CamperInfoCard key={camper._id} camper={camper} />;
          })}
        </ul>
      ) : (
        'It seems you have no favorites yet'
      )}
      {scrollUp.isVisible && (
        <button className={css.scroll} type="button" onClick={onClickScrollUp}>
          <SvgIcon icon={'scrollup'} />
        </button>
      )}
    </div>
  );
};

export default Favorites;
