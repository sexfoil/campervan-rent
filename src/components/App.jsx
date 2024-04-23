import { Navigate, Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
import css from './App.module.css';
import Header from './Header/Header';

import { PATHS } from 'properties/Constants';
import Home from 'pages/Home';
import Catalog from 'pages/Catalog';
import Favorites from 'pages/Favorites';

function App() {
  return (
    <>
      <div className={css.container}>
        <Routes>
          <Route path={PATHS.home} element={<Header />}>
            <Route index element={<Home />} />
            <Route path={PATHS.catalog} element={<Catalog />} />
            <Route path={PATHS.favorites} element={<Favorites />} />
          </Route>
          <Route path="*" element={<Navigate to={PATHS.home} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
