import React, { useState } from 'react';
import TitleCenter from '../../shared/ui/TitleCenter';
import classes from './style.module.scss';
import Button from 'shared/ui/Button';
import Paragraph from 'shared/ui/Paragraph';

import aboutFloatingImage1 from 'shared/assets/icons/about-floating-image-1.svg';
import floatingGrid from 'shared/assets/icons/floating-grid.svg';

const AboutBlock = () => {
  return (
    <div className={classes['wrapper']}>
      <img
        className={classes['floating-image-1']}
        src={aboutFloatingImage1}
        alt={''}
      />
      <img
        className={classes['floating-image-2']}
        src={floatingGrid}
        alt={''}
      />
      <div className={`${classes['about-block']} container`}>
        <TitleCenter>what about “about web”?</TitleCenter>
        <ul className={classes['about-block__list']}>
          <li
            className={
              classes['about-block__list-item'] +
              ' ' +
              classes['about-block__list-item--active']
            }
          >
            <button>Кто мы</button>
          </li>
          <li className={classes['about-block__list-item']}>
            <button>Чем мы занимаемся</button>
          </li>
          <li className={classes['about-block__list-item']}>
            <button>Технологии</button>
          </li>
        </ul>
        <Paragraph style={{ textAlign: 'center' }}>
          Мы представляем сообщество студентов, которые разделяют общую страсть
          к веб-разработке и хотят развиваться в этой области. Совместное
          творчество и обмен знаниями — главные инструменты для достижения наших
          целей. Все нужные вашему бизнесу специалисты есть в нашей команде — от
          дизайнеров и разработчиков до маркетологов Мы молоды и от этого только
          более профессиональны — мы не боимся смотреть на IT-мир шире и
          внедряем в проекты новшества и тренды
        </Paragraph>

        <Button
          text={'Заказать проект'}
          style={{ margin: '0 auto', display: 'block' }}
          isAction
        />
      </div>
    </div>
  );
};

export default AboutBlock;
