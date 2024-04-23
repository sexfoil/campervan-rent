import CamperDetailsHeader from 'components/Camper/CamperDetailsHeader/CamperDetailsHeader';
import css from './ModalCamperItemHead.module.css';

export const ModalCamperItemHead = ({ camper }) => {
  return (
    <>
      {camper && (
        <div className={css.container}>
          <div className={css.header}>
            <CamperDetailsHeader camper={camper} modal={true} />
          </div>
          <ul className={css.gallery}>
            {camper.gallery.map(src => {
              return (
                <li key={src} className={css.imageBox}>
                  <img className={css.image} src={src} alt={camper.name} />
                </li>
              );
            })}
          </ul>
          <p className={css.description}>{camper.description}</p>
        </div>
      )}
    </>
  );
};

export default ModalCamperItemHead;
