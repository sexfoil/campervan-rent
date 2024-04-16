import SvgIcon from 'components/SvgIcon/SvgIcon';
import css from './CamperFeatureItem.module.css';

const CamperFeatureItem = ({ icon, value, description }) => {
  return (
    <li className={css.container}>
      <SvgIcon icon={icon} />
      <span>
        {value}&nbsp;{description}
      </span>
    </li>
  );
};

export default CamperFeatureItem;
