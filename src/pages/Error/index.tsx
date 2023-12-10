import classes from './style.module.scss';
import { 
  Button,
  Paragraph 
} from 'shared/ui';
import floatingImage1 from 'shared/assets/icons/floating-image-1.svg';
import floatingImage2 from 'shared/assets/icons/floating-image-2.svg';
import floatingImage4 from 'shared/assets/icons/floating-image-4.svg';
import errorFloatingImage from 'shared/assets/icons/error-floating-image.svg';

const Error = () => {
  return (
    <div className={'container'}>
      <img
        alt=""
        src={floatingImage1}
        className={classes['floating-image-1']}
      />
      <img
        alt=""
        src={floatingImage2}
        className={classes['floating-image-2']}
      />
      <img
        alt=""
        src={floatingImage4}
        className={classes['floating-image-4']}
      />
      <img
        alt=""
        src={errorFloatingImage}
        className={classes['error-floating-image']}
      />
      <div className={classes['error-container']}>
        <h1 className={classes['error-title']}>Not Found ;(</h1>
        <div className={classes['subtitle-container']}>
          <Paragraph>
            Упс, страница не найдена. Но всегда можно вернуться назад и
            исправить старые ошибки. Наверное.
          </Paragraph>
        </div>
        <Button text={'Вернуться на главную'} isAction={true} />
      </div>
    </div>
  );
};

export default Error;
