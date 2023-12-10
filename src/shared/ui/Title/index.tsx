import React, { ReactFragment, ReactPortal } from 'react';
import classes from './style.module.scss';

type ReactNode = ReactFragment | ReactPortal | boolean | null | undefined;

type PropsWithChildren<P> = P & { children?: ReactNode };

const Title = ({ children }: PropsWithChildren<unknown>) => {
  return <h3 className={classes['second-title']}>{children}</h3>;
};

export default Title;
