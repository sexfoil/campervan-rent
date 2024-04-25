import SvgIcon from 'components/SvgIcon/SvgIcon';
import css from './RatingBar.module.css';

const RatingBar = ({ rating }) => {
  return (
    <ul className={css.container}>
      {[...Array(rating).keys()].map(i => {
        return (
          <li key={i} className={css.svgBox}>
            <SvgIcon icon={'star'} />
          </li>
        );
      })}
    </ul>
  );
};

export default RatingBar;
