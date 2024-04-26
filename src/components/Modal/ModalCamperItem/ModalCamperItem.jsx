import SvgIcon from 'components/SvgIcon/SvgIcon';
import ModalCamperItemHead from '../ModalCamperItemHead/ModalCamperItemHead';
import ModalCamperItemBody from '../ModalCamperItemBody/ModalCamperItemBody';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentCamper } from 'store/selector';
import { updateActiveTab, updateCurrentCamper } from 'store/slice';
import { NAMES } from 'properties/Constants';
import { useCallback, useRef, useEffect } from 'react';
import css from './ModalCamperItem.module.css';

export const ModalCamperItem = () => {
  const dispatch = useDispatch();

  const camper = useSelector(selectCurrentCamper);
  const backdropRef = useRef(null);

  const onClickClose = useCallback(() => {
    dispatch(updateActiveTab(NAMES.TABS.features));
    dispatch(updateCurrentCamper(null));
  }, [dispatch]);

  useEffect(() => {
    const backdrop = backdropRef.current;
    const onClick = evt => {
      const target = evt.target;
      if (target === backdrop) {
        onClickClose();
      }
    };
    const onEscapePress = evt => {
      if (evt.code === 'Escape') {
        onClickClose();
      }
    };
    backdrop.addEventListener('click', onClick);
    document.addEventListener('keydown', onEscapePress);
    return () => {
      backdrop.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onEscapePress);
    };
  }, [onClickClose]);

  return (
    <div className={css.backdrop} ref={backdropRef}>
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
