import CamperFeatureList from 'components/Camper/CamperFeatureList/CamperFeatureList';
import css from './ModalCamperItemBody.module.css';
import ModalCamperItemForm from '../ModalCamperItemForm/ModalCamperItemForm';
import ModalCamperDetails from '../ModalCamperDetails/ModalCamperDetails';
import { NAMES } from 'properties/Constants';

export const ModalCamperItemBody = ({ camper }) => {
  return (
    <>
      {camper && (
        <div className={css.container}>
          <div className={css.partsHeader}>Features | Reviews</div>
          <div className={css.partsBody}>
            <div className={css.part}>
              <CamperFeatureList features={camper.details} />
              <ModalCamperDetails
                camper={camper}
                details={NAMES.VEHICLE_DETAILS}
              />
            </div>
            <ModalCamperItemForm />
          </div>
        </div>
      )}
    </>
  );
};

export default ModalCamperItemBody;
