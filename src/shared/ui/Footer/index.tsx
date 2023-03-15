import React from 'react';
import classes from './style.module.scss';
import { Link } from 'react-router-dom';
import Social from './components/Social';

const Footer = () => {
  return (
    <div className={`${classes['footer-container']} container`}>
      <div className={classes['line']}></div>
      <div className={classes['first-block']}>
        <p className={classes['text']}>
          Остались вопросы или предложения? Напишите нам в любое время!
        </p>
        <p className={classes['text-bold']}>aboutweb@gmail.com</p>
        <Social>Telegram</Social>
        <Social>VK</Social>
      </div>
      <div className={classes['second-block']}>
        <ul className={classes['list']}>
          <li>Проекты</li>
          <li>История</li>
          <li>О студии</li>
        </ul>
      </div>
      <div className={classes['second-block']}>
        <ul className={classes['list']}>
          <li>Контакты</li>
          <li>Хочу в команду</li>
          <li>Авторизация</li>
        </ul>
      </div>
      <Link to="/" className={classes['logo']}>
        AW
      </Link>
    </div>
  );
};

export default Footer;
