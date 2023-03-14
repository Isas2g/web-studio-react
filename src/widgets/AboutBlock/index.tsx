import React, { useState } from 'react';
import TitleCenter from '../../shared/ui/TitleCenter';
import './style.scss';
import Button from '../../shared/ui/Button';
import Paragraph from '../../shared/ui/Paragraph';

const AboutBlock = () => {
  return (
    <div className={'container about-block'}>
      <TitleCenter>what about “about web”?</TitleCenter>
      <ul className={'about-block__list'}>
        <li className={'about-block__list-item about-block__list-item--active'}>
          <button>Кто мы</button>
        </li>
        <li className={'about-block__list-item'}>
          <button>Чем мы занимаемся</button>
        </li>
        <li className={'about-block__list-item'}>
          <button>Технологии</button>
        </li>
      </ul>
      <Paragraph>
        Мы представляем сообщество студентов, которые разделяют общую страсть к
        веб-разработке и хотят развиваться в этой области. Совместное творчество
        и обмен знаниями — главные инструменты для достижения наших целей. Все
        нужные вашему бизнесу специалисты есть в нашей команде — от дизайнеров и
        разработчиков до маркетологов Мы молоды и от этого только более
        профессиональны — мы не боимся смотреть на IT-мир шире и внедряем в
        проекты новшества и тренды
      </Paragraph>

      <Button text={'Заказать проект'} isAction />
    </div>
  );
};

export default AboutBlock;
