import CamperDetailsHeader from 'components/Camper/CamperDetailsHeader/CamperDetailsHeader';
import CamperImage from '../CamperImage/CamperImage';
import css from './CamperInfoCard.module.css';
import CamperFeatureList from '../CamperFeatureList/CamperFeatureList';
import Button from 'components/Button/SubmitButton';
import { NAMES } from 'properties/Constants';

const CamperInfoCard = ({
  gallery,
  name,
  price,
  rating,
  reviews,
  description,
  details,
  location,
}) => {
  return (
    <li className={css.container}>
      <CamperImage url={gallery[0]} alt={name} />
      <div className={css.infoblock}>
        <CamperDetailsHeader
          name={name}
          price={price}
          rating={rating}
          reviews={reviews.length}
          location={location}
        />
        <p className={css.description}>{description}</p>
        <CamperFeatureList details={details} />
        <Button name={NAMES.BUTTONS.showMore} />
      </div>
    </li>
  );
};

export default CamperInfoCard;
