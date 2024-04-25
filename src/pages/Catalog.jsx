import CamperSearchForm from 'components/Search/CamperSearchForm/CamperSearchForm';
import CamperInfoList from 'components/Camper/CamperInfoList/CamperInfoList';
import { useScrollVisibility } from 'hooks/useScrollVisibility';
import ModalCamperItem from 'components/Modal/ModalCamperItem/ModalCamperItem';
import { useSelector } from 'react-redux';
import { selectCurrentCamper } from 'store/selector';
import ScrollUpButton from 'components/Button/ScrollUpButton';
import css from './Catalog.module.css';

export const Catalog = () => {
  const scrollUp = useScrollVisibility(false);

  const onClickScrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const camper = useSelector(selectCurrentCamper);

  return (
    <>
      <div className={css.container}>
        <CamperSearchForm />
        <div className={css.campers}>
          <CamperInfoList />
        </div>
        {scrollUp.isVisible && (
          <ScrollUpButton onClickScrollUp={onClickScrollUp} />
        )}
      </div>
      {camper && <ModalCamperItem />}
    </>
  );
};

export default Catalog;
