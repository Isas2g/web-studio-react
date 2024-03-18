import classes from './style.module.scss';

import { Input } from '../index';

import { Button } from 'shared/ui/index';
import { FC, useEffect, useState } from 'react';
import { getCategories, Project } from 'entities/Project';
import { useAppDispatch, useAppSelector } from 'shared/store';
import { uploadProjectFiles } from 'entities/Project/store';

interface FormProps {
  handler: (project: Project) => void;
}

const Form: FC<FormProps> = ({ handler }) => {
  const [selectInputState, setSelectInputState] = useState(false);
  const [newProject, setNewProject] = useState<Project | any>({});
  const [filesList, setFiles] = useState<File[]>([]);
  const categories = useAppSelector((state) => state.projects.categories);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const handleFile = () => {
    return;
  };

  return (
    <form className={classes['form']}>
      <div className={classes['select']}>
        <button
          type="button"
          className={classes['select__input']}
          onClick={() => setSelectInputState(!selectInputState)}
        >
          <p className={classes['select__text']}>Категория проекта</p>
          <svg
            width="26"
            height="20"
            viewBox="0 0 26 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.6137 17.868L0.670956 4.81813C-0.833617 2.84338 0.574634 0 3.05725 0H22.9428C25.4254 0 26.8336 2.84338 25.329 4.81813L15.3863 17.868C14.1857 19.4438 11.8143 19.4438 10.6137 17.868Z"
              fill="url(#paint0_linear_1183_1853)"
              fillOpacity="0.4"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1183_1853"
                x1="-20.4118"
                y1="-54.9792"
                x2="78.3315"
                y2="-36.5326"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C88AF9" />
                <stop offset="1" stopColor="#B1FFF1" />
              </linearGradient>
            </defs>
          </svg>
        </button>
        {selectInputState && (
          <ul className={classes['select__list']}>
            {categories ? (
              categories.map((item, index) => {
                return (
                  <li key={index} className={classes['select__item']}>
                    item.name
                  </li>
                );
              })
            ) : (
              <p className={classes['select__item-disabled']}>
                Категорий еще не было добавлено
              </p>
            )}
          </ul>
        )}
      </div>
      <div className={classes['inputs']}>
        <Input placeholder="Название проекта" style={{ marginTop: '100px' }} />
        <Input placeholder="Программный стек" style={{ marginTop: '40px' }} />
        <Input placeholder="Цель" style={{ marginTop: '40px' }} />
        <Input placeholder="Описание цели" style={{ marginTop: '40px' }} />
        <Input
          placeholder="Задача 1"
          style={{ display: 'none', marginTop: '40px' }}
        />
        <Input
          placeholder="Описание задачи 1"
          style={{ display: 'none', marginTop: '40px' }}
        />
        <Input
          placeholder="Задача 2"
          style={{ display: 'none', marginTop: '40px' }}
        />
        <Input
          placeholder="Описание задачи 2"
          style={{ display: 'none', marginTop: '40px' }}
        />
      </div>

      <div
        className={classes['buttons']}
        style={{ display: 'none', marginTop: 90 }}
      >
        <Button
          style={{ width: '100%', whiteSpace: 'nowrap' }}
          text="Новая задача"
          isAction={true}
        />
        <Button
          style={{ width: '100%', whiteSpace: 'nowrap' }}
          text="Дополнительная информация"
          isAction={true}
        />
      </div>
      <Button style={{ width: '100%', marginTop: 80 }} text="Сохранить" />
    </form>
  );
};

export default Form;
