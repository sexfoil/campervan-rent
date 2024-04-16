import { NAMES } from 'properties/Constants';
import CamperFeatureItem from '../CamperFeatureItem/CamperFeatureItem';
import css from './CamperFeatureList.module.css';

const CamperFeatureList = ({ details }) => {
  return (
    <ul className={css.container}>
      {Object.keys(details)
        .filter(name => details[name])
        .map(name => {
          const detail = details[name];
          const detailValue =
            detail && typeof detail === 'number' && detail > 1 ? detail : '';
          return (
            <CamperFeatureItem
              key={name}
              icon={name}
              value={detailValue}
              description={NAMES.FEATURES[name]}
            />
          );
        })}
    </ul>
  );
};

export default CamperFeatureList;
