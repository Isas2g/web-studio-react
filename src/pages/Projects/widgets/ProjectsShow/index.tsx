import React, { useState } from 'react';
import ProjectsList from 'widgets/OurProjects';
import classes from './style.module.scss';
import Button from 'shared/ui/Button';
import { Project } from 'entities/Project';

interface Props {
  projects: Project[],
}


const ProjectsShow = ({projects}: Props) => {

  const buttonList = ['Все проекты', 'Интернет-магазин', 'Лэндинг', 'Информационный сервис', 'Личный блог', 'Сайт-потфолио', 'Корпоративный портал', 'Агрегатор'];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={`${classes['projects-show']} container`}>
      <div className={classes['btns-row']}>
        {
          buttonList.map((item, index) => <Button 
            key={item} 
            text={item} 
            isAction={activeIndex === index}
            onClick={() => {setActiveIndex(index)}}
          />)
        }
        
      </div>
      <ProjectsList projects={projects} />
    </div>
  );
};

export default ProjectsShow;
