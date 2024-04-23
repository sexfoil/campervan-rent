import CamperSearchForm from 'components/Search/CamperSearchForm/CamperSearchForm';
import CamperInfoList from 'components/Camper/CamperInfoList/CamperInfoList';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { useScrollVisibility } from 'hooks/useScrollVisibility';
import css from './Catalog.module.css';
import ModalCamperItem from 'components/Modal/ModalCamperItem/ModalCamperItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectCampers } from 'store/selector';
import { useEffect } from 'react';
import { fetchCampers } from 'store/thunk';
import { NAMES } from 'properties/Constants';

export const Catalog = () => {
  const scrollUp = useScrollVisibility(false);

  const onClickScrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  useEffect(() => {
    dispatch(
      fetchCampers({
        page: 1,
        limit: NAMES.PAGINATION.limit,
      })
    );
  }, [dispatch]);

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
      <ModalCamperItem campers={campers} />
    </>
  );
};

export default Catalog;
