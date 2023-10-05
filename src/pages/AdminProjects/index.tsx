import Button from 'shared/ui/Button';
import classes from './style.module.scss';
import ProjectCard from 'entities/Project/components/ProjectCard';
import { useAppDispatch, useAppSelector } from 'shared/store';
import { useEffect } from 'react';
import { fetchAPIProjects } from 'entities/Project/store';
import { Link } from 'react-router-dom';

const AdminProjects = () => {
  const projects = useAppSelector((state) => state.projects.value);
  const isLoading = useAppSelector((state) => state.projects.isLoading);
  const dispatch = useAppDispatch();

  console.log(localStorage.getItem('csrfToken'));

  useEffect(() => {
    dispatch(fetchAPIProjects());
  }, []);

  if (isLoading) {
    return <p style={{ marginTop: 200 }}>{'loading...'}</p>;
  }

  return (
    <main className={classes['admin-projects-container']}>
      <Link to={'/create-project'}>
        <Button isAction text={'Создать проект'} style={{ marginBottom: 62 }} />
      </Link>

      <div className={classes['projects-container']}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            isAdminPage
            title={project.title}
            years={'2021 — 2021'}
            description={project.description}
          />
        ))}
      </div>
    </main>
  );
};
export default AdminProjects;

// {
//   "title": "About Web",
//   "description": "Информационный портал для заказчиков и сотрудников веб-студии. Вы сейчас здесь.",
//   "startedAt": "2022-09-10T21:00:00.000Z",
//   "endedAt": "2022-12-10T21:00:00.000Z",
//   "link": "https://pd-2021-2.std-1376.ist.mospolytech.ru"
// }
