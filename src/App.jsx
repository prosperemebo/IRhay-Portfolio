import { useContext, useEffect, useState } from 'react';
import Loader from './components/Loader';
import useReadyImages from './hooks/useReadyImages';
import Footer from './components/Footer';
import gsap from 'gsap';
import './sass/main.scss';

// Pages
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import { Route, Routes } from 'react-router-dom';
import AppContext from './store/app-context';

// Routes
const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/gallery', name: 'Gallery', Component: Gallery },
];

function App() {
  const appCtx = useContext(AppContext);

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // Prevent Flashing
    gsap.to('body', {
      duration: 0,
      css: { visibility: 'visible' },
    });
  }, []);

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/gallery' element={<Gallery />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
