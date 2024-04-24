import CamperDetailsHeader from 'components/Camper/CamperDetailsHeader/CamperDetailsHeader';
// import CamperImage from '../CamperImage/CamperImage';
import CamperFeatureList from '../CamperFeatureList/CamperFeatureList';
import Button from 'components/Button/SubmitButton';
import { NAMES } from 'properties/Constants';
import css from './CamperInfoCard.module.css';

const CamperInfoCard = ({ camper }) => {
  return (
    <li className={css.container}>
      <img className={css.image} src={camper.gallery[0]} alt={camper.name} />
      {/* <CamperImage url={camper.gallery[0]} alt={camper.name} /> */}
      <div className={css.infoblock}>
        <CamperDetailsHeader camper={camper} modal={false} />
        <p className={css.description}>{camper.description}</p>
        <CamperFeatureList features={camper.details} />
        <Button name={NAMES.BUTTONS.showMore} />
      </div>
    </li>
  );
};

export default CamperInfoCard;
