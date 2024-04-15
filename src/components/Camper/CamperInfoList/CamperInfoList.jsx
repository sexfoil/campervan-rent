import Button from 'components/Button/Button';
import CamperInfoCard from '../CamperInfoCard/CamperInfoCard';
import css from './CamperInfoList.module.css';

const CamperInfoList = ({ campers }) => {
  return campers.length !== 0 ? (
    <div className={css.container}>
      <ul className={css.list}>
        {campers.map(camper => {
          return <CamperInfoCard key={camper._id} {...camper} />;
        })}
      </ul>
      <Button />
    </div>
  ) : (
    <p>There is no camper to show.</p>
  );
};

export default CamperInfoList;
