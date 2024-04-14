import { useEffect, useState } from 'react';
import { findAll } from 'api/AdvertsApi';
import css from './Catalog.module.css';
import { CamperInfoList } from 'components/Camper/CampersInfoList/CampersInfoList';

export const Catalog = () => {
  const [campers, setCampers] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    findAll()
      .then(setCampers)
      .catch(error => setErrorMessage(error.message))
      .finally(setLoading(false));
  }, []);

  return (
    <div className={css.container}>
      <h3>Trending movies:</h3>
      {/* {loading && <Loader />} */}
      {loading && <div>Loading...</div>}
      {/* {errorMessage && <ErrorMessage message={errorMessage} />} */}

      {errorMessage}
      {console.log(campers)}
      {campers.length !== 0 && <CamperInfoList campers={campers} />}
    </div>
  );
};

export default Catalog;
