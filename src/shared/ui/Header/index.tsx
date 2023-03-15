import classes from './style.module.scss';
import Button from 'shared/ui/Button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={`${classes['header']} container`}>
      <Link to="/" className={classes['logo']}>
        AW
      </Link>
      <ul className={classes['menu']}>
        <li>
          <Link to="/projects">Проекты</Link>
        </li>
        <li>
          <Link to="/about">О студии</Link>
        </li>
        <li>
          <Link to="/about">Контакты</Link>
        </li>
      </ul>
      <Button
        style={{ position: 'absolute', right: '0px' }}
        text={'Заполнить бриф'}
      />
    </div>
  );
};

export default Header;
