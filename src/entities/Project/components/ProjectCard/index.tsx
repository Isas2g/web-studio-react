import { Button } from 'shared/ui';
import classes from './style.module.scss';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  years: string;
  description: string;
  isAdminPage?: boolean;
  id?: number;
}

const ProjectCard = ({ title, years, description, isAdminPage, id }: Props) => {
  return (
    <Link to={'/projects/' + id} style={{ color: '#d8d8e3' }}>
      <div className={classes['card-container']}>
        <p className={classes['card-title']}>{title}</p>
        <p className={classes['card-years']}>{years}</p>
        <p className={classes['card-description']}>{description}</p>
        {isAdminPage && (
          <div className={classes['buttons-container']}>
            {isAdminPage && (
              <>
                <Link to={'/edit-project/' + id}>
                  <Button text={'Редактировать'} style={{ marginBottom: 10 }} />
                </Link>
                <Button text={'Удалить'} style={{ marginBottom: 10 }} />
              </>
            )}
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProjectCard;
