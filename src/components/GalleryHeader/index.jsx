import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../store/app-context';
import classes from './header.module.scss';
import navClasses from '../Nav/nav.module.scss';

import { ReactComponent as HeadphonesIcon } from '../../assets/icons/headphones.svg';
import { ReactComponent as CrossIcon } from '../../assets/icons/cross.svg';

import hero from '../../assets/images/gallery-hero.jpg';
import pic0 from '../../assets/images/pic-0.jpg';
import pic1 from '../../assets/images/pic-1.jpg';
import pic2 from '../../assets/images/pic-2.jpg';
import pic3 from '../../assets/images/pic-13.jpg';
import pic4 from '../../assets/images/pic-12.jpg';
import pic5 from '../../assets/images/pic-5.jpg';
import pic6 from '../../assets/images/pic-6.jpg';
import pic7 from '../../assets/images/pic-7.jpg';
import pic8 from '../../assets/images/pic-8.jpg';
import pic9 from '../../assets/images/pic-9.jpg';
import pic11 from '../../assets/images/pic-11.jpg';
import pic12 from '../../assets/images/comp-2.jpg';
import { DelayLink } from '../DelayLink';

const pics = [
  pic0,
  pic1,
  pic4,
  pic9,
  pic5,
  pic12,
  pic6,
  pic3,
  pic2,
  pic7,
  pic8,
  pic11,
];

const Header = () => {
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
    <header className={classes.header}>
      <nav
        className={`${navClasses.nav} ${
          scrollPosition > 20 ? navClasses.background : ''
        }`}
      >
        <div className={navClasses.player}>
          <button onClick={appCtx.audioToggle}>
            <HeadphonesIcon />
            <span>Sound: {appCtx.audioPlaying ? 'On' : 'Off'}</span>
          </button>
        </div>
        <div className={navClasses.cta}>
          <DelayLink
            replace={true}
            to={'/'}
            delay={1500}
            onDelayStart={() => {
              appCtx.setPageStatus('LEAVE');
              appCtx.setIsPageReady(false);
            }}
          >
            <button>
              <CrossIcon />
              <span>Close</span>
            </button>
          </DelayLink>
        </div>
      </nav>
      <div className={classes.body}>
        <img src={hero} alt='Composition from Easy on Me' />
      </div>
      <div className={classes.gallery + ' container'}>
        {pics.map((pic, i) => (
          <figure key={i}>
            <img src={pic} alt={`IRhay ${i}`} />
          </figure>
        ))}
      </div>
    </header>
  );
};

export default Header;
