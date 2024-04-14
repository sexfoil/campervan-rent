const CamperInfoCard = ({ camper }) => {
  return (
    <li>
      Name: {camper.name} <br />
      Price: {camper.price}
      <div>
        <img src={camper.gallery[0]} alt={camper.name} width={300} />
      </div>
    </li>
  );
};

export default CamperInfoCard;
