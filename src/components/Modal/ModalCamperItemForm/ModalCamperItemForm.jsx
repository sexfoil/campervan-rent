import css from './ModalCamperItemForm.module.css';

export const ModalCamperItemForm = () => {
  return (
    <div className={css.backdrop}>
      <div className={css.container}>
        <div className={css.svgBoxClose}>
          {/* <SvgIcon icon={'close'} /> */}FORM
        </div>
      </div>
    </div>
  );
};

export default ModalCamperItemForm;
