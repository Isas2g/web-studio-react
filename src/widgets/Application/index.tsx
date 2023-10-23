import React, { useState } from 'react';
import classes from './style.module.scss';
import HeroTitle from 'shared/ui/HeroTitle';
import Button from 'shared/ui/Button';
import Modal from '../../shared/ui/Modal';
import ModalJoin from '../ModalJoin';

interface Props {
  style?: React.CSSProperties;
}

const Application = ({ style }: Props) => {
  const [activeModal, setActiveModal] = useState(false);

  return (
    <div className={'container'}>
      <div className={classes['container-application']} style={style}>
        <div className={classes['application-title']}>
          <HeroTitle style={{ maxWidth: '100%' }}>
            Стань частью команды, просто &#123;
            <span className={classes['blue-pink-gradient']}>заполнив</span>
            &#125; заявку
          </HeroTitle>
        </div>
        <p className={classes['application-text']}>
          Даже если набор официально не открыт — мы все равно ждем тебя. А если
          остались вопросы, ты можешь задать их на почту.
        </p>
        <div className={classes['buttons-container']}>
          <Button
            isAction
            text={'Перейти к форме с заявкой'}
            onClick={() => setActiveModal(true)}
          />
        </div>
      </div>
      <ModalJoin active={activeModal} setActive={setActiveModal} />
    </div>
  );
};

export default Application;
