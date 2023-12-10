import React, { ReactFragment, ReactPortal } from 'react';
import classes from './style.module.scss';

type ReactNode = ReactFragment | ReactPortal | boolean | null | undefined;

type PropsWithChildren<P> = P & {
  children?: ReactNode;
};

interface Props {
  style?: React.CSSProperties;
}

const Subtitle = ({ children, style }: PropsWithChildren<Props>) => {
  return (
    <h4 className={classes['subtitle']} style={style}>
      {children}
    </h4>
  );
};

export default Subtitle;
