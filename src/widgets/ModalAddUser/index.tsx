import React, { FormEvent, useEffect, useState } from 'react';
import { useAppDispatch } from '../../shared/store';
import { createUser, User } from '../../entities/User';
import Modal from '../../shared/ui/Modal';
import classes from '../../shared/ui/Modal/style.module.scss';
import Input from '../../shared/ui/Input';
import Button from '../../shared/ui/Button';
import Dropdown from '../../shared/ui/Dropdown';

interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalAddUser = ({ active, setActive }: Props) => {
  const [userInfo, setUserInfo] = useState<User>({
    name: '',
    roleName: '',
    password: '',
    email: '',
    surname: '',
    username: '',
    role: 0,
    isTeamLead: false,
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    switch (userInfo?.roleName) {
      case 'ДИЗАЙН':
        setUserInfo((prevUserInfo) => ({ ...prevUserInfo, role: 3 }));
        break;
      case 'МЕНЕДЖЕР':
        setUserInfo((prevUserInfo) => ({ ...prevUserInfo, role: 4 }));
        break;
      case 'ФРОНТЕНД':
        setUserInfo((prevUserInfo) => ({ ...prevUserInfo, role: 1 }));
        break;
      case 'БЭКЕНД':
        setUserInfo((prevUserInfo) => ({ ...prevUserInfo, role: 2 }));
        break;
      default:
        setUserInfo((prevUserInfo) => ({ ...prevUserInfo, role: 3 }));
        break;
    }
  }, [userInfo?.roleName]);

  const roleOptions = [
    { value: 'ДИЗАЙН', label: 'ДИЗАЙН' },
    { value: 'МЕНЕДЖЕР', label: 'МЕНЕДЖЕР' },
    { value: 'ФРОНТЕНД', label: 'ФРОНТЕНД' },
    { value: 'БЭКЕНД', label: 'БЭКЕНД' },
  ];

  const sendDataHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (
      userInfo.name === '' ||
      userInfo.roleName === '' ||
      userInfo.password === ''
    ) {
      return;
    }
    try {
      await dispatch(createUser(userInfo));
      alert('Данные отправлены. Спасибо!');
    } catch (e) {
      alert('Произошла ошибка. Попробуйте позже.');
    }
  };

  return (
    <Modal active={active} setActive={setActive}>
      <div>
        <h2 className={classes['form-title']}>Добавление пользователя</h2>
        <form onSubmit={sendDataHandler} className={classes['form']}>
          <div>
            <Input
              id="name"
              label={'Имя'}
              type={'text'}
              placeholder="Имя"
              name="name"
              value={userInfo?.name}
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  name: e.currentTarget.value,
                })
              }
            />
            <Input
              id="surname"
              label={'Фамилия'}
              type={'text'}
              placeholder="Фамилия"
              name="name"
              value={userInfo?.surname}
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  surname: e.currentTarget.value,
                })
              }
            />
            <Input
              id="username"
              label={'Никнейм'}
              type={'text'}
              placeholder="Никнейм"
              name="username"
              value={userInfo?.username}
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  username: e.currentTarget.value,
                })
              }
            />
            <Input
              id="email"
              label={'email'}
              type={'text'}
              placeholder="email"
              name="email"
              value={userInfo?.email}
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  email: e.currentTarget.value,
                })
              }
            />
            <Input
              id="password"
              label={'Пароль'}
              type={'password'}
              placeholder="Пароль"
              name="password"
              value={userInfo?.password}
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  password: e.currentTarget.value,
                })
              }
            />
            <Dropdown
              id="rolename"
              label={'Название должности'}
              options={roleOptions}
              value={userInfo?.roleName}
              onChange={(selectedOption) =>
                setUserInfo({
                  ...userInfo,
                  roleName: selectedOption.value,
                })
              }
            />
          </div>
          <Button
            style={{
              padding: 15,
              marginTop: 30,
              width: 250,
              alignSelf: 'center',
            }}
            text="Добавить пользователя"
            isAction
          />
        </form>
      </div>
    </Modal>
  );
};

export default ModalAddUser;
