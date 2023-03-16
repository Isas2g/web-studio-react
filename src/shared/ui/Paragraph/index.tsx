import React, { ReactFragment, ReactPortal } from 'react';
import classes from './style.module.scss';

type ReactNode = ReactFragment | ReactPortal | boolean | null | undefined;

type PropsWithChildren<P> = P & { children?: ReactNode };

interface Props {
  style?: React.CSSProperties;
}

const Paragraph = ({ children, style }: PropsWithChildren<Props>) => {
  return (
    <p className={classes['paragraph']} style={style}>
      {children}
    </p>
  );
};

export default Paragraph;
