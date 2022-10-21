import React from 'react';
import classes from './About.module.scss';

import compositionImg from '../../assets/images/comp-4.jpg';

const About = () => {
  return (
    <section className={classes.about}>
      <div className={`container ${classes.content}`}>
        <div className={classes.img}>
          <img src={compositionImg} alt='Shot from Easy on Me' />
        </div>
        <div className={classes.info}>
          <h2 className='heading-secondary'>
            His sound speaks originality and paints a visual reality of emotions
            in storytelling relatable to all people.
          </h2>
          <p className='paragraph'>
            Having lived through his life experiences, every song is personal to
            IRhay each having a tale behind its cursory meaning. IRhay the “Afro
            Chameleon” believes his creative and unique style of music is yet to
            be deeply defined but sets around the increasingly diverse
            sub-genres of Afrobeats.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
