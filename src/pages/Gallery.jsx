import React, { useContext } from 'react';
import Header from '../components/GalleryHeader';
import Loader from '../components/Loader';
import useReadyImages from '../hooks/useReadyImages';
import AppContext from '../store/app-context';

const Gallery = () => {
  const [ready, progress] = useReadyImages();
  const appCtx = useContext(AppContext);

  return (
    <>
      {appCtx.isLoadingComplete ? '' : <Loader progress={progress} />}
      <Header />
    </>
  );
};

export default Gallery;
