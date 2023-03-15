import React from 'react';
import TitleCenter from 'shared/ui/TitleCenter';
import classes from './style.module.scss';
import floatingImage1 from 'shared/assets/icons/floating-image-1.svg';
import floatingImage2 from 'shared/assets/icons/floating-cross.svg';

const AboutWhyUs = () => {
  return (
    <div className={classes['wrapper']}>
      <img
        className={classes['floating-image-1']}
        src={floatingImage1}
        alt={''}
      />
      <img
        className={classes['floating-image-2']}
        src={floatingImage2}
        alt={''}
      />
      <div className={` ${classes['why-us']} container`}>
        <TitleCenter>
          <span>&#65371;</span>почему именно мы?<span>&#65373;</span>
        </TitleCenter>
        <p className={classes['why-us__paragraph']}>
          <span>#</span> Все нужные вашему бизнесу специалисты есть в нашей
          команде — от дизайнеров и разработчиков до маркетологов
        </p>

        <div className={classes['why-us__dots']}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p className={classes['why-us__paragraph']}>
          <span>#</span> Мы молоды и от этого только более профессиональны — мы
          не боимся смотреть на IT-мир шире и внедряем в проекты новшества и
          тренды
        </p>
      </div>
    </div>
  );
};

export default AboutWhyUs;
