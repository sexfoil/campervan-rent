import CamperSearchForm from 'components/Search/CamperSearchForm/CamperSearchForm';
import CamperInfoList from 'components/Camper/CamperInfoList/CamperInfoList';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { useScrollVisibility } from 'hooks/useScrollVisibility';
import css from './Catalog.module.css';
import ModalCamperItem from 'components/Modal/ModalCamperItem/ModalCamperItem';
import { useSelector } from 'react-redux';
import { selectCurrentCamper } from 'store/selector';

export const Catalog = () => {
  const scrollUp = useScrollVisibility(false);

  const onClickScrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const camper = useSelector(selectCurrentCamper);

  return (
    <>
      <div className={css.container}>
        <CamperSearchForm />
        <div className={css.campers}>
          {/* {loading && <Loader />}
        {error}
        {campers.length !== 0 && (
          <InfoBlock campers={campers} loadMore={loadMore} />
        )} */}
          <CamperInfoList />
        </div>
        {scrollUp.isVisible && (
          <button
            className={css.scroll}
            type="button"
            onClick={onClickScrollUp}
          >
            <SvgIcon icon={'scrollup'} />
          </button>
        )}
      </div>
      {camper && <ModalCamperItem />}
    </>
  );
};

export default Catalog;
