import classes from './style.module.scss';
import React from 'react';

const SecondButton = () => {
  return (
    <div>
      <button className={classes['back-btn']}>&#60; К проектам</button>
    </div>
  );
};

export default SecondButton;
