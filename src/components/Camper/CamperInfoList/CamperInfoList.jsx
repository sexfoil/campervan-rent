import CamperInfoCard from '../CamperInfoCard/CamperInfoCard';

import css from './CamperInfoList.module.css';
import { NAMES } from 'properties/Constants';
import LoadMoreButton from 'components/Button/LoadMoreButton';

const CamperInfoList = ({ campers }) => {
  return campers.length !== 0 ? (
    <div className={css.container}>
      <ul className={css.list}>
        {campers.map(camper => {
          return <CamperInfoCard key={camper._id} {...camper} />;
        })}
      </ul>
      <LoadMoreButton name={NAMES.BUTTONS.loadMore} />
    </div>
  ) : (
    <p>There is no camper to show.</p>
  );
};

export default CamperInfoList;
