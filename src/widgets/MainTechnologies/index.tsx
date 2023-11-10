import React from 'react';
import Title from 'shared/ui/Title';
import classes from './style.module.scss';
import Subtitle from 'shared/ui/Subtitle';
import Paragraph from 'shared/ui/Paragraph';

import PythonIcon from 'shared/assets/icons/python.svg';
import ReactIcon from 'shared/assets/icons/react.svg';
import BehanceIcon from 'shared/assets/icons/behance.svg';
import VueIcon from 'shared/assets/icons/vue.svg';
import GolangIcon from 'shared/assets/icons/golang.svg';
import FigmaIcon from 'shared/assets/icons/figma.svg';

const MainTechnologies = () => {
  return (
    <div className={'container'}>
      <div className={classes['page-container']}>
        <div className={classes['container-technologies']}>
          <Title>
            <span className={classes['square-brackets']}>&#123;</span>
            Используемые технологии
            <span className={classes['square-brackets']}>&#125;</span>
          </Title>
          <div className={classes['subtitle-container']}>
            <Subtitle>
              Мы создаем проекты на различных стеках технологий, в зависимости
              от потребностей заказчика.
            </Subtitle>
          </div>
          <div className={classes['paragraph-container']}>
            <Paragraph>
              Мы можем использовать различные языки программирования,
              фреймворки, библиотеки и инструменты для создания наших проектов,
              что дает нам свободу выбора и креатива. А еще мы постоянно изучаем
              новые технологии, чтобы расширять наши возможности.
            </Paragraph>
          </div>
        </div>
        <div className={classes['pictures']}>
          <div className={classes['picture']}>
            <img src={PythonIcon} alt="python-language-icon" />
          </div>
          <div className={classes['picture']}>
            <img src={ReactIcon} alt="react-language-icon" />
          </div>
          <div className={classes['picture']}>
            <img src={BehanceIcon} alt="behance-language-icon" />
          </div>
          <div className={classes['picture']}>
            <img src={VueIcon} alt="vue-language-icon" />
          </div>
          <div className={classes['picture']}>
            <img src={GolangIcon} alt="golang-language-icon" />
          </div>
          <div className={classes['picture']}>
            <img src={FigmaIcon} alt="figma-language-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTechnologies;
