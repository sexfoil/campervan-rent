import SearchFilterItem from '../SearchFilterItem/SearchFilterItem';
import css from './SearchFilterPanel.module.css';

const SearchFilterPanel = ({ filterGroupName, filters }) => {
  return (
    <div className={css.container}>
      <p className={css.name}>{filterGroupName}</p>
      <ul className={css.group}>
        {filters.map(filter => {
          return <SearchFilterItem key={filter} name={filter} icon={filter} />;
        })}
      </ul>
    </div>
  );
};

export default SearchFilterPanel;
