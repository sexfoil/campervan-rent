import css from './ModalCamperItemHead.module.css';

export const ModalCamperItemHead = () => {
  return (
    <div className={css.backdrop}>
      <div className={css.container}>
        <div className={css.svgBoxClose}>
          {/* <SvgIcon icon={'close'} /> */}HEAD
        </div>
      </div>
    </div>
  );
};

export default ModalCamperItemHead;
