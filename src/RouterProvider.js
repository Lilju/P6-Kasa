import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import FicheLogement from './pages/FicheLogement';
import APropos from './pages/APropos';
import NoPage from './pages/NoPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export const browserRouter = createBrowserRouter([
  { path: '/', element: <>
    <Header />
    <Home />
    <Footer />
  </> },
  { path: '/logement/:id', element: <><Header /><FicheLogement /><Footer /></> },
  { path: '/a-propos', element: <><Header /><APropos /><Footer /></> },
  { path: '*', element: <><Header /><NoPage /><Footer /></> }
]);

