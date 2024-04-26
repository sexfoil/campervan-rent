import SvgIcon from 'components/SvgIcon/SvgIcon';
import css from './CamperLocation.module.css';

const CamperLocation = ({ location }) => {
  return (
    <div className={css.container}>
      <div className={css.svgBox}>
        <SvgIcon icon={'location'} />
      </div>
      <p>{location}</p>
    </div>
  );
};

export default CamperLocation;
