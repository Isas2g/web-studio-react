import React from 'react';
import classes from './style.module.scss';
import Button from 'shared/ui/Button';
import SecondButton from 'shared/ui/SecondButton';
import { Project } from 'entities/Project/types';
import { Link } from 'react-router-dom';
import ProjectImage1 from 'shared/assets/images/project-image-1.png';
import ProjectImage2 from 'shared/assets/images/project-image-2.png';
import ProjectImage3 from 'shared/assets/images/project-image-3.png';

interface Props {
  project: Project;
}

const ProjectBlock = ({ project }: Props) => {
  const stack = ['Vue.JS', 'Docker', 'Python'];
  const colors = [''];

  return (
    <div className={classes['project-container']}>
      <div className={classes['btn-back']}>
        <Link to={'/projects'} className={classes['lnk']}>
          <SecondButton text={'Назад к проектам'} />
        </Link>
      </div>
      <div className={classes['project-info']}>
        <div className={classes['right-block']}>
          <p className={classes['project-title']}>{project.title}</p>
          <p className={classes['project-years']}>{`${new Date(
            project.startedAt
          ).getFullYear()} - ${new Date(project.endedAt).getFullYear()}`}</p>
          <p className={classes['project-description']}>
            {project.description}
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
            <a href={project.link} target="_blank" rel="noreferrer">
              <Button text={'Ссылка на проект'} />
            </a>
          </div>
        </div>
        <div className={classes['left-block']}>
          {project.id === 7 && (
            <img src={ProjectImage1} alt="" className={classes['pic']} />
          )}
          {project.id === 8 && (
            <img src={ProjectImage2} alt="" className={classes['pic']} />
          )}
          {project.id === 9 && (
            <img src={ProjectImage3} alt="" className={classes['pic']} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectBlock;
