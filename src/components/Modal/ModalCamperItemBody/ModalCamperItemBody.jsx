import css from './ModalCamperItemBody.module.css';

export const ModalCamperItemBody = () => {
  return (
    <div className={css.backdrop}>
      <div className={css.container}>
        <div className={css.svgBoxClose}>
          {/* <SvgIcon icon={'close'} /> */}BODY
        </div>
      </div>
    </div>
  );
};

export default ModalCamperItemBody;
