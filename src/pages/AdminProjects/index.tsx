import Button from 'shared/ui/Button';
import classes from './style.module.scss';
import ProjectCard from 'entities/Project/components/ProjectCard';
import { useAppDispatch, useAppSelector } from 'shared/store';
import { useEffect } from 'react';
import { fetchAPIProjects } from 'entities/Project/store';

const AdminProjects = () => {
  const projects = useAppSelector((state) => state.projects.value);
  const isLoading = useAppSelector((state) => state.projects.isLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAPIProjects());
  }, []);

  if (isLoading) {
    return <p style={{ marginTop: 200 }}>{'loading...'}</p>;
  }

  return (
    <main className={classes['admin-projects-container']}>
      <Button isAction text={'Создать проект'} style={{ marginBottom: 62 }} />

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
        {/* <ProjectCard
          id={1}
          isAdminPage
          title={'Stories Home'}
          years={'2021 — 2021'}
          description={
            'Интернет-магазин товаров для дома. Все самые уютные подушки, одеяла и полотенца для вас!'
          }
        />
        <ProjectCard
          id={2}
          isAdminPage
          title={'2045 studio'}
          years={'2022 — 2022'}
          description={
            'Лендинг для cg-студии 2045, работающей с крупными артистами.'
          }
        />
        <ProjectCard
          id={3}
          isAdminPage
          title={'About Web'}
          years={'2022 — 2022'}
          description={
            'Информационный портал для заказчиков и сотрудников веб-студии. Вы сейчас здесь.'
          }
        /> */}
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
