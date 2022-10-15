import React from 'react';
import classes from './Header.module.scss';

import { ReactComponent as EOMText } from '../../assets/images/circular-text.svg';
import { ReactComponent as UpArrow } from '../../assets/images/arrow.svg';
import EOMCover from '../../assets/images/music-cover.jpg';
import hero from '../../assets/images/hero.jpg';
import hero1 from '../../assets/images/hero-1.png';
import hero2 from '../../assets/images/hero-3.png';
import compositionImage from '../../assets/images/comp-1.jpg';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.background}>
        <img src={hero} alt='' />
        <img src={hero1} alt='' />
        <img src={hero2} alt='' />
      </div>
      <div className={classes.compositionImg}>
        <img src={compositionImage} alt='IRhay' />
      </div>
      <div className={classes.textbox}>
        <h1 className='heading-primary'>IRhay</h1>
        <p className='paragraph'>
          IRhay left her family home in Ibadan for Lagos after getting an offer
          to become a writer at a newly formed media company, Zikoko.
        </p>
      </div>
      <a
        target='_blank'
        href='https://onerpm.link/206913345094'
        className={classes.musicLink}
        rel='noreferrer'
      >
        <div className={classes.content}>
          <img src={EOMCover} alt='Easy on Me Cover' />
          <span className={classes.arrow}>
            <UpArrow />
          </span>
          <span className={classes.text}>
            <EOMText />
          </span>
        </div>
      </a>
    </header>
  );
};

export default Header;
