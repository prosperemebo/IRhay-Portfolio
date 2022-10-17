import React from 'react';
import classes from './Experience.module.scss';

import compositionImg from '../../assets/images/comp-3.jpg';
import banner1 from '../../assets/images/banner-1.jpg';
import banner2 from '../../assets/images/banner-2.jpg';
import banner3 from '../../assets/images/banner-3.jpg';
import banner4 from '../../assets/images/banner-4.jpg';

const index = () => {
  return (
    <section className={classes.container}>
      <div className={classes.marquee}>
        <div className={classes.marquee__inner}>
          <div className={classes.text}>
            <span>I am IRhay</span>
          </div>
          <div className={classes.banner}>
            <img src={banner1} alt='IRhay Banner' />
          </div>
          <div className={classes.text}>
            <span>I am IRhay</span>
          </div>
          <div className={classes.banner}>
            <img src={banner1} alt='IRhay Banner' />
          </div>
          <div className={classes.text}>
            <span>I am IRhay</span>
          </div>
          <div className={classes.banner}>
            <img src={banner1} alt='IRhay Banner' />
          </div>
          <div className={classes.text}>
            <span>I am IRhay</span>
          </div>
          <div className={classes.banner}>
            <img src={banner1} alt='IRhay Banner' />
          </div>
        </div>
      </div>
      <div className={classes.experience}>
        <figure>
          <img src={compositionImg} alt='IRhay' />
        </figure>
        <div className={`container ${classes.content}`}>
          <div className={classes.info}>
            <h3 className='heading-secondary'>
              My journey through life has been one with many battles & setbacks
              but through it all my music has been my life’s focus.
            </h3>
            <p className='paragraph'>
              iRhay left her family home in Ibadan for Lagos after getting an
              offer to become a writer at a newly formed media company, Zikoko.
              Work was going well, until she got bored and literally said “fuck
              shit, I want to make videos”. She is mostly self taught, it
              definitely didn’t hurt to have unlimited access to the internet.
              She had a little more creative freedom when she finally left for
              her own apartment after living with relatives for a year.
            </p>
          </div>
          <div className={classes.shots}>
            <figure>
              <img src={banner3} alt='Shots' />
            </figure>
            <figure>
              <img src={banner4} alt='Shots' />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
