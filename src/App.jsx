import { useContext, useEffect, useState } from 'react';
import Footer from './components/Footer';
import gsap from 'gsap';
import './sass/main.scss';

// Pages
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import { Route, Routes } from 'react-router-dom';
import AnimationLayout from './components/AnimationLayout';

function App() {
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
        <Route element={<AnimationLayout />}>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/gallery' element={<Gallery />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
