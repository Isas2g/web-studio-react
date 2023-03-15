import AuthForm from 'widgets/AuthForm';
import classes from './style.module.scss';

import floatingImage1 from 'shared/assets/icons/floating-image-1.svg';
import floatingImage5 from 'shared/assets/icons/floating-image-5.svg';
import floatingImage2 from 'shared/assets/icons/floating-image-2.svg';
import floatingImage4 from 'shared/assets/icons/floating-image-4.svg';

// 2 5 1 4
const Authorization = () => {
  return (
    <main className={classes['auth']}>
      <img
        alt={'floating'}
        src={floatingImage1}
        className={classes['floating-image-1']}
      />
      <img
        alt={'floating'}
        src={floatingImage2}
        className={classes['floating-image-2']}
      />
      <img
        alt={'floating'}
        src={floatingImage4}
        className={classes['floating-image-4']}
      />
      <img
        alt={'floating'}
        src={floatingImage5}
        className={classes['floating-image-5']}
      />
      <AuthForm />
    </main>
  );
};
export default Authorization;