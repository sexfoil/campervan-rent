import SvgIcon from 'components/SvgIcon/SvgIcon';
import css from './CamperFeatureItem.module.css';

const CamperFeatureItem = ({ icon, value, description }) => {
  return (
    <li className={css.container}>
      <div className={css.svgBox}>
        <SvgIcon icon={icon} />
      </div>
      <span>
        {value}&nbsp;{description}
      </span>
    </li>
  );
};

export default CamperFeatureItem;
