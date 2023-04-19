import React from 'react';
import classes from './style.module.scss';
import HeroTitle from 'shared/ui/HeroTitle';
import Button from 'shared/ui/Button';

const Application = () => {
  return (
    <div className={'container'}>
      <div className={classes['container-application']}>
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
          <Button isAction text={'Перейти к форме с заявкой'} />
        </div>
      </div>
    </div>
  );
};

export default Application;
