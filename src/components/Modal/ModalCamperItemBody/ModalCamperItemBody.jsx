import CamperFeatureList from 'components/Camper/CamperFeatureList/CamperFeatureList';
import css from './ModalCamperItemBody.module.css';
import ModalCamperItemForm from '../ModalCamperItemForm/ModalCamperItemForm';

export const ModalCamperItemBody = ({ camper }) => {
  return (
    <>
      {camper && (
        <div className={css.container}>
          <div className={css.partsHeader}>Features | Reviews</div>
          <div className={css.partsBody}>
            <div className={css.part}>
              <CamperFeatureList details={camper.details} />
              <div>Details</div>
            </div>
            <ModalCamperItemForm />
          </div>
        </div>
      )}
    </>
  );
};

export default ModalCamperItemBody;
