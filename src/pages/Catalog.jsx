import { useEffect } from 'react';
import CamperSearchForm from 'components/Search/CamperSearchForm/CamperSearchForm';
import InfoBlock from 'components/InfoBlock/InfoBlock';
import Loader from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { selectCampers, selectError, selectLoading } from 'store/selector';
import { fetchCampers } from 'store/thunk';
import css from './Catalog.module.css';

export const Catalog = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <CamperSearchForm />
      <div className={css.campers}>
        {loading && <Loader />}
        {/* {errorMessage && <ErrorMessage message={errorMessage} />} */}
        {error}
        {campers.length !== 0 && <InfoBlock campers={campers} />}
      </div>
    </div>
  );
};

export default Catalog;
