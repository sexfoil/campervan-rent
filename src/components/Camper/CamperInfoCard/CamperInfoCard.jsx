import CamperDetailsHeader from 'components/Camper/CamperDetailsHeader/CamperDetailsHeader';
import CamperImage from '../CamperImage/CamperImage';
import css from './CamperInfoCard.module.css';
import CamperFeatureList from '../CamperFeatureList/CamperFeatureList';
import Button from 'components/Button/Button';

const CamperInfoCard = ({ gallery, name, details }) => {
  return (
    <li className={css.container}>
      <CamperImage url={gallery[0]} alt={name} />
      <div className={css.infoblock}>
        <CamperDetailsHeader />
        <p className={css.description}>Description</p>
        <CamperFeatureList details={details} />
        <Button />
      </div>
    </li>
  );
};

export default CamperInfoCard;
