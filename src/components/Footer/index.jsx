import React from 'react';
import classes from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p className='paragraph'>
        Copyright &copy; 2024 TaradomeMusik. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
