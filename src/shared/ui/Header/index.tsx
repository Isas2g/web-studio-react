import React from 'react';
import './style.scss';
import Button from '../Button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header container">
      <Link to="/" className="logo">
        AW
      </Link>
      <ul className="menu">
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
