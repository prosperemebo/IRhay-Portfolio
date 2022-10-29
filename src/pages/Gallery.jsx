import React, { useContext, useEffect } from 'react';
import Header from '../components/GalleryHeader';
import Loader from '../components/Loader';
import useReadyImages from '../hooks/useReadyImages';
import AppContext from '../store/app-context';

const Gallery = () => {
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
      <Header />
    </>
  );
};

export default Gallery;
