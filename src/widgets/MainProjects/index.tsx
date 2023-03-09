import React from 'react';

import './style.scss';
import Title from '../../shared/ui/Title';
import Subtitle from '../../shared/ui/Subtitle';
import ProjectCard from '../../entities/Project/components/ProjectCard';
import Button from '../../shared/ui/Button';

const MainProjects = () => {
  return (
    <div className="third-block-container">
      <div className="text-project-container">
        <Title>Проекты</Title>
        <Subtitle>
          А вот последние решения, которые нам удалось успешно реализовать.
        </Subtitle>
      </div>
      <div className="projects-list-container">
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
      <Button text={'Смотреть все проекты'} />
    </div>
  );
};

export default MainProjects;
