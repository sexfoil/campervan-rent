import SubmitButton from 'components/Button/SubmitButton';
import SearchFilterPanel from '../SearchFilterPanel/SearchFilterPanel';
import SearchLocation from '../SearchLocation/SearchLocation';
import css from './CamperSearchForm.module.css';
import { NAMES } from 'properties/Constants';
import { useDispatch, useSelector } from 'react-redux';
import { selectLocationFilter } from 'store/selector';
// import { updateCurrentPage } from 'store/slice';
import { fetchCampers } from 'store/thunk';

const CamperSearchForm = () => {
  const dispatch = useDispatch();
  const locationFilter = useSelector(selectLocationFilter);

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log('location>> ', locationFilter);
    // dispatch(updateCurrentPage(0));
    dispatch(
      fetchCampers({
        page: 1,
        limit: NAMES.PAGINATION.limit,
        locationFilter,
      })
    );
  };

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit}>
        <SearchLocation />
        <p className={css.group}>{NAMES.LABELS.filters}</p>
        <SearchFilterPanel
          filterGroupName={NAMES.FILTER_GROUPS.equipment}
          filters={Object.keys(NAMES.TOOLS_FILTER_SET)}
        />
        <SearchFilterPanel
          filterGroupName={NAMES.FILTER_GROUPS.type}
          filters={Object.keys(NAMES.CAMPER_TYPES)}
        />
        <span className={css.gap}></span>
        <SubmitButton name={NAMES.BUTTONS.search} />
      </form>
    </div>
  );
};

export default CamperSearchForm;
