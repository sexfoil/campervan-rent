import CamperInfoList from 'components/Camper/CamperInfoList/CamperInfoList';
import css from './InfoBlock.module.css';
import LoadMoreButton from 'components/Button/LoadMoreButton';
import { NAMES } from 'properties/Constants';

const InfoBlock = ({ campers, loadMore }) => {
  return (
    <div className={css.container}>
      {/* {loading && <Loader />} */}
      <CamperInfoList campers={campers} />
      <span className={css.loadMore}>
        {loadMore && <LoadMoreButton name={NAMES.BUTTONS.loadMore} />}
      </span>
    </div>
  );
};

export default InfoBlock;
