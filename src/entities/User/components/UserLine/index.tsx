import { Button } from 'shared/ui';
import classes from './style.module.scss';
import { deleteUser } from '../../store';
import { useAppDispatch } from '../../../../shared/store';

interface Props {
  userName: string;
  role: 'ФРОНТЕНД' | 'ДИЗАЙН' | 'МЕНЕДЖЕР' | 'БЭКЕНД' | string | any;
  id: number | undefined;
}

const UserLine = ({ userName, role, id }: Props) => {
  let roleColor = 'rgba(177, 213, 255, 1)';

  switch (role) {
    case 'ДИЗАЙН':
      roleColor = 'rgba(177, 213, 255, 1)';
      break;
    case 'МЕНЕДЖЕР':
      roleColor = 'rgba(200, 138, 249, 1)';
      break;
    case 'ФРОНТЕНД':
      roleColor = 'rgba(177, 213, 255, 1)';
      break;
    case 'БЭКЕНД':
      roleColor = 'rgba(177, 213, 255, 1)';
      break;
    default:
      roleColor = 'rgba(177, 213, 255, 1)';
      break;
  }

  const dispatch = useAppDispatch();

  const sendDataHandler = async (userId: number | undefined) => {
    try {
      console.log(userId);
      await dispatch(deleteUser(userId));
      alert('Пользователь был успешно удален');
    } catch (e) {
      alert('Произошла ошибка. Попробуйте позже.');
    }
  };

  return (
    <div className={classes['user-container']}>
      <p className={classes['username']}>{userName}</p>
      <div className={classes['btns']}>
        <p style={{ color: roleColor }} className={classes['role']}>
          {role}
        </p>
        <Button
          style={{ padding: '12px 74px' }}
          text={'Удалить'}
          onClick={() => sendDataHandler(id)}
        />
      </div>
    </div>
  );
};

export default UserLine;
