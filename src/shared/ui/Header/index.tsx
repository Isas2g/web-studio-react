import classes from './style.module.scss';
import Button from 'shared/ui/Button';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const menu = [
    {
      text: 'Проекты',
      link: '/projects',
    },
    {
      text: 'О студии',
      link: '/about',
    },
    {
      text: 'Контакты',
      link: 'https://vk.com/aboutweb',
    },
  ];

  const [isActiveMenu, setActiveMenu] = useState(false);

  const changeMenuStatus = (status: boolean) => {
    setActiveMenu(status);
  };

  const location = useLocation();

  return (
    <header className={`${classes['header__wrapper']} container`}>
      <div className={`${classes['header']}`}>
        <Link to="/" className={classes['logo']}>
          AW
        </Link>
        <ul className={classes['menu']}>
          {menu.map((item) => {
            return (
              <li key={item.text}>
                {location.pathname === item.link ? (
                  <Link to={item.link} style={{ fontWeight: 'bold' }}>
                    {item.text}
                  </Link>
                ) : (
                  <Link to={item.link}>{item.text}</Link>
                )}
              </li>
            );
          })}
        </ul>
        <div className={classes['link-style']}>
          <Link
            to={'https://forms.gle/Bu5C4LxvTiaNn6wUA'}
            className={classes['lnk']}
          >
            <Button
              style={{ position: 'absolute', right: '0px', top: '20px' }}
              text={'Обсудить проект'}
            />
          </Link>
        </div>
      </div>
      <div className={classes['header-mob']}>
        <div className={classes['header-mob__logo']}>
          <Link to="/">
            <svg
              width="53"
              height="23"
              viewBox="0 0 53 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.688 18.68L5.056 23H0L8.768 0.344H14.016L22.656 23H17.568L16 18.68H6.688ZM8.032 14.584H14.624L11.36 5.24L8.032 14.584ZM27.5435 23L21.7835 0.344H27.0635L30.7755 17.72L34.2635 0.344H40.5035L43.8955 17.72L47.3835 0.344H52.3755L46.9995 23H40.8555L37.3035 5.336L33.7835 23H27.5435Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
        <div className={classes['header-mob__button']}>
          {!isActiveMenu ? (
            <svg
              onClick={() => changeMenuStatus(true)}
              className={classes['header-mob__open-button']}
              width="18"
              height="13"
              viewBox="0 0 18 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 12.5C0.71667 12.5 0.479003 12.404 0.287003 12.212C0.0950034 12.02 -0.000663206 11.7827 3.46021e-06 11.5C3.46021e-06 11.2167 0.0960036 10.979 0.288004 10.787C0.480004 10.595 0.717337 10.4993 1 10.5H17C17.2833 10.5 17.521 10.596 17.713 10.788C17.905 10.98 18.0007 11.2173 18 11.5C18 11.7833 17.904 12.021 17.712 12.213C17.52 12.405 17.2827 12.5007 17 12.5H1ZM1 7.5C0.71667 7.5 0.479003 7.404 0.287003 7.212C0.0950034 7.02 -0.000663206 6.78267 3.46021e-06 6.5C3.46021e-06 6.21667 0.0960036 5.979 0.288004 5.787C0.480004 5.595 0.717337 5.49934 1 5.5H17C17.2833 5.5 17.521 5.596 17.713 5.788C17.905 5.98 18.0007 6.21734 18 6.5C18 6.78334 17.904 7.021 17.712 7.213C17.52 7.405 17.2827 7.50067 17 7.5H1ZM1 2.5C0.71667 2.5 0.479003 2.404 0.287003 2.212C0.0950034 2.02 -0.000663206 1.78267 3.46021e-06 1.5C3.46021e-06 1.21667 0.0960036 0.979004 0.288004 0.787004C0.480004 0.595004 0.717337 0.499337 1 0.500003H17C17.2833 0.500003 17.521 0.596004 17.713 0.788004C17.905 0.980004 18.0007 1.21734 18 1.5C18 1.78334 17.904 2.021 17.712 2.213C17.52 2.405 17.2827 2.50067 17 2.5H1Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              onClick={() => changeMenuStatus(false)}
              className={classes['header-mob__close-button']}
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.68652 13.1569L13.0002 1.84315"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M1.68652 1.84314L13.0002 13.1568"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </div>

        <ul
          className={`${classes['header-mob__menu']} ${
            isActiveMenu && classes['header-mob__menu--active']
          }`}
        >
          {menu.map((item) => {
            return (
              <li key={item.text}>
                <Link to={item.link}>{item.text}</Link>
              </li>
            );
          })}

          <Button
            style={{ alignSelf: 'center', margin: '40px 0 0 -7%' }}
            text={'Заполнить бриф'}
          />
        </ul>
      </div>
    </header>
  );
};

export default Header;
