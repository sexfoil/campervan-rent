import SvgIcon from 'components/SvgIcon/SvgIcon';
import css from './ModalCamperItem.module.css';

export const ModalCamperItem = () => {
  return (
    <div className={css.backdrop}>
      <div className={css.container}>
        <div className={css.svgBoxClose}>
          <SvgIcon icon={'close'} />
        </div>
      </div>
    </div>
  );
};

export default ModalCamperItem;
