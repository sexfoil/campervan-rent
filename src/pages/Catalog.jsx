import { useEffect, useState } from 'react';
import { findAll } from 'api/AdvertsApi';
import CamperSearchForm from 'components/Search/CamperSearchForm/CamperSearchForm';
import InfoBlock from 'components/InfoBlock/InfoBlock';
import css from './Catalog.module.css';
import Loader from 'components/Loader/Loader';

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
      <CamperSearchForm />
      <div className={css.campers}>
        <Loader />
        ---------------------------
        {loading && <Loader />}
        {loading && <span>LOADER</span>}
        {/* {errorMessage && <ErrorMessage message={errorMessage} />} */}
        {errorMessage}
        {campers.length !== 0 && <InfoBlock campers={campers} />}
      </div>
    </div>
  );
};

export default Catalog;
