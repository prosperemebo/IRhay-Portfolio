import React, { useContext, useEffect, useState } from 'react';
import classes from './nav.module.scss';

import { ReactComponent as HeadphonesIcon } from '../../assets/icons/headphones.svg';
// import { ReactComponent as MediaIcon } from '../../assets/icons/vector.svg';
import { ReactComponent as ImageIcon } from '../../assets/icons/image.svg';

import AppContext from '../../store/app-context';
import { DelayLink } from '../DelayLink';

const Nav = () => {
  const appCtx = useContext(AppContext);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${classes.nav} ${
        scrollPosition > 20 ? classes.background : ''
      }`}
    >
      <div className={classes.player}>
        <button onClick={appCtx.audioToggle}>
          <HeadphonesIcon />
          <span> Sound: {appCtx.audioPlaying ? 'On' : 'Off'}</span>
        </button>
      </div>
      <div className={classes.cta}>
        {/* <button>
          <MediaIcon />
          <span>Music</span>
        </button> */}

        <DelayLink
          replace={true}
          to={'/gallery'}
          delay={1500}
          onDelayStart={() => {
            appCtx.setPageStatus('LEAVE');
            appCtx.setIsPageReady(false);
          }}
        >
          <button>
            <ImageIcon />
            <span>Gallery</span>
          </button>
        </DelayLink>
      </div>
    </nav>
  );
};

export default Nav;
