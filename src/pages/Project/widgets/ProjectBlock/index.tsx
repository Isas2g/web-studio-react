import React from 'react';
import classes from './style.module.scss';
import Button from 'shared/ui/Button';
import floatingImage6 from 'shared/assets/icons/floating-image-6.svg';
import floatingImage7 from 'shared/assets/icons/floating-image-7.svg';
import floatingImage8 from 'shared/assets/icons/floating-image-8.svg';
import SecondButton from 'shared/ui/SecondButton';

const ProjectBlock = () => {
  const stack = ['Vue.JS', 'Docker', 'Python'];
  const colors = [''];

  return (
    <div className={'container'}>
      <img
        alt=""
        src={floatingImage6}
        className={classes['floating-image-6']}
      />
      <img
        alt=""
        src={floatingImage7}
        className={classes['floating-image-7']}
      />
      <img
        alt=""
        src={floatingImage8}
        className={classes['floating-image-8']}
      />
      <div className={classes['project-container']}>
        <SecondButton />
        <div className={classes['project-info']}>
          <div className={classes['left-block']}></div>
          <div className={classes['right-block']}>
            <p className={classes['project-title']}>About Web</p>
            <p className={classes['project-years']}>2020 — 2021</p>
            <p className={classes['project-description']}>
              Информационный портал для заказчиков и сотрудников веб-студии.{' '}
              <br /> 1. Основными целями разработки сайта являются: <br /> а.
              Реализовать легкий способ подачи заявки на участие в Веб-студии.{' '}
              <br />
              б. Упрощение работы с отчетностью.
            </p>
            <p className={classes['project-description']}>
              Проблемы проблемы проблемы проблемы проблемы проблемы проблемы
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
        </div>
      </div>
    </div>
  );
};

export default ProjectBlock;
