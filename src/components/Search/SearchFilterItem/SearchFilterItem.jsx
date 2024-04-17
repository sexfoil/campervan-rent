import SvgIcon from 'components/SvgIcon/SvgIcon';
import css from './SearchFilterItem.module.css';

const SearchFilterItem = ({ name, icon }) => {
  return (
    <li className={css.container}>
      <input className={css.input} id={name} type="checkbox" hidden />
      <label className={css.checkbox} htmlFor={name}>
        <div className={css.svgBox}>
          <SvgIcon icon={icon} />
        </div>
        {name}
      </label>
    </li>
  );
};

export default SearchFilterItem;
