import CamperInfoCard from 'components/Camper/CamperInfoCard/CamperInfoCard';
import ModalCamperItem from 'components/Modal/ModalCamperItem/ModalCamperItem';
import ScrollUpButton from 'components/Button/ScrollUpButton';
import { useScrollVisibility } from 'hooks/useScrollVisibility';
import { useSelector } from 'react-redux';
import { selectCurrentCamper, selectFavorites } from 'store/selector';
import css from './Favorites.module.css';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  const camper = useSelector(selectCurrentCamper);
  const scrollUp = useScrollVisibility(false);

  const onClickScrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
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
          <ScrollUpButton onClickScrollUp={onClickScrollUp} />
        )}
      </div>
      {camper && <ModalCamperItem />}
    </>
  );
};

export default Favorites;
