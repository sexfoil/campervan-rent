import CamperInfoCard from '../CamperInfoCard/CamperInfoCard';
import { NAMES } from 'properties/Constants';
import {
  selectCampers,
  selectCurrentPage,
  selectError,
  selectLoadMore,
  selectLoading,
  selectLocationFilter,
  selectSearchLocation,
  selectToolsFilter,
} from 'store/selector';
import { useEffect } from 'react';
import { fetchCampers } from 'store/thunk';
import Loader from 'components/Loader/Loader';
import LoadMoreButton from 'components/Button/LoadMoreButton';
import { useDispatch, useSelector } from 'react-redux';
import css from './CamperInfoList.module.css';
import { updateCurrentPage } from 'store/slice';

const CamperInfoList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const loadMore = useSelector(selectLoadMore);
  const currentPage = useSelector(selectCurrentPage);
  const searchLocation = useSelector(selectSearchLocation);
  const locationFilter = useSelector(selectLocationFilter);
  const toolsFilter = useSelector(selectToolsFilter);

  useEffect(() => {
    dispatch(
      fetchCampers({
        page: currentPage,
        limit: NAMES.PAGINATION.limit,
        location: searchLocation,
      })
    );
  }, [dispatch, currentPage, searchLocation]);

  const onClickLoadMore = () => {
    dispatch(updateCurrentPage(currentPage + 1));
  };

  const allMatches = camper => {
    const types = Object.keys(NAMES.CAMPER_TYPES);
    const checkedTypes = toolsFilter.filter(item => types.includes(item));
    if (checkedTypes.length > 0 && !checkedTypes.includes(camper.form)) {
      return false;
    }

    const features = Object.keys(NAMES.FEATURES);
    const checkedFeatures = toolsFilter.filter(item => features.includes(item));

    return checkedFeatures.every(filter => camper.details[filter] > 0);
  };

  const fromLocation = camperLocation => {
    return camperLocation.toLowerCase().includes(locationFilter.toLowerCase());
  };

  const filteredCampers = campers => {
    return campers
      .filter(camper => fromLocation(camper.location))
      .filter(camper => allMatches(camper));
  };

  return (
    <div className={css.container}>
      {error}
      {campers.length !== 0 && (
        <ul className={css.list}>
          {filteredCampers(campers).map(camper => {
            return <CamperInfoCard key={camper._id} camper={camper} />;
          })}
        </ul>
      )}
      {filteredCampers(campers).length === 0 && !loading && (
        <p>There is no camper to match your requirements</p>
      )}
      {loading && <Loader />}
      {filteredCampers(campers).length !== 0 && loadMore && (
        <LoadMoreButton
          name={NAMES.BUTTONS.loadMore}
          onClickLoadMore={onClickLoadMore}
        />
      )}
    </div>
  );
};

export default CamperInfoList;
