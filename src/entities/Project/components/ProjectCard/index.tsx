import { Button } from 'shared/ui';
import classes from './style.module.scss';
import { Link } from 'react-router-dom';
import ProjectImage1 from 'shared/assets/images/project-image-1.png';
import ProjectImage2 from 'shared/assets/images/project-image-2.png';
import ProjectImage3 from 'shared/assets/images/project-image-3.png';
import { useAppDispatch } from 'shared/store';
import { fetchAPIProjects, removeProject } from 'entities/Project/store';

interface Props {
  title: string;
  years: string;
  description: string;
  isAdminPage?: boolean;
  id: number;
}

const ProjectCard = ({ title, years, description, isAdminPage, id }: Props) => {
  const dispatch = useAppDispatch();

  const onRemoveProject = async() => {
    const isOk = confirm('Вы уверены?');
    if (isOk) {
      await dispatch(removeProject(id));
      await dispatch(fetchAPIProjects());
    }
  };

  return (
    <div
      className={`${classes['card-container']} ${
        isAdminPage ? classes['card-extend'] : ''
      }`}
    >
      <Link className={classes['card-body']} to={`/projects/${id}`}>
        {id === 7 && (
          <img src={ProjectImage1} alt="" className={classes['card-pic']} />
        )}
        {id === 8 && (
          <img src={ProjectImage2} alt="" className={classes['card-pic']} />
        )}
        {id === 9 && (
          <img src={ProjectImage3} alt="" className={classes['card-pic']} />
        )}
        <p className={classes['card-title']}>{title}</p>
        <p className={classes['card-years']}>{years}</p>
        <p className={classes['card-description']}>{description}</p>
      </Link>
      {isAdminPage && (
        <div className={classes['buttons-container']}>
          {isAdminPage && (
            <>
              <Link
                className={classes['card-button']}
                to={'/edit-project/' + id}
              >
                Редактировать
              </Link>
              <button className={classes['card-button']} onClick={onRemoveProject}>
                Удалить
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
