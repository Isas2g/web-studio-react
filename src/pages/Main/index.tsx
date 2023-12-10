import { 
  MainBlock,
  MainSecondBlock,
  MainProjects,
  MainTechnologies,
  Application,
} from 'widgets/index';
import classes from './style.module.scss';
import floatingImage1 from 'shared/assets/icons/floating-image-1.svg';
import floatingImage2 from 'shared/assets/icons/floating-image-2.svg';
import floatingImage3 from 'shared/assets/icons/floating-image-3.svg';
import floatingImage4 from 'shared/assets/icons/floating-image-4.svg';
import { Project, fetchAPIProjects } from 'entities/Project';
import { useAppDispatch, useAppSelector } from 'shared/store';
import { useEffect } from 'react';

const Main = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAPIProjects());
  }, [dispatch]);

  const projects = useAppSelector((state) => state.projects.value) || [];

  return (
    <div className={classes['main-page-container']}>
      <img
        alt=""
        src={floatingImage1}
        className={classes['floating-image']}
      />
      <img
        alt=""
        src={floatingImage2}
        className={classes['floating-image']}
      />
      <img
        alt=""
        src={floatingImage3}
        className={classes['floating-image']}
      />
      <img
        alt=""
        src={floatingImage4}
        className={classes['floating-image']}
      />
      <MainBlock />
      <MainSecondBlock />
      <MainProjects projects={projects.slice(0, 3)} />
      <MainTechnologies />
      <Application />
    </div>
  );
};

export default Main;
