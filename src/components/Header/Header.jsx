import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { PAGES, PATHS } from 'properties/Constants';
import css from './Header.module.css';

const Header = () => {
  const setActive = ({ isActive }) => (isActive ? css.active : '');

  return (
    <div className={css.container}>
      <nav className={css.navpanel}>
        <NavLink className={setActive} to={PATHS.home}>
          {PAGES.home}
        </NavLink>
        <NavLink className={setActive} to={PATHS.catalog}>
          {PAGES.catalog}
        </NavLink>
        <NavLink className={setActive} to={PATHS.favorites}>
          {PAGES.favorites}
        </NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Header;
