import CamperInfoList from 'components/Camper/CamperInfoList/CamperInfoList';
import css from './InfoBlock.module.css';

const InfoBlock = ({ campers }) => {
  return (
    <div className={css.container}>
      {/* {loading && <Loader />} */}
      <CamperInfoList campers={campers} />
    </div>
  );
};

export default InfoBlock;
