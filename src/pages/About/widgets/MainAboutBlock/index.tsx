import React from 'react';
import classes from './style.module.scss';
import HeroTitle from 'shared/ui/HeroTitle';
import Paragraph from 'shared/ui/Paragraph';

const MainAboutBlock = () => {
  return (
    <div className={'container'}>
      <div className={classes['main-container']}>
        <div className={classes['title']}>
          <HeroTitle>
            Узнай о нас чуть &#123;
            <span className={classes['sea-color']}>больше</span>
            &#125;
          </HeroTitle>
        </div>
        <div className={classes['paragraph']}>
          <Paragraph>
            Познакомьтесь с нашей веб-студией поближе — узнайте о ее истории и
            принципы работы.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default MainAboutBlock;
