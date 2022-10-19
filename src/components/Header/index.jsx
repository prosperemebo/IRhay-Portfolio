import React, { useEffect } from 'react';
import classes from './Header.module.scss';

import { ReactComponent as EOMText } from '../../assets/icons/circular-text.svg';
import { ReactComponent as UpArrow } from '../../assets/icons/arrow.svg';
import EOMCover from '../../assets/images/music-cover.jpg';
import hero from '../../assets/images/hero.jpg';
import hero1 from '../../assets/images/hero-1.png';
import hero2 from '../../assets/images/hero-3.png';
import compositionImage from '../../assets/images/comp-1.jpg';
import gsap from 'gsap/gsap-core';
import ScrollTrigger from 'gsap/ScrollTrigger';

const headerAnimation = (tl) => {
  tl.to(`.${classes.compositionImg} img`, {
    scale: 1,
    opacity: 1,
    duration: 1.6,
    ease: 'power4.easeout',
  })
    .to(
      `#textbox`,
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power4.out',
      },
      '-=1.3'
    )
    .to(
      `.${classes.musicLink}`,
      {
        scale: 1,
        duration: 1,
        ease: 'power4.out',
      },
      '-=1.5'
    );
};

const backgroundParallaxAnimation = () => {
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  tl.to('#rock-1', { y: -300, duration: 3 }).to(
    '#rock-2',
    { y: -200, duration: 3 },
    '-=3'
  );

  const trigger = ScrollTrigger.create({
    animation: tl,
    trigger: `header`,
    start: 'top top',
    end: 'bottom center',
    invalidateOnRefresh: true,
    scrub: 1,
  });
};

const Header = ({ shouldAnimate, timeline }) => {
  useEffect(() => {
    shouldAnimate && headerAnimation(timeline);
    shouldAnimate && backgroundParallaxAnimation();
  }, [shouldAnimate, timeline]);

  return (
    <header className={classes.header}>
      <div className={classes.background}>
        <img id='rock' src={hero} alt='' />
        <img id='rock-2' src={hero2} alt='' />
        <img id='rock-1' src={hero1} alt='' />
      </div>
      <div className={classes.compositionImg} id='compositionImg'>
        <div className={classes.img}>
          <img src={compositionImage} alt='IRhay' />
        </div>
      </div>
      <div className={classes.textbox}>
        <div id='textbox'>
          <h1 className='heading-primary'>IRhay</h1>
          <p className='paragraph'>
            With IRhay, every mood has a fitting song. His creative juice allows
            him to draw from these human emotions to give life to befitting
            music to accompany one’s mood.
          </p>
        </div>
      </div>
      <a
        target='_blank'
        href='https://onerpm.link/206913345094'
        className={classes.musicLink}
        rel='noreferrer'
        id='musiclink'
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
