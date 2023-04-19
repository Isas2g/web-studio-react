import React, { ReactFragment, ReactPortal } from 'react';
import classes from './style.module.scss';

type ReactNode = ReactFragment | ReactPortal | boolean | null | undefined;

type PropsWithChildren<P> = P & {
  children?: ReactNode;
  style?: React.CSSProperties;
};

const Subtitle = ({ children, style }: PropsWithChildren<unknown>) => {
  return (
    <h4 className={classes['subtitle']} style={style}>
      {children}
    </h4>
  );
};

export default Subtitle;
