import { Navigate, Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
import css from './App.module.css';
import Header from './Header/Header';

function App() {
  return (
    <>
      <div className={css.container}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<div>HOME</div>} />
            <Route path="catalog" element={<div>CATALOG</div>} />
            <Route path="favorites" element={<div>FAVORITES</div>}>
              <Route path="one" element={<div>ONE</div>} />
              <Route path="two" element={<div>TWO</div>} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
