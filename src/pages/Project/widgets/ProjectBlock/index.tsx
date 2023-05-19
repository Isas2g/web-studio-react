import React from 'react';
import classes from './style.module.scss';
import Button from 'shared/ui/Button';
import SecondButton from 'shared/ui/SecondButton';

const ProjectBlock = () => {
  const stack = ['Vue.JS', 'Docker', 'Python'];
  const colors = [''];

  return (
    <div className={classes['project-container']}>
      <div className={classes['btn-back']}>
        <SecondButton text={'Назад к проектам'} />
      </div>
      <div className={classes['project-info']}>
        <div className={classes['right-block']}>
          <p className={classes['project-title']}>About Web</p>
          <p className={classes['project-years']}>2020 — 2021</p>
          <p className={classes['project-description']}>
            Это веб-студия, специализирующаяся на создании пользовательских
            интерфейсов, разработке веб-сайтов и веб-приложений для клиентов
            различных отраслей. Команда About Web состоит из опытных
            веб-разработчиков, дизайнеров и маркетологов, которые обладают
            большим опытом в создании веб-проектов и работе с последними
            технологиями.
          </p>
          <div className={classes['project-stack']}>
            <p className={classes['stack-title']}> Стек технологий: </p>
            {stack.map((item, index) => (
              <p className={'stack-items'} key={index}>
                {item}
              </p>
            ))}
          </div>
          <div className={classes['btn-container']}>
            <Button text={'Ссылка на проект'} />
          </div>
        </div>
        <div className={classes['left-block']}></div>
      </div>
    </div>
  );
};

export default ProjectBlock;
