import CamperInfoList from 'components/Camper/CamperInfoList/CamperInfoList';
import css from './InfoBlock.module.css';

const InfoBlock = ({ campers }) => {
  return (
    <div className={css.container}>
      <h3>Trending movies:</h3>
      {/* {loading && <Loader />} */}
      <CamperInfoList campers={campers} />
    </div>
  );
};

export default InfoBlock;
