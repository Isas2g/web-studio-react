import React, {
  useState
} from 'react';

import classes from './style.module.scss';
import { Link } from 'react-router-dom';

import {
  SecondButton
} from 'shared/ui/index' 

import {
    ChaptersBar,
    Form,
    Teammates,
    Resources
} from './widgets/index'

export enum Chapters {
  generalInfo="Общая информация",
  team="Команда",
  resources="Ресурсы"
}

const CreateNewProject = () => {
  const [selectedChapter, setSelectedChapter] = useState<Chapters>(Chapters.generalInfo)

  return (
    <div className='container'>
        <Link className={classes['return-link']} to="/admin-projects">
            &lt;&lt;&lt; назад к проектам
        </Link>

        <div className={classes['header']}>
            <h2 className={classes['title']}>Создание проекта</h2>
            <h3 className={classes['project-name']}>Название</h3>
        </div>
        
        <div className={classes['content']}>
            <ChaptersBar selectedChapter={selectedChapter} setSelectedChapter={setSelectedChapter} />

            {
              selectedChapter === Chapters.generalInfo ? (
                <Form />
              ) : selectedChapter === Chapters.team ? (
                <Teammates />
              ) : selectedChapter === Chapters.resources ? (
                <Resources />
              ) : null
            }
        </div>
    </div>
  );
};

export default CreateNewProject;
