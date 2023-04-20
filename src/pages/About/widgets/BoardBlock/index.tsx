import React from 'react';
import classes from './style.module.scss';

const BoardBlock = () => {
  return (
    <div className={'container'}>
      <div className={classes['board-container']}>
        <div className={classes['board']}></div>
      </div>
    </div>
  );
};

export default BoardBlock;
