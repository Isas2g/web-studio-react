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
    <div className={`${classes['card-container']} ${(isAdminPage) ? classes['card-extend'] : ''}`}>
      <Link className={classes['card-body']} to={`/projects/${id}`}>
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
              <Link className={classes['card-button']} to={'#'}>
                Удалить
              </Link>
            </>
          )}
        </div>
      )}
    </div>
    // <div className={classes['card-container']}>
    //   <Link className={classes['card-link']} to={'/projects/' + id} >
    //     <div className={classes['card-container']}>
    //       <p className={classes['card-title']}>{title}</p>
    //       <p className={classes['card-years']}>{years}</p>
    //       <p className={classes['card-description']}>{description}</p>
    //     </div>
    //   </Link>
    //   {isAdminPage && (
    //     <div className={classes['buttons-container']}>
    //       {isAdminPage && (
    //         <>
    //           <Link to={'/edit-project/' + id}>
    //             <Button text={'Редактировать'} style={{ marginBottom: 10 }} />
    //           </Link>
    //           <Button text={'Удалить'} style={{ marginBottom: 10 }} />
    //         </>
    //       )}
    //     </div>
    //   )}
    // </div>
  );
};

export default ProjectCard;
