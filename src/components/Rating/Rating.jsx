import css from './Rating.module.css';
import SvgIcon from 'components/SvgIcon/SvgIcon';

const Raiting = ({ rating, reviews }) => {
  return (
    <div className={css.container}>
      <div className={css.svgBox}>
        <SvgIcon icon={'star'} />
      </div>
      <p className={css.text}>{`${rating}(${reviews} Reviews)`}</p>
    </div>
  );
};

export default Raiting;
