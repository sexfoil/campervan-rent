import CamperFeatureList from 'components/Camper/CamperFeatureList/CamperFeatureList';
import ModalCamperItemForm from '../ModalCamperItemForm/ModalCamperItemForm';
import ModalCamperDetails from '../ModalCamperDetails/ModalCamperDetails';
import ModalTabsHeader from '../ModalTabsHeader/ModalTabsHeader';
import ModalReviewList from '../ModalReviewList/ModalReviewList';
import { useDispatch, useSelector } from 'react-redux';
import { selectActiveTab } from 'store/selector';
import { updateActiveTab } from 'store/slice';
import { NAMES } from 'properties/Constants';
import css from './ModalCamperItemBody.module.css';

export const ModalCamperItemBody = ({ camper }) => {
  const dispatch = useDispatch();
  const activeTab = useSelector(selectActiveTab);

  const changeActiveTab = tab => {
    dispatch(updateActiveTab(tab));
  };

  return (
    <>
      {camper && (
        <div className={css.container}>
          <ModalTabsHeader
            activeTab={activeTab}
            changeActiveTab={changeActiveTab}
          />
          <div className={css.tabBody}>
            <div className={css.tab}>
              {activeTab === NAMES.TABS.features && (
                <>
                  <CamperFeatureList features={camper.details} />
                  <ModalCamperDetails
                    camper={camper}
                    details={NAMES.VEHICLE_DETAILS}
                  />
                </>
              )}
              {activeTab === NAMES.TABS.reviews && (
                <ModalReviewList reviews={camper.reviews} />
              )}
            </div>
            <ModalCamperItemForm camper={camper} />
          </div>
        </div>
      )}
    </>
  );
};

export default ModalCamperItemBody;
