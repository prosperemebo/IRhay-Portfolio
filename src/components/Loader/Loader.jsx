import gsap from 'gsap';
import React, { useEffect } from 'react';
import classes from './Loader.module.scss';

const Loader = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(`.${classes.loader} .${classes.numbers}`, {
      y: '-1300%',
      duration: 8,
      ease: 'expo.inOut',
    })
      .to(
        `.${classes.content}`,
        {
          scale: 2.5,
          duration: 8,
          ease: 'expo.inOut',
        },
        '-=8'
      )
      .fromTo(
        `.${classes.loader}`,
        {
          clipPath: 'polygon(0 0,100% 0,100% 100%,0 100%)',
        },
        {
          clipPath: 'polygon(100% 0,100% 0,100% 100%,100% 100%)',
          duration: 3,
          ease: 'power4.out',
        },
        '-=3'
      );
  }, []);

  return (
    <div className={classes.loader}>
      <div className={classes.content}>
        <h2>
          <span className={classes.countFirst}>0</span>
          <span className={classes.numbers}>
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
