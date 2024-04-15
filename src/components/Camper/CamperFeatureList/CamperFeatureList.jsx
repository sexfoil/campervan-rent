import CamperFeatureItem from '../CamperFeatureItem/CamperFeatureItem';
import css from './CamperFeatureList.module.css';

const CamperFeatureList = ({ details }) => {
  return (
    <ul className={css.container}>
      {Object.keys(details)
        .filter(name => details[name])
        .map(name => {
          return (
            <CamperFeatureItem
              key={name}
              logo={'[' + name + ']'}
              description={details[name] + ' ' + name}
            />
          );
        })}
    </ul>
  );
};

export default CamperFeatureList;
