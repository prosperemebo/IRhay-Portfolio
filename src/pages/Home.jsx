import React, { useCallback, useContext, useEffect } from 'react';
import About from '../components/About';
import Experience from '../components/Experience';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Hallway from '../components/Hallway';
import useReadyImages from '../hooks/useReadyImages';
import AppContext from '../store/app-context';
import Loader from '../components/Loader';

const Home = ({ timeline }) => {
  const [ready, progress] = useReadyImages();
  const appCtx = useContext(AppContext);

  useEffect(() => {
    appCtx.setIsPageReady(ready);

    if (ready) {
      appCtx.setPageStatus('ENTER');
    }
  }, [ready]);

  return (
    <>
      {appCtx.isLoadingComplete ? '' : <Loader progress={progress} />}
      <Nav />
      <Header />
      <About />
      <Experience />
      <Hallway />
    </>
  );
};

export default Home;
