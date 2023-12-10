import React from 'react';
import classes from './style.module.scss';
import Title from 'shared/ui/Title';
import Subtitle from 'shared/ui/Subtitle';
import Paragraph from 'shared/ui/Paragraph';
import { Project } from 'entities/Project/types';

interface Props {
  project: Project;
}

const GoalBlock = ({ project }: Props) => {
  return (
    <div>
      <Title>Цель()</Title>
      <div className={classes['goals-container']}>
        <div className={classes['left-block']}>
          <Subtitle>
            Реализация веб-сервиса для работников студии и клиентов
          </Subtitle>
        </div>
        <div className={classes['right-block']}>
          <Paragraph>
            Создание высококачественных веб-сайтов и веб-приложений, которые
            помогут клиентам улучшить свой бизнес и привлечь больше клиентов.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default GoalBlock;
