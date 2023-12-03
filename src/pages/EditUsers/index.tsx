import { Button } from 'shared/ui';
import classes from './style.module.scss';
import { fetchAPIUsers, UserLine } from 'entities/User';
import { useAppDispatch, useAppSelector } from '../../shared/store';
import React, { useEffect, useState } from 'react';
import ModalAddUser from '../../widgets/ModalAddUser';

const EditUsers = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAPIUsers());
  }, [dispatch]);

  const [activeAddModal, setActiveAddModal] = useState(false);

  // const users: {
  //   userName: string;
  //   role: 'ФРОНТЕНД' | 'ТИМ-ЛИД' | 'ДИЗАЙН' | 'МЕНЕДЖЕР' | 'БЭКЕНД';
  // }[] = [
  //   {
  //     userName: 'Денис Камчатов',
  //     role: 'ФРОНТЕНД',
  //   },
  //   {
  //     userName: 'Яблонская Софья',
  //     role: 'ФРОНТЕНД',
  //   },
  //   {
  //     userName: 'Хусаинов Ренат',
  //     role: 'ТИМ-ЛИД',
  //   },
  //   {
  //     userName: 'Попереков Василий',
  //     role: 'БЭКЕНД',
  //   },
  //   {
  //     userName: 'Груба Алёна',
  //     role: 'ФРОНТЕНД',
  //   },
  //   {
  //     userName: 'Слемнёв Владислав',
  //     role: 'МЕНЕДЖЕР',
  //   },
  // ];

  const users = useAppSelector((state) => state.users.value) || [];

  console.log(users);

  return (
    <main className={classes['admin-projects-container']}>
      <Button
        isAction
        text={'Добавить участника'}
        style={{ marginBottom: 62 }}
        onClick={() => {
          setActiveAddModal(true);
        }}
      />

      <div>
        {users.map((user, index) => (
          // <UserLine key={index} userName={user.userName} role={user.role} />
          <UserLine key={index} userName={user.name} role={user.roleName} />
        ))}
      </div>

      <ModalAddUser active={activeAddModal} setActive={setActiveAddModal} />
    </main>
  );
};
export default EditUsers;
