import SvgIcon from 'components/SvgIcon/SvgIcon';
import { useDispatch } from 'react-redux';
import { addToolsFilter, removeToolsFilter } from 'store/slice';
import css from './SearchFilterItem.module.css';

const SearchFilterItem = ({ name, icon, nameValue }) => {
  const dispatch = useDispatch();

  const updateStatus = filter => {
    if (filter.checked) {
      dispatch(addToolsFilter(filter.id));
    } else {
      dispatch(removeToolsFilter(filter.id));
    }
  };
  return (
    <li className={css.container}>
      <input
        className={css.input}
        id={name}
        type="checkbox"
        onChange={evt => updateStatus(evt.target)}
        hidden
      />
      <label className={css.checkbox} htmlFor={name}>
        <div className={css.svgBox}>
          <SvgIcon icon={icon} />
        </div>
        {nameValue}
      </label>
    </li>
  );
};

export default SearchFilterItem;
