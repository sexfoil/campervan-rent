import CamperInfoCard from '../CamperInfoCard/CamperInfoCard';

const CamperInfoList = ({ campers }) => {
  return campers && campers.length !== 0 ? (
    <div>
      <ul>
        {campers.map(camper => {
          return (
            <li key={camper._id}>
              <CamperInfoCard camper={camper} />
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    <p>There is no camper to show.</p>
  );
};

export default CamperInfoList;
