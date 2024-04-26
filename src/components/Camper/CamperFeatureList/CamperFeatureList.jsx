import CamperFeatureItem from '../CamperFeatureItem/CamperFeatureItem';
import { NAMES } from 'properties/Constants';
import css from './CamperFeatureList.module.css';

const CamperFeatureList = ({ features }) => {
  return (
    <ul className={css.container}>
      {Object.keys(features)
        .filter(name => features[name])
        .map(name => {
          const detail = features[name];
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
