import React from 'react';

import classes from './style.module.scss';
import Title from 'shared/ui/Title';
import Subtitle from 'shared/ui/Subtitle';
import ProjectCard from 'entities/Project/components/ProjectCard';
import Button from 'shared/ui/Button';

const MainProjects = () => {
  return (
    <div className={'container'}>
      <div className={classes['text-project-container']}>
        <Title>Проекты</Title>
        <Subtitle>
          А вот последние решения, которые нам удалось успешно реализовать.
        </Subtitle>
      </div>
      <div className={classes['projects-list-container']}>
        <ProjectCard
          title={'About Web'}
          years={'2021-2023'}
          description={
            'Информационный портал\n' +
            'для заказчиков и сотрудников веб-студии. Вы сейчас здесь.'
          }
        />
        <ProjectCard
          title={'About Web'}
          years={'2021-2023'}
          description={
            'Информационный портал\n' +
            'для заказчиков и сотрудников веб-студии. Вы сейчас здесь.'
          }
        />
        <ProjectCard
          title={'About Web'}
          years={'2021-2023'}
          description={
            'Информационный портал\n' +
            'для заказчиков и сотрудников веб-студии. Вы сейчас здесь.'
          }
        />
      </div>
      <div style={{ textAlign: 'center' }}>
        <Button text={'Смотреть все проекты'} />
      </div>
    </div>
  );
};

export default MainProjects;
