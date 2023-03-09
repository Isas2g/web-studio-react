import React, { ReactFragment, ReactPortal } from 'react';
import classes from './style.module.scss';
import ListItems from '../ListItems';
type ReactNode = ReactFragment | ReactPortal | boolean | null | undefined;

interface Props {
  isActive?: boolean;
  items: string[];
}

type PropsWithChildren<P> = P & { children?: ReactNode };

const List = ({ items }: PropsWithChildren<Props>) => {
  return (
    <>
      {items.map((item, index) => (
        <ListItems key={index}>{item}</ListItems>
      ))}
    </>
  );
};

export default List;
