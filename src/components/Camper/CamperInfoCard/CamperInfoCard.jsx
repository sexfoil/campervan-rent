import CamperDetailsHeader from 'components/Camper/CamperDetailsHeader/CamperDetailsHeader';
import CamperFeatureList from '../CamperFeatureList/CamperFeatureList';
import Button from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { updateCurrentCamper } from 'store/slice';
import { NAMES } from 'properties/Constants';
import css from './CamperInfoCard.module.css';

const CamperInfoCard = ({ camper }) => {
  const dispatch = useDispatch();

  const onClickShowMore = () => {
    dispatch(updateCurrentCamper(camper));
  };

  return (
    <li className={css.container}>
      <img className={css.image} src={camper.gallery[0]} alt={camper.name} />
      <div className={css.infoblock}>
        <CamperDetailsHeader camper={camper} modal={false} />
        <p className={css.description}>{camper.description}</p>
        <CamperFeatureList features={camper.details} />
        <Button name={NAMES.BUTTONS.showMore} onClickButton={onClickShowMore} />
      </div>
    </li>
  );
};

export default CamperInfoCard;
