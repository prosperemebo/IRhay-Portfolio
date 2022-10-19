import { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Loader from './components/Loader';
import Experience from './components/Experience';
import './sass/main.scss';
import gsap from 'gsap';
import useReadyImages from './hooks/useReadyImages';

function App() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [timeline, setTimeline] = useState(null);
  const [ready, progress] = useReadyImages();

  const setLoadingCompleteHandler = () => {
    setIsLoadingComplete(true);
  };

  useEffect(() => {
    document.addEventListener('DOMContentLoaded', (e) => {
      console.log('DOM completely loaded!', e);
    });

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // Prevent Flashing
    gsap.to('body', {
      duration: 0,
      css: { visibility: 'visible' },
    });

    // Presets
    const tl = gsap.timeline();
    setTimeline(tl);

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

    return () => {
      document.removeEventListener('DOMContentLoaded', () => {});
    };
  }, []);

  // useLocoScroll(scrollRef);

  return (
    <>
      {isLoadingComplete ? (
        ''
      ) : (
        <Loader
          setLoadingComplete={setLoadingCompleteHandler}
          progress={progress}
        />
      )}
      <Header shouldAnimate={isLoadingComplete} timeline={timeline} />
      <About />
      <Experience />
    </>
  );
}

export default App;
