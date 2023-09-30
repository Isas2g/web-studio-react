import Button from 'shared/ui/Button';
import classes from './style.module.scss';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  years: string;
  description: string;
  isAdminPage?: boolean;
  isProjectsPage?: boolean;
  id: number;
}

const ProjectCard = ({
  title,
  years,
  description,
  isAdminPage,
  isProjectsPage,
  id,
}: Props) => {
  return (
    <Link to={'/projects/' + id} style={{ color: '#d8d8e3' }}>
      <div className={classes['card-container']}>
        <p className={classes['card-title']}>{title}</p>
        <p className={classes['card-years']}>{years}</p>
        <p className={classes['card-description']}>{description}</p>
        {/*{(isAdminPage || isProjectsPage) && (*/}
        {/*  <div className={classes['buttons-container']}>*/}
        {/*    {isAdminPage && (*/}
        {/*      <>*/}
        {/*        <Link to={'/edit-project/' + id}>*/}
        {/*          <Button text={'Редактировать'} style={{ marginBottom: 30 }} />*/}
        {/*        </Link>*/}
        {/*        <Button text={'Удалить'} />*/}
        {/*      </>*/}
        {/*    )}*/}
        {/*    {isProjectsPage && (*/}
        {/*        <Button*/}
        {/*          text={'Смотреть проект'}*/}
        {/*          style={{ whiteSpace: 'nowrap' }}*/}
        {/*        />*/}
        {/*    )}*/}
        {/*  </div>*/}
        {/*)}*/}
      </div>
    </Link>
  );
};

export default ProjectCard;
