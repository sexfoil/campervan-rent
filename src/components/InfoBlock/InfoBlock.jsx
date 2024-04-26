import CamperInfoList from 'components/Camper/CamperInfoList/CamperInfoList';
import LoadMoreButton from 'components/Button/LoadMoreButton';
import { NAMES } from 'properties/Constants';
import css from './InfoBlock.module.css';

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
