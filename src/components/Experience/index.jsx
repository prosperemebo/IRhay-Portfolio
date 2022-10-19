import React from 'react';
import classes from './Experience.module.scss';

import compositionImg from '../../assets/images/comp-3.jpg';
import banner1 from '../../assets/images/banner-1.jpg';
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
              His writing process begins with lots of freestyles, an approach he
              has relied on.
            </h3>
            <p className='paragraph'>
              IRhay stands confident that his gift is inspired and as such his
              music will stand the test of time throughout the world. His easy
              style of flow coupled with killer tracks from both established
              producers and new talented ones will be highly acceptable;
              infusing his great light through Afrobeats to create
              “Gbedulicious” jams that will traverse beyond Nigeria and Africa
              touching more lives to beget even greater light.
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
      <div className={classes.gallery}></div>
    </section>
  );
};

export default index;
