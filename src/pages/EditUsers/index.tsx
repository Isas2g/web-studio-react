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
  const users = useAppSelector((state) => state.users.value) || [];


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

          <UserLine
            key={index}
            id={user.id}
            userName={user.name}
            role={user.roleName}
          />
        ))}
      </div>

      <ModalAddUser active={activeAddModal} setActive={setActiveAddModal} />
    </main>
  );
};
export default EditUsers;
