import React, { useState } from 'react';
import HeroTitle from 'shared/ui/HeroTitle';
import classes from './style.module.scss';
import Button from 'shared/ui/Button';
import { Link } from 'react-router-dom';
import Modal from '../../shared/ui/Modal';

const MainBlock = () => {
  const [activeModal, setActiveModal] = useState(false);
  const [modalType, setModalType] = useState(false);

  return (
    <div className={`${classes['block-container']} container`}>
      <HeroTitle>
        Разрабатываем сайты от &#123;
        <span className={classes['pink-gradient']}>идеи</span>
        &#125; до &#123;
        <span className={classes['blue-gradient']}>запуска</span>&#125;
      </HeroTitle>
      <p className={classes['main-block-text']}>
        Уникальный дизайн и качественный код от команды студентов Московского
        Политеха
      </p>
      <div className={classes['buttons-container']}>
        <Button
          isAction
          text={'Заказать проект'}
          onClick={() => {
            setModalType(true);
            setActiveModal(true);
          }}
        />
        <Button
          text={'Хочу в команду!'}
          onClick={() => {
            setModalType(false);
            setActiveModal(true);
          }}
        />
      </div>
      <Modal
        active={activeModal}
        setActive={setActiveModal}
        isCommission={modalType}
      />
    </div>
  );
};

export default MainBlock;
