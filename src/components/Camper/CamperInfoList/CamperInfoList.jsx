import CamperInfoCard from '../CamperInfoCard/CamperInfoCard';
import { NAMES } from 'properties/Constants';
import {
  selectCampers,
  selectCurrentPage,
  selectError,
  selectLoadMore,
  selectLoading,
} from 'store/selector';
import { useEffect } from 'react';
import { fetchCampers } from 'store/thunk';
import Loader from 'components/Loader/Loader';
import LoadMoreButton from 'components/Button/LoadMoreButton';
import { useDispatch, useSelector } from 'react-redux';
import css from './CamperInfoList.module.css';

const CamperInfoList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const loadMore = useSelector(selectLoadMore);
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(fetchCampers({ page: 1, limit: NAMES.PAGINATION.limit }));
  }, [dispatch]);

  const onClickLoadMore = () => {
    console.log('loadMore>> ', loadMore);
    dispatch(
      fetchCampers({ page: currentPage, limit: NAMES.PAGINATION.limit })
    );
  };

  return (
    <div className={css.container}>
      {error}
      {campers.length !== 0 && (
        <ul className={css.list}>
          {campers.map(camper => {
            return <CamperInfoCard key={camper._id} camper={camper} />;
          })}
        </ul>
      )}
      {loading && <Loader />}
      {loadMore && (
        <LoadMoreButton
          name={NAMES.BUTTONS.loadMore}
          onClickLoadMore={onClickLoadMore}
        />
      )}
    </div>
  );
};

export default CamperInfoList;
