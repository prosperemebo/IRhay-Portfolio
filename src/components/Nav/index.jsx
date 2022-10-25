import React from 'react';
import classes from './nav.module.scss';

import { ReactComponent as HeadphonesIcon } from '../../assets/icons/headphones.svg';
import { ReactComponent as MediaIcon } from '../../assets/icons/vector.svg';
import { ReactComponent as ImageIcon } from '../../assets/icons/image.svg';

import music from '../../assets/music/eom.mp3';
import { useAudio } from '../../hooks/useAudio';

const Nav = () => {
  const [playing, toggle] = useAudio(music);

  return (
    <nav className={classes.nav}>
      <div className={classes.player}>
        <button onClick={toggle}>
          <HeadphonesIcon /> <span> Sound: {playing ? 'On' : 'Off'}</span>
        </button>
      </div>
      <div className={classes.cta}>
        <button>
          <MediaIcon />
          <span>Music</span>
        </button>
        <button>
          <ImageIcon />
          <span>Gallery</span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
