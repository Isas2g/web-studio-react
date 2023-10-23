import React, { ReactNode } from 'react';
import classes from './style.module.scss';

interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}

const Modal = ({ active, setActive, children }: Props) => {
  return (
    <div
      onClick={() => setActive(false)}
      role="presentation"
      className={
        active ? `${classes[`modal`]} ${classes[`active`]}` : classes['modal']
      }
    >
      <div
        className={classes['modal__content']}
        role="presentation"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={classes['modal__close']}
          onClick={() => setActive(false)}
          role="presentation"
        >
          &#10006;
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
