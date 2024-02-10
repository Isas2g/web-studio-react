import {
  ProjectBlock,
  GoalBlock,
  TasksBlock,
  TeamBlock,
} from './widgets';
import { Application } from 'widgets/index';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'shared/store';
import { useEffect } from 'react';
import { fetchProject } from 'entities/Project';
import { getProjectDocuments } from 'entities/Project/store';
import classes from './style.module.scss';


const Project = () => {
  const { id } = useParams();
  const project = useAppSelector((state) => state.projects.project);
  const documents = useAppSelector((state) => state.projects.documents);
  const isLoading = useAppSelector((state) => state.projects.isLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProject(Number(id)));
    dispatch(getProjectDocuments(Number(id)));
  }, []);

  if (isLoading) {
    return <p style={{ marginTop: 200 }}>{'loading...'}</p>;
  }

  return (
    <div className={'container'}>
      <ProjectBlock project={project} />
      {
        documents && <>
        <p className={classes['sub-title']}>документы</p>
          <div className={classes['file-list']}>
                { documents.map((document: any, i: number) => (
                    <a download href={`https://viotrina.ru/api/v1/documents/${document.id}`} key={ document.id } className={classes['file-name']}>
                        <div className={classes['inner-name']}>
                            { document.originalFilename } 
                        </div>
                    </a>
                )) }
            </div>
        </>
      }
      <GoalBlock project={project} />
      <TasksBlock />
      <TeamBlock />
      <Application />
    </div>
  );
};

export default Project;
