import React, { useState } from 'react';
import TitleCenter from '../../shared/ui/TitleCenter';
import classes from './style.module.scss';
import Button from 'shared/ui/Button';
import Paragraph from 'shared/ui/Paragraph';

import aboutFloatingImage1 from 'shared/assets/icons/about-floating-image-1.svg';
import floatingGrid from 'shared/assets/icons/floating-grid.svg';

interface List {
  title: string;
  description: string;
}

const AboutBlock = () => {
  const [selectedButton, chooseButton] = useState('Кто мы');

  const selectButton = (name: string) => {
    chooseButton(name);
    console.log(name);
  };

  const list: Array<List> = [
    {
      title: 'Кто мы',
      description:
        'Мы представляем сообщество студентов, которые разделяют общую страсть к веб-разработке и хотят развиваться в этой области. Совместное творчество и обмен знаниями — главные инструменты для достижения наших целей.\n' +
        'Все нужные вашему бизнесу специалисты есть в нашей команде — от дизайнеров и разработчиков до маркетологов\n' +
        'Мы молоды и от этого только более профессиональны — мы не боимся смотреть на IT-мир шире и внедряем в проекты новшества и тренды',
    },
    {
      title: 'Чем мы занимаемся',
      description:
        'Проектируем структуру сайта, определяем дизайн и внешний вид, выбираем цветовую гамму и разрабатываем логотип. Мы также планируем интерфейсы и определяем, какие элементы будут находиться на каждой странице.',
    },
    {
      title: 'Технологии',
      description:
        'Мы создаем проекты на различных стеках технологий, в зависимости от потребностей заказчика. Среди технологий могут быть JavaScript ,Мы создаем проекты на различных стеках технологий, в зависимости от потребности. ',
    },
  ];

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
          {list.map((item) => {
            return item.title !== selectedButton ? (
              <li
                className={classes['about-block__list-item']}
                key={item.title}
              >
                <button
                  type={'button'}
                  onClick={() => selectButton(item.title)}
                >
                  {item.title}
                </button>
              </li>
            ) : (
              <li
                className={
                  classes['about-block__list-item'] +
                  ' ' +
                  classes['about-block__list-item--active']
                }
                key={item.title}
              >
                <button>{item.title}</button>
              </li>
            );
          })}
        </ul>
        {list.map((item) => {
          return (
            item.title === selectedButton && (
              <Paragraph key={item.title} style={{ textAlign: 'center' }}>
                {item.description}
              </Paragraph>
            )
          );
        })}

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
