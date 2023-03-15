import Button from 'shared/ui/Button';
import classes from './style.module.scss';

interface Props {
  userName: string;
  role: 'ФРОНТЕНД' | 'ТИМ-ЛИД' | 'ДИЗАЙН' | 'МЕНЕДЖЕР' | 'БЭКЕНД';
}

const UserLine = ({ userName, role }: Props) => {
  let roleColor = 'rgba(177, 213, 255, 1)';

  switch (role) {
    case 'ДИЗАЙН':
      roleColor = 'rgba(177, 213, 255, 1)';
      break;
    case 'МЕНЕДЖЕР':
      roleColor = 'rgba(200, 138, 249, 1)';
      break;
    case 'ТИМ-ЛИД':
      roleColor = 'rgba(200, 138, 249, 1)';
      break;
    case 'ФРОНТЕНД':
      roleColor = 'rgba(177, 213, 255, 1)';
      break;
    case 'БЭКЕНД':
      roleColor = 'rgba(177, 213, 255, 1)';
      break;
  }

  return (
    <div className={classes['user-container']}>
      <p className={classes['username']}>{userName}</p>
      <div className={classes['btns']}>
        <p style={{ color: roleColor }} className={classes['role']}>
          {role}
        </p>
        <Button style={{ padding: '12px 74px' }} text={'Удалить'} />
      </div>
    </div>
  );
};

export default UserLine;
