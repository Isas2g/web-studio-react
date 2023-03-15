import React from 'react';
import HeroTitle from 'shared/ui/HeroTitle';
import classes from './style.module.scss';
import Button from 'shared/ui/Button';

const MainBlock = () => {
  return (
    <div className={classes['block-container']}>
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
        <Button isAction text={'Заказать проект'} />
        <Button text={'Хочу в команду!'} />
      </div>
    </div>
  );
};

export default MainBlock;
