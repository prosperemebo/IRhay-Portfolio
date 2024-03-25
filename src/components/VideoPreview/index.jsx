import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { ReactComponent as PlayIC } from '../../assets/icons/play.svg';
import { ReactComponent as CloseIC } from '../../assets/icons/cross.svg';

import classes from './style.module.scss';

const VideoPreview = ({ title, url, thumbnail }) => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <section className={classes.main}>
      <AnimatePresence mode='wait'>
        {popupOpen && (
          <motion.div className={classes.popup}>
            <motion.button
              onClick={() => setPopupOpen(false)}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <CloseIC />
            </motion.button>
            <motion.div
              className={classes.backdrop}
              onClick={() => setPopupOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            ></motion.div>
            <motion.div
              className={classes.content}
              initial={{ x: '-50%', y: '-50%', scale: 0 }}
              animate={{ x: '-50%', y: '-50%', scale: 1 }}
              exit={{ x: '-50%', y: '-50%', scale: 0 }}
            >
              <iframe
                width='1904'
                height='920'
                src={url}
                title={title}
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                className={classes.player}
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className={classes.container}>
        <h3 className='heading-secondary'>{title}</h3>
        <div
          className={classes.video}
          style={{ backgroundImage: `url(${thumbnail})` }}
        >
          <figure>
            <img src={thumbnail} alt={`${title} Thumbnail`} />
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
