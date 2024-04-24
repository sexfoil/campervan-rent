import SvgIcon from 'components/SvgIcon/SvgIcon';
import ModalCamperItemHead from '../ModalCamperItemHead/ModalCamperItemHead';
import ModalCamperItemBody from '../ModalCamperItemBody/ModalCamperItemBody';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentCamper } from 'store/selector';
import css from './ModalCamperItem.module.css';
import { updateCurrentCamper } from 'store/slice';

export const ModalCamperItem = () => {
  const dispatch = useDispatch();

  const camper = useSelector(selectCurrentCamper);
  const onClickClose = () => {
    dispatch(updateCurrentCamper(null));
  };

  return (
    <div className={css.backdrop}>
      <div className={css.container}>
        <div className={css.svgBoxClose} onClick={onClickClose}>
          <SvgIcon icon={'close'} />
        </div>
        <div className={css.contentBox}>
          <ModalCamperItemHead camper={camper} />
          <ModalCamperItemBody camper={camper} />
        </div>
      </div>
    </div>
  );
};

export default ModalCamperItem;
