import React from 'react';
import classes from './style.module.scss';
import Button from 'shared/ui/Button';
import SecondButton from 'shared/ui/SecondButton';
import { Project } from 'entities/Project/types';

interface Props {
  project: Project;
}

const ProjectBlock = ({ project }: Props) => {
  const stack = ['Vue.JS', 'Docker', 'Python'];
  const colors = [''];

  return (
    <div className={classes['project-container']}>
      <div className={classes['btn-back']}>
        <SecondButton text={'Назад к проектам'} />
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
        <div className={classes['left-block']}></div>
      </div>
    </div>
  );
};

export default ProjectBlock;
