import Input from 'shared/ui/Input';
import classes from './style.module.scss';
import Button from 'shared/ui/Button';

const AuthForm = () => {
  return (
    <div className={`${classes['container']} container`}>
      <h2 className={classes['auth-title']}>Авторизация</h2>
      <div className={classes['form']}>
        <Input
          id="login"
          label={'Логин'}
          type={'text'}
          placeholder="Логин"
          containerStyle={{ marginBottom: 19 }}
          name="login"
        />
        <Input
          id="password"
          label={'Пароль'}
          type={'password'}
          placeholder="Пароль"
          containerStyle={{ marginBottom: 19 }}
          name="password"
        />
        <span className={classes['forgot-pass-btn']}>забыли пароль?</span>
        <Button style={{ padding: 10 }} text="Войти" isAction />
      </div>
    </div>
  );
};

export default AuthForm;
