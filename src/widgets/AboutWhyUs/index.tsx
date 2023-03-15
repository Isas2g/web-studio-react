import React from 'react';
import TitleCenter from '../../shared/ui/TitleCenter';
import Paragraph from '../../shared/ui/Paragraph';
import './style.scss';

const AboutWhyUs = () => {
  return (
    <div className={'container why-us'}>
      <TitleCenter>
        <span>&#65371;</span>почему именно мы?<span>&#65373;</span>
      </TitleCenter>
      <Paragraph>
        <span>#</span>Все нужные вашему бизнесу специалисты есть в нашей команде
        — от дизайнеров и разработчиков до маркетологов
      </Paragraph>
      <div className={'why-us__dots'}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Paragraph>
        <span>#</span>Мы молоды и от этого только более профессиональны — мы не
        боимся смотреть на IT-мир шире и внедряем в проекты новшества и тренды
      </Paragraph>
    </div>
  );
};

export default AboutWhyUs;
