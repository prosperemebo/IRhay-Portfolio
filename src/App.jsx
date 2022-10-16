import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import './sass/main.scss';
import gsap from 'gsap';

function App() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  const setLoadingCompleteHandler = () => {
    console.log('Hello');
    setIsLoadingComplete(true);
  };

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // Prevent Flashing
    gsap.to('body', {
      duration: 0,
      css: { visibility: 'visible', backgroundColor: '#fff' },
    });

    // Presets
    const tl = gsap.timeline();
    tl.set(`#compositionImg img`, {
      scale: 1.3,
      opacity: 0,
    })
      .set('#textbox', {
        y: 150,
        opacity: 0,
      })
      .set('#musiclink', {
        scale: 0,
      });
  }, []);

  return (
    <>
      {isLoadingComplete ? (
        ''
      ) : (
        <Loader setLoadingComplete={setLoadingCompleteHandler} />
      )}
      <Header shouldAnimate={isLoadingComplete} />
    </>
  );
}

export default App;
