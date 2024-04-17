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

        <SearchFilterPanel
          filterGroupName={NAMES.FILTERS.equipment}
          filters={['TV', 'CD', 'transmission', 'petrol', 'water']}
        />
        <SearchFilterPanel
          filterGroupName={NAMES.FILTERS.type}
          filters={['van', 'fully', 'alcove']}
        />
        <SubmitButton name={NAMES.BUTTONS.search} />
      </form>
    </div>
  );
};

export default CamperSearchForm;
