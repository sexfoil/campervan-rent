import SubmitButton from 'components/Button/SubmitButton';
import SearchFilterPanel from '../SearchFilterPanel/SearchFilterPanel';
import SearchLocation from '../SearchLocation/SearchLocation';
import css from './CamperSearchForm.module.css';
import { NAMES } from 'properties/Constants';

const CamperSearchForm = () => {
  return (
    <div className={css.container}>
      <SearchLocation />
      <SearchFilterPanel />
      <SubmitButton name={NAMES.BUTTONS.search} />
    </div>
  );
};

export default CamperSearchForm;
