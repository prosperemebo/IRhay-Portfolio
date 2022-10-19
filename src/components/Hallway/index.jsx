import React from 'react';
import classes from './Hallway.module.scss';

import portrait from '../../assets/images/pic-0.jpg';

import img1 from '../../assets/images/pic-12.jpg';
import img2 from '../../assets/images/pic-3.jpg';
import img3 from '../../assets/images/pic-7.jpg';
import img4 from '../../assets/images/pic-4.jpg';
import img5 from '../../assets/images/pic-9.jpg';
import img6 from '../../assets/images/pic-1.jpg';
import img7 from '../../assets/images/pic-5.jpg';
import img8 from '../../assets/images/pic-13.jpg';

import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icons/twitter.svg';
import { ReactComponent as TiktokIcon } from '../../assets/icons/tiktok.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram.svg';

const index = () => {
  return (
    <section className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.info}>
          <div className={classes.main}>
            <figure>
              <img src={portrait} alt='Portrait of IRhay' />
            </figure>
            <p className='paragraph'>
              Infusing his great light through Afrobeats to create
              “Gbedulicious” jams.
            </p>
          </div>

          <ul className={classes.socials}>
            <li>
              <a href='#'>
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href='#'>
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a href='#'>
                <TiktokIcon />
              </a>
            </li>
            <li>
              <a href='#'>
                <InstagramIcon />
              </a>
            </li>
          </ul>
        </div>
        <div className={classes.hallway}>
          <figure className={classes.sm}>
            <img src={img1} alt='IRhay' />
          </figure>
          <figure className={classes.lg}>
            <img src={img2} alt='IRhay' />
          </figure>
          <figure className={classes.md}>
            <img src={img3} alt='IRhay' />
          </figure>
          <figure className={classes.lg}>
            <img src={img4} alt='IRhay' />
          </figure>
          <figure className={classes.sm}>
            <img src={img5} alt='IRhay' />
          </figure>
          <figure className={classes.md}>
            <img src={img6} alt='IRhay' />
          </figure>
          <figure className={classes.sm}>
            <img src={img7} alt='IRhay' />
          </figure>
          <figure className={classes.lg}>
            <img src={img8} alt='IRhay' />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default index;
