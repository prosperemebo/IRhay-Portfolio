import classes from './style.module.scss';

import { ReactComponent as PlayIC } from '../../assets/icons/play.svg';
import { ReactComponent as CloseIC } from '../../assets/icons/cross.svg';

import thumbnail from '../../assets/images/video-thumbnail.jpeg';
import { useState } from 'react';

const VideoPreview = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <section className={classes.main}>
      <div className={`${classes.popup} ${popupOpen && classes.open}`}>
        <button onClick={() => setPopupOpen(false)}>
          <CloseIC />
        </button>
        <div className={classes.backdrop}></div>
        <div className={classes.content}>
          <iframe
            width='1904'
            height='920'
            src='https://www.youtube.com/embed/Ch5yM42IwPM?&amp;color=white&amp;modestbranding=1&amp;playsinline=1&amp;rel=0&amp;autoplay=1'
            title='IRhay - Easy On Me Video.'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className={classes.player}
          ></iframe>
        </div>
      </div>
      <div className={classes.container}>
        <h3 className='heading-secondary'>Easy on Me - Official Video</h3>
        <div
          className={classes.video}
          style={{ backgroundImage: `url(${thumbnail})` }}
        >
          <figure>
            <img src={thumbnail} alt='Easy on Me Thumbnail' />
          </figure>
          <button onClick={() => setPopupOpen(true)}>
            <PlayIC />
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoPreview;
