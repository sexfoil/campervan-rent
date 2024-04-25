import SubmitButton from 'components/Button/SubmitButton';
import SearchFilterPanel from '../SearchFilterPanel/SearchFilterPanel';
import SearchLocation from '../SearchLocation/SearchLocation';
import { NAMES } from 'properties/Constants';
import { useDispatch, useSelector } from 'react-redux';
import { selectLocationFilter } from 'store/selector';
import { fetchCampers } from 'store/thunk';
import { updateCurrentPage, updateSearchLocation } from 'store/slice';
import css from './CamperSearchForm.module.css';

const CamperSearchForm = () => {
  const dispatch = useDispatch();
  const locationFilter = useSelector(selectLocationFilter);

  const handleSearchSubmit = evt => {
    evt.preventDefault();
    const currentPage = 1;
    dispatch(updateCurrentPage(currentPage));
    dispatch(updateSearchLocation(locationFilter));
    dispatch(
      fetchCampers({
        page: currentPage,
        limit: NAMES.PAGINATION.limit,
        locationFilter,
      })
    );
  };

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSearchSubmit}>
        <SearchLocation />
        <p className={css.group}>{NAMES.LABELS.filters}</p>
        <SearchFilterPanel
          filterGroupName={NAMES.FILTER_GROUPS.equipment}
          filters={NAMES.TOOLS_FILTER_SET}
        />
        <SearchFilterPanel
          filterGroupName={NAMES.FILTER_GROUPS.type}
          filters={NAMES.CAMPER_TYPES}
        />
        <span className={css.gap}></span>
        <SubmitButton name={NAMES.BUTTONS.search} />
      </form>
    </div>
  );
};

export default CamperSearchForm;
