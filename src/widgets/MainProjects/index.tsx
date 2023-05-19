import React from 'react';

import classes from './style.module.scss';
import Title from 'shared/ui/Title';
import Subtitle from 'shared/ui/Subtitle';
import ProjectCard from 'entities/Project/components/ProjectCard';
import Button from 'shared/ui/Button';
import { Link } from 'react-router-dom';

const MainProjects = () => {
  return (
    <div className={'container'}>
      <div className={classes['main-projects-container']}>
        <div className={classes['text-project-container']}>
          <Title>Проекты</Title>
          <Subtitle style={{ maxWidth: '850px' }}>
            А вот последние решения, которые нам удалось успешно реализовать.
          </Subtitle>
        </div>
        <div className={classes['projects-list-container']}>
          <ProjectCard
            id={1}
            title={'About Web'}
            years={'2021-2023'}
            description={
              'Информационный портал\n' +
              'для заказчиков и сотрудников веб-студии. Вы сейчас здесь.'
            }
          />
          <ProjectCard
            id={2}
            title={'About Web'}
            years={'2021-2023'}
            description={
              'Информационный портал\n' +
              'для заказчиков и сотрудников веб-студии. Вы сейчас здесь.'
            }
          />
          <ProjectCard
            id={3}
            title={'About Web'}
            years={'2021-2023'}
            description={
              'Информационный портал\n' +
              'для заказчиков и сотрудников веб-студии. Вы сейчас здесь.'
            }
          />
        </div>
        <Link to="/projects">
          <Button text={'Смотреть все проекты'} />
        </Link>
      </div>
    </div>
  );
};

export default MainProjects;
