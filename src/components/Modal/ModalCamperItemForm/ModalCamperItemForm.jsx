import SubmitButton from 'components/Button/SubmitButton';
import css from './ModalCamperItemForm.module.css';
import { NAMES } from 'properties/Constants';

export const ModalCamperItemForm = () => {
  const onDateFocus = evt => {
    evt.target.type = 'date';
  };

  const onDateBlur = evt => {
    evt.target.type = 'text';
  };

  const onSubmitBookingForm = evt => {
    // evt.preventDefault();
    // todo
    console.log(evt.target);
  };

  return (
    <form className={css.container} onSubmit={onSubmitBookingForm}>
      <div className={css.header}>
        <h2>Book your campervan now</h2>
        <p>Stay connected! We are always ready to help you.</p>
      </div>
      <div className={css.fields}>
        <input
          className={css.input}
          name="name"
          type="text"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-ЯіІїЇєЄґҐ]+(([' \-][a-zA-Zа-яА-ЯіІїЇєЄґҐ ])?[a-zA-Zа-яА-ЯіІїЇєЄґҐ]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          // required
        />
        <input
          className={css.input}
          name="email"
          type="email"
          placeholder="Email"
          // required
        />
        <input
          className={css.date}
          name="date"
          type="text"
          placeholder="Booking date"
          onFocus={evt => onDateFocus(evt)}
          onBlur={evt => onDateBlur(evt)}
          min={new Date().toISOString().split('T')[0]}
          // required
        />
        <textarea
          className={css.textarea}
          name="comment"
          type="text"
          rows={3}
          placeholder="Comment"
        />
      </div>
      <SubmitButton name={NAMES.BUTTONS.send} />
    </form>
  );
};

export default ModalCamperItemForm;
