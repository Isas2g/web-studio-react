import React from 'react';
import HeroTitle from '../../shared/ui/HeroTitle';
import './style.scss';
import Button from '../../shared/ui/Button';

const MainBlock = () => {
  return (
    <div className="block-container">
      <HeroTitle>
        Разрабатываем сайты от &#123;<span className="pink-gradient">идеи</span>
        &#125; до &#123;<span className="blue-gradient">запуска</span>&#125;
      </HeroTitle>
      <p className="main-block-text">
        Уникальный дизайн и качественный код от команды студентов Московского
        Политеха
      </p>
      <div className="buttons-container">
        <Button isAction text={'Заказать проект'} />
        <Button text={'Хочу в команду!'} />
      </div>
    </div>
  );
};

export default MainBlock;
