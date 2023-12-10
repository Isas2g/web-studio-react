import classes from './style.module.scss';
import React, { MouseEventHandler } from 'react';

interface Props {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const SecondButton = ({ text, onClick }: Props) => {
  return (
    <div>
      <button className={classes['back-btn']} onClick={onClick}>
        &#60;&#60;&#60; {text}
      </button>
    </div>
  );
};

export default SecondButton;
