import Button from 'shared/ui/Button';
import classes from './style.module.scss';
import ProjectCard from 'entities/Project/components/ProjectCard';

const AdminProjects = () => {
  return (
    <main className={classes['admin-projects-container']}>
      <Button isAction text={'Создать проект'} style={{ marginBottom: 62 }} />

      <div className={classes['projects-container']}>
        <ProjectCard
          isAdminPage
          title={'About Web'}
          years={'2020 — 2021'}
          description={
            'Информационный портал для заказчиков и сотрудников веб-студии. Вы сейчас здесь.'
          }
        />
        <ProjectCard
          isAdminPage
          title={'About Web'}
          years={'2020 — 2021'}
          description={
            'Информационный портал для заказчиков и сотрудников веб-студии. Вы сейчас здесь.'
          }
        />
        <ProjectCard
          isAdminPage
          title={'About Web'}
          years={'2020 — 2021'}
          description={
            'Информационный портал для заказчиков и сотрудников веб-студии. Вы сейчас здесь.'
          }
        />
      </div>
    </main>
  );
};
export default AdminProjects;
