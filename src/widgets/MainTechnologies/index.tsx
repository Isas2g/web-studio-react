import React from 'react';
import Title from '../../shared/ui/Title';
import classes from './style.module.scss';
import Subtitle from '../../shared/ui/Subtitle';
import Paragraph from '../../shared/ui/Paragraph';

const MainTechnologies = () => {
  return (
    <div className={classes['container']}>
      <div className={classes['container-technologies']}>
        <Title>
          <span className={classes['square-brackets']}>&#123;</span>Используемые
          технологии
          <span className={classes['square-brackets']}>&#125;</span>
        </Title>
        <div className={classes['subtitle-container']}>
          <Subtitle>
            Мы создаем проекты на различных стеках технологий, в зависимости от
            потребностей заказчика.
          </Subtitle>
        </div>
        <div className={classes['paragraph-container']}>
          <Paragraph>
            Среди технологий могут быть JavaScript. Мы создаем проекты на
            различных стеках технологий, в зависимости от потребностей.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default MainTechnologies;
