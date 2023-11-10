import React, { FormEvent, useState } from 'react';
import classes from '../../shared/ui/Modal/style.module.scss';
import Input from '../../shared/ui/Input';
import Button from '../../shared/ui/Button';
import Modal from '../../shared/ui/Modal';
import { UserRequest, createUserRequest } from 'entities/UserRequests';
import { useAppDispatch } from 'shared/store';

interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalJoin = ({ active, setActive }: Props) => {
  const [requestInfo, setRequestInfo] = useState<UserRequest>({
    fullName: '',
    groupNumber: '',
    telegram: '',
    expirience: '',
    technologies: '',
    isFrontend: false,
    isBackend: false,
    isDesign: false,
    isManagment: false,
    isDevOps: false,
    isMarketing: false,
    portfolioLink: '',
  });
  const dispatch = useAppDispatch();

  const sendRequestHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (requestInfo.fullName === '' || requestInfo.telegram === '') {
      return;
    }
    try {
      await dispatch(createUserRequest(requestInfo));
      alert('Данные отправлены. Спасибо!');
    } catch (e) {
      alert('Произошла ошибка. Попробуйте позже.');
    }
  };

  return (
    <Modal active={active} setActive={setActive}>
      <div>
        <h2 className={classes['form-title']}>
          Заявка на присоединение в команду
        </h2>
        <form onSubmit={sendRequestHandler} className={classes['form']}>
          <Input
            id="name"
            label={'ФИО'}
            type={'text'}
            placeholder="ФИО"
            name="name"
            value={requestInfo?.fullName}
            onChange={(e) =>
              setRequestInfo({
                ...requestInfo,
                fullName: e.currentTarget.value,
              })
            }
          />
          <Input
            id="state"
            label={
              'Обучаешься ли ты в Московском Политехе? Если да, укажи номер группы'
            }
            type={'text'}
            placeholder="201-72X"
            name="state"
            value={requestInfo?.groupNumber}
            onChange={(e) =>
              setRequestInfo({
                ...requestInfo,
                groupNumber: e.currentTarget.value,
              })
            }
          />
          <Input
            id="tg"
            label={'Telegram'}
            type={'text'}
            placeholder="@example (telegram)"
            name="tg"
            value={requestInfo?.telegram}
            onChange={(e) =>
              setRequestInfo({
                ...requestInfo,
                telegram: e.currentTarget.value,
              })
            }
          />
          <Input
            id="exp"
            label={
              'Расскажи о своем опыте веб-разработки, участия в хакатонах, других проектах - все, что посчитаешь нужным'
            }
            type={'text'}
            placeholder="В качестве курсовой работы в прошлом семестре я делал веб-сайт... с использованием технологий..."
            name="exp"
            isMultiline
            value={requestInfo?.expirience}
            onChange={(e) =>
              setRequestInfo({
                ...requestInfo,
                expirience: e.currentTarget.value,
              })
            }
          />
          <Input
            id="technologies"
            label={
              'Опиши свой предпочитаемый стек технологий (стек, который уже использовал в работе или который готов изучать в течение семестра параллельно с интенсивной работой над проектом)'
            }
            type={'text'}
            placeholder="React"
            name="technologies"
            value={requestInfo?.technologies}
            onChange={(e) =>
              setRequestInfo({
                ...requestInfo,
                technologies: e.currentTarget.value,
              })
            }
          />
          <div className={classes['role-checkbox']}>
            <p
              className={classes['checkbox-title']}
              style={{ marginTop: 33, marginBottom: 10 }}
            >
              Какую роль готов на себя взять?
            </p>
            <Input
              type={'checkbox'}
              id="frontend"
              name="frontend"
              value={'Frontend-разработка'}
              onClick={() =>
                setRequestInfo({
                  ...requestInfo,
                  isFrontend: !requestInfo.isFrontend,
                })
              }
            />
            <Input
              type={'checkbox'}
              id="backend"
              name="backend"
              value={'Backend-разработка'}
              onClick={() =>
                setRequestInfo({
                  ...requestInfo,
                  isBackend: !requestInfo.isBackend,
                })
              }
            />
            <Input
              type={'checkbox'}
              id="design"
              name="design"
              value={'Дизайн'}
              onClick={() =>
                setRequestInfo({
                  ...requestInfo,
                  isDesign: !requestInfo.isDesign,
                })
              }
            />
            <Input
              type={'checkbox'}
              id="manager"
              name="manager"
              value={'Менеджмент'}
              onClick={() =>
                setRequestInfo({
                  ...requestInfo,
                  isManagment: !requestInfo.isManagment,
                })
              }
            />
            <Input
              type={'checkbox'}
              id="devops"
              name="devops"
              value={'DevOps'}
              onClick={() =>
                setRequestInfo({
                  ...requestInfo,
                  isDevOps: !requestInfo.isDevOps,
                })
              }
            />
            <Input
              type={'checkbox'}
              id="marketing"
              name="marketing"
              value={'Маркетинг'}
              onClick={() =>
                setRequestInfo({
                  ...requestInfo,
                  isMarketing: !requestInfo.isMarketing,
                })
              }
            />
          </div>
          <Input
            id="github"
            label={
              'Ссылка на GitHub / любой другой сервис с твоим портфолио (если нет, написать "нет" в поле для ответа)'
            }
            type={'url'}
            placeholder="https://github.com/"
            name="github"
            value={requestInfo?.portfolioLink}
            onChange={(e) =>
              setRequestInfo({
                ...requestInfo,
                portfolioLink: e.currentTarget.value,
              })
            }
          />
          {/*<div className={classes['marketing-radio']}>*/}
          {/*  <p*/}
          {/*    className={classes['checkbox-title']}*/}
          {/*    style={{ marginTop: 33, marginBottom: 10 }}*/}
          {/*  >*/}
          {/*    Готов ли заниматься маркетингом помимо основных обязанностей?*/}
          {/*  </p>*/}
          {/*  <Input type="radio" id="ratio_1" name="pos" value="Да" />*/}
          {/*</div>*/}
          <Button
            style={{
              padding: 15,
              marginTop: 30,
              width: 250,
              alignSelf: 'center',
            }}
            text="Отправить заявку"
            isAction
          />
        </form>
      </div>
    </Modal>
  );
};

export default ModalJoin;
