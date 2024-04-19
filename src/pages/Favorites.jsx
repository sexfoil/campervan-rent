import { useEffect, useState } from 'react';
import css from './Favorites.module.css';
import InfoBlock from 'components/InfoBlock/InfoBlock';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'store/selector';

const Favorites = () => {
  // const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const [scrollUpVisible, setScrollUpVisible] = useState(false);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    const toggleVisibility = () => {
      const position = window.scrollY;
      if (position > 100) {
        setScrollUpVisible(true);
      } else {
        setScrollUpVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [scrollUpVisible]);

  return (
    <div className={css.container}>
      {favorites.length !== 0 ? (
        <InfoBlock campers={favorites} />
      ) : (
        'NO FAVORITES'
      )}
      {scrollUpVisible && (
        <button className={css.scroll} type="button" onClick={scrollUp}>
          <SvgIcon icon={'scrollup'} />
        </button>
      )}
    </div>
  );
};

export default Favorites;
