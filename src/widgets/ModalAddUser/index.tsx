import React, { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../shared/store';
import { createUser, User } from '../../entities/User';
import Modal from '../../shared/ui/Modal';
import classes from '../../shared/ui/Modal/style.module.scss';
import Input from '../../shared/ui/Input';
import Button from '../../shared/ui/Button';

interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalAddUser = ({ active, setActive }: Props) => {
  const [userInfo, setUserInfo] = useState<User>({
    name: '',
    role: 0,
  });
  const dispatch = useAppDispatch();

  const sendDataHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (userInfo.name === '' || userInfo.role === 0) {
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
        <h2 className={classes['form-title']}>Заявка на создание проекта</h2>
        <form onSubmit={sendDataHandler} className={classes['form']}>
          <div>
            <Input
              id="name"
              label={'ФИО'}
              type={'text'}
              placeholder="ФИО"
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
              id="rolename"
              label={'Название должности'}
              type={'text'}
              placeholder="ФРОНТЭНД"
              name="rolename"
              value={userInfo?.roleName}
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  roleName: e.currentTarget.value,
                })
              }
            />
            <Input
              id="role"
              label={'ID роли'}
              type={'text'}
              placeholder="1"
              name="role"
              value={String(userInfo?.role)}
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  role: Number(e.currentTarget.value),
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
            text="Отправить заявку"
            isAction
          />
        </form>
      </div>
    </Modal>
  );
};

export default ModalAddUser;
