import { Button } from 'shared/ui';
import classes from './style.module.scss';
import { UserLine } from 'entities/User';

const EditUsers = () => {
  const users: {
    userName: string;
    role: 'ФРОНТЕНД' | 'ТИМ-ЛИД' | 'ДИЗАЙН' | 'МЕНЕДЖЕР' | 'БЭКЕНД';
  }[] = [
    {
      userName: 'Денис Камчатов',
      role: 'ФРОНТЕНД',
    },
    {
      userName: 'Яблонская Софья',
      role: 'ФРОНТЕНД',
    },
    {
      userName: 'Хусаинов Ренат',
      role: 'ТИМ-ЛИД',
    },
    {
      userName: 'Попереков Василий',
      role: 'БЭКЕНД',
    },
    {
      userName: 'Груба Алёна',
      role: 'ФРОНТЕНД',
    },
    {
      userName: 'Слемнёв Владислав',
      role: 'МЕНЕДЖЕР',
    },
  ];

  return (
    <main className={classes['admin-projects-container']}>
      <Button
        isAction
        text={'Добавить участника'}
        style={{ marginBottom: 62 }}
      />

      <div>
        {users.map((user, index) => (
          <UserLine key={index} userName={user.userName} role={user.role} />
        ))}
      </div>
    </main>
  );
};
export default EditUsers;
