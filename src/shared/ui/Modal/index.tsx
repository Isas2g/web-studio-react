import React from 'react';
import classes from './style.module.scss';
import Input from '../Input';
import Button from '../Button';
import ModalCommission from '../../../widgets/ModalCommission';
import ModalJoin from '../../../widgets/ModalJoin';

interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  isCommission: boolean;
}

const Modal = ({ active, setActive, isCommission }: Props) => {
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
        {isCommission ? <ModalCommission /> : <ModalJoin />}
      </div>
    </div>
  );
};

export default Modal;
