import SubmitButton from 'components/Button/SubmitButton';
import css from './ModalCamperItemForm.module.css';
import { NAMES } from 'properties/Constants';

export const ModalCamperItemForm = () => {
  return (
    <form className={css.container}>
      <div className={css.header}>
        <h2>Book your campervan now</h2>
        <p>Stay connected! We are always ready to help you.</p>
      </div>
      <div className={css.fields}>
        <input className={css.input} type="text" placeholder="Name" />
        <input className={css.input} type="email" placeholder="Email" />
        <input className={css.input} type="date" placeholder="Booking date" />
        <input className={css.input} type="text" placeholder="Comment" />
      </div>
      <SubmitButton name={NAMES.BUTTONS.send} />
    </form>
  );
};

export default ModalCamperItemForm;
