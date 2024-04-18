import { useEffect, useState } from 'react';
import css from './Favorites.module.css';
import { findAll } from 'api/AdvertsApi';
import InfoBlock from 'components/InfoBlock/InfoBlock';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import Loader from 'components/Loader/Loader';

const Favorites = () => {
  const [campers, setCampers] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [scrollUpVisible, setScrollUpVisible] = useState(false);
  //   const prevPosition = useRef(0);
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    setLoading(true);
    findAll()
      .then(setCampers)
      .catch(error => setErrorMessage(error.message))
      .finally(setLoading(false));
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      const position = window.scrollY;

      // Button is displayed after scrolling for 500 pixels
      if (position > 100) {
        setScrollUpVisible(true);
      } else {
        setScrollUpVisible(false);
      }

      //   prevPosition.current = position;
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [scrollUpVisible]);

  return (
    <div className={css.container}>
      {loading && <Loader />}
      {/* {errorMessage && <ErrorMessage message={errorMessage} />} */}
      {errorMessage}
      {campers.length !== 0 && <InfoBlock campers={campers} />}
      {scrollUpVisible && (
        <button className={css.scroll} type="button" onClick={scrollUp}>
          <SvgIcon icon={'scrollup'} />
        </button>
      )}
    </div>
  );
};

export default Favorites;
