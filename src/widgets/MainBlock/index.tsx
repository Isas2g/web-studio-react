import React from 'react';
import HeroTitle from 'shared/ui/HeroTitle';
import classes from './style.module.scss';
import Button from 'shared/ui/Button';
import { Link } from 'react-router-dom';

const MainBlock = () => {
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
        <Link
          to={'https://forms.gle/Bu5C4LxvTiaNn6wUA'}
          className={classes['lnk']}
        >
          <Button isAction text={'Заказать проект'} />
        </Link>
        <Link
          to={'https://forms.gle/ZvEJqXSKFJtUHABb6'}
          className={classes['lnk']}
        >
          <Button text={'Хочу в команду!'} />
        </Link>
      </div>
    </div>
  );
};

export default MainBlock;
