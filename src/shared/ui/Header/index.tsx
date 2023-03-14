import React from 'react';
import classes from './style.module.scss';
import Button from '../Button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={`${classes['header']} container`}>
      <Link to="/" className={classes['logo']}>
        AW
      </Link>
      <ul className={classes['menu']}>
        <li>Проекты</li>
        <li>О студии</li>
        <li>Контакты</li>
      </ul>
      <Button
        style={{ position: 'absolute', right: '0px' }}
        text={'Заполнить бриф'}
      />
    </div>
  );
};

export default Header;
