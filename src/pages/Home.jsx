import React, { useContext, useEffect } from 'react';
import About from '../components/About';
import Experience from '../components/Experience';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Hallway from '../components/Hallway';
import useReadyImages from '../hooks/useReadyImages';
import AppContext from '../store/app-context';
import Loader from '../components/Loader';
import VideoPreview from '../components/VideoPreview';

const Home = ({ timeline }) => {
  const [ready, progress] = useReadyImages();
  const appCtx = useContext(AppContext);

  useEffect(() => {
    appCtx.setIsPageReady(ready);

    if (ready) {
      appCtx.setPageStatus('ENTER');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  return (
    <>
      {appCtx.isLoadingComplete ? '' : <Loader progress={progress} />}
      <Nav />
      <Header />
      <VideoPreview />
      <About />
      <Experience />
      <Hallway />
    </>
  );
};

export default Home;
