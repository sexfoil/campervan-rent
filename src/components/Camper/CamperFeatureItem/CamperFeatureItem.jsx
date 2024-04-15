import css from './CamperFeatureItem.module.css';

const CamperFeatureItem = ({ logo, description }) => {
  return (
    <li className={css.container}>
      <span>{logo}</span> <span>{description}</span>
    </li>
  );
};

export default CamperFeatureItem;
