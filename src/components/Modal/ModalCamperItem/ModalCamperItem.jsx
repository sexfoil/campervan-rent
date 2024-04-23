import SvgIcon from 'components/SvgIcon/SvgIcon';
import css from './ModalCamperItem.module.css';
import ModalCamperItemHead from '../ModalCamperItemHead/ModalCamperItemHead';
import ModalCamperItemBody from '../ModalCamperItemBody/ModalCamperItemBody';
// import { useSelector } from 'react-redux';
// import { selectCurrentCamper } from 'store/selector';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectCampers } from 'store/selector';
// import { useEffect } from 'react';
// import { fetchCampers } from 'store/thunk';
// import { NAMES } from 'properties/Constants';

export const ModalCamperItem = ({ campers }) => {
  // const camper = useSelector(selectCurrentCamper);

  // const dispatch = useDispatch();
  // const campers = useSelector(selectCampers);
  // useEffect(() => {
  //   dispatch(
  //     fetchCampers({
  //       page: 1,
  //       limit: NAMES.PAGINATION.limit,
  //     })
  //   );
  // }, [dispatch]);

  return (
    <div className={css.backdrop}>
      <div className={css.container}>
        <div className={css.svgBoxClose}>
          <SvgIcon icon={'close'} />
        </div>
        <div className={css.contentBox}>
          <ModalCamperItemHead camper={campers[0]} />
          <ModalCamperItemBody camper={campers[0]} />
        </div>
      </div>
    </div>
  );
};

export default ModalCamperItem;
