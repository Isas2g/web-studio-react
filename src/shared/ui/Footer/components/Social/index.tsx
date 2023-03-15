import React, { ReactFragment, ReactPortal } from 'react';
import classes from './style.module.scss';

type ReactNode = ReactFragment | ReactPortal | boolean | null | undefined;

type PropsWithChildren<P> = P & { children?: ReactNode };

const Social = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div className={classes['frame']}>
      <p className={classes['text']}>{children}</p>
    </div>
  );
};

export default Social;
