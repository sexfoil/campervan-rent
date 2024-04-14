import Button from 'components/Button/Button';
import SearchFilterPanel from '../SearchFilterPanel/SearchFilterPanel';
import SearchLocation from '../SearchLocation/SearchLocation';
import css from './CamperSearchForm.module.css';

const CamperSearchForm = () => {
  return (
    <div className={css.container}>
      <SearchLocation />
      <SearchFilterPanel />
      <Button />
    </div>
  );
};

export default CamperSearchForm;
