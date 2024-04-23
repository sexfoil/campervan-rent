import { NAMES } from 'properties/Constants';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { useDispatch, useSelector } from 'react-redux';
import { selectLocationFilter } from 'store/selector';
import { updateLocationFilter } from 'store/slice';
import css from './SearchLocation.module.css';

const SearchLocation = () => {
  const dispatch = useDispatch();
  const locationFilter = useSelector(selectLocationFilter);

  const updateValue = value => {
    dispatch(updateLocationFilter(value));
  };

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
          value={locationFilter}
          onChange={evt => updateValue(evt.target.value)}
        />
        <div className={css.svgBox}>
          <SvgIcon icon={'location'} />
        </div>
      </div>
    </div>
  );
};

export default SearchLocation;
