import { NAMES } from 'properties/Constants';
import css from './ModalTabsHeader.module.css';

const ModalTabsHeader = ({ activeTab, changeActiveTab }) => {
  return (
    <div className={css.container}>
      <div
        className={css.tab}
        onClick={() => changeActiveTab(NAMES.TABS.features)}
      >
        {NAMES.TABS.features}
        <span
          className={activeTab === NAMES.TABS.features ? css.active : ''}
        ></span>
      </div>
      <div
        className={css.tab}
        onClick={() => changeActiveTab(NAMES.TABS.reviews)}
      >
        {NAMES.TABS.reviews}
        <span
          className={activeTab === NAMES.TABS.reviews ? css.active : ''}
        ></span>
      </div>
    </div>
  );
};

export default ModalTabsHeader;
