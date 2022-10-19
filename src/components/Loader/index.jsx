import gsap from 'gsap';
import React, { useCallback, useEffect, useRef } from 'react';
import classes from './Loader.module.scss';

const closingAnimation = (setLoadingComplete) => {
  const tl = gsap.timeline();

  tl.fromTo(
    `.${classes.loader}`,
    {
      clipPath: 'polygon(0 0,100% 0,100% 100%,0 100%)',
    },
    {
      clipPath: 'polygon(100% 0,100% 0,100% 100%,100% 100%)',
      duration: 1.2,
      ease: 'expo.inOut',
      onComplete: setLoadingComplete,
    }
  );
};

const Loader = ({ setLoadingComplete, progress = 0 }) => {
  const refCounter = useRef();
  const refContent = useRef();

  const loaderEnd = useCallback(() => {
    if (progress === 100) {
      closingAnimation(setLoadingComplete);
      setTimeout(() => {}, 1000);
    }
  }, [progress, setLoadingComplete]);

  useEffect(() => {
    let transform = (progress / 100) * -1300;
    let scale = (progress / 100) * 2.5;
    transform = Math.ceil(transform / 100) * 100;
    scale = Math.ceil(scale / 1) * 1;

    scale <= 0 ? (scale = 1) : scale >= 2.5 && (scale = 2.5);

    refCounter.current.style.setProperty(
      'transform',
      `translate(0px, ${transform}%)`
    );

    refContent.current.style.setProperty('transform', `scale(${scale})`);

    refCounter.current.addEventListener('transitionend', loaderEnd, false);
  }, [loaderEnd, progress, setLoadingComplete]);

  return (
    <div className={classes.loader}>
      <div className={classes.content} ref={refContent}>
        <h2>
          <span className={classes.countFirst}>0</span>
          <span className={classes.numbers} ref={refCounter}>
            <span className={classes.count}>00</span>
            <span className={classes.count}>05</span>
            <span className={classes.count}>17</span>
            <span className={classes.count}>23</span>
            <span className={classes.count}>28</span>
            <span className={classes.count}>37</span>
            <span className={classes.count}>39</span>
            <span className={classes.count}>41</span>
            <span className={classes.count}>53</span>
            <span className={classes.count}>68</span>
            <span className={classes.count}>72</span>
            <span className={classes.count}>83</span>
            <span className={classes.count}>92</span>
            <span className={classes.count}>99</span>
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Loader;
