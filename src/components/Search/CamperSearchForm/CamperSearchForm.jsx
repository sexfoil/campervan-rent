import SubmitButton from 'components/Button/SubmitButton';
import SearchFilterPanel from '../SearchFilterPanel/SearchFilterPanel';
import SearchLocation from '../SearchLocation/SearchLocation';
import css from './CamperSearchForm.module.css';
import { NAMES } from 'properties/Constants';

const CamperSearchForm = () => {
  return (
    <div className={css.container}>
      <form className={css.form}>
        <SearchLocation />
        <p className={css.group}>{NAMES.LABELS.filters}</p>
        <SearchFilterPanel
          filterGroupName={NAMES.FILTER_GROUPS.equipment}
          filters={['TV', 'CD', 'transmission', 'petrol', 'water']}
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
