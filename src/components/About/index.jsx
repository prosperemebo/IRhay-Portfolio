import React from 'react';
import classes from './About.module.scss';

import compositionImg from '../../assets/images/comp-2.jpg';

const About = () => {
  return (
    <section className={classes.about}>
      <div className={`container ${classes.content}`}>
        <div className={classes.img}>
          <img src={compositionImg} alt='Shot from Easy on Me' />
        </div>
        <div className={classes.info}>
          <h2 className='heading-secondary'>
            A lifestyle music artist with strong integration with the community.
          </h2>
          <p className='paragraph'>
            IRhay left her family home in Ibadan for Lagos after getting an
            offer to become a writer at a newly formed media company, Zikoko.
            Work was going well, until she got bored and literally said “fuck
            shit, I want to make videos”. She is mostly self taught, it
            definitely didn’t hurt to have unlimited access to the internet. She
            had a little more creative freedom when she finally left for her own
            apartment after living with relatives for a year.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
