import { NAMES } from 'properties/Constants';
import css from './SearchLocation.module.css';
import SvgIcon from 'components/SvgIcon/SvgIcon';

const SearchLocation = () => {
  return (
    <div className={css.container}>
      <p className={css.label}>{NAMES.LABELS.location}</p>
      <div className={css.inputBox}>
        <input
          className={css.input}
          id="location"
          name="location"
          type="input"
          autoComplete="off"
          placeholder="City"
        />
        <div className={css.svgBox}>
          <SvgIcon icon={'location'} />
        </div>
      </div>
    </div>
  );
};

export default SearchLocation;
