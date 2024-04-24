import css from './ModalCamperDetails.module.css';

export const ModalCamperDetails = ({ camper, details }) => {
  return (
    <div className={css.container}>
      <h3 className={css.header}>Vehicle details</h3>
      <ul className={css.list}>
        {Object.keys(details).map(detailsKey => {
          return (
            <li key={detailsKey} className={css.item}>
              <span>{details[detailsKey]}</span>
              <span>{camper[detailsKey]}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ModalCamperDetails;
