import Input from 'shared/ui/Input';
import classes from './style.module.scss';
import Button from 'shared/ui/Button';
import { Credentials } from 'entities/User/store';
import { ChangeEvent, useState } from 'react';

interface Props {
  handler: ({login, password}: Credentials) => void;
}

const AuthForm = ({
  handler
}: Props) => {
  const [credentials, setCredentials] = useState<Credentials>({
    login: '',
    password: ''
  });


  return (
    <div className={`${classes['container']} container`}>
      <h2 className={classes['auth-title']}>Авторизация</h2>
      <div className={classes['form']}>
        <Input
          id="login"
          label={'Логин()'}
          type={'text'}
          placeholder="Логин"
          name="login"
          onChange={(e) => {setCredentials({...credentials, login: e.currentTarget.value})}}
          value={credentials.login}
        />
        <Input
          id="password"
          label={'Пароль()'}
          type={'password'}
          placeholder="Пароль"
          name="password"
          onChange={(e) => {setCredentials({...credentials, password: e.currentTarget.value})}}
          value={credentials.password}
        />
        <span className={classes['forgot-pass-btn']}>забыли пароль?</span>
        <Button
          style={{ padding: 10 }} 
          text="Войти" 
          isAction 
          onClick={() => {handler(credentials)}}
        />
      </div>
    </div>
  );
};

export default AuthForm;
