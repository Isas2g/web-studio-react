import React, { FormEvent, useState } from 'react';
import classes from 'shared/ui/Modal/style.module.scss';
import Input from 'shared/ui/Input';
import Button from 'shared/ui/Button';
import Modal from 'shared/ui/Modal';
import { useAppDispatch } from 'shared/store';
import { ProjectRequest, createProjectRequest } from 'entities/UserRequests';

interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalCommission = ({ active, setActive }: Props) => {
  const [requestInfo, setRequestInfo] = useState<ProjectRequest>({
    fullName: '',
    contact: '',
  });
  const dispatch = useAppDispatch();

  const sendRequestHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (requestInfo.fullName === '' || requestInfo.contact === '') {
      return;
    }
    try {
      await dispatch(createProjectRequest(requestInfo));
      alert('Данные отправлены. Спасибо!');
    } catch (e) {
      alert('Произошла ошибка. Попробуйте позже.');
    }
  };

  return (
    <Modal active={active} setActive={setActive}>
      <div>
        <h2 className={classes['form-title']}>Заявка на создание проекта</h2>
        <form onSubmit={sendRequestHandler} className={classes['form']}>
          <div>
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
              id="contacts"
              label={'Контактные данные (Любой предпочительный способ связи)'}
              type={'text'}
              placeholder="+79xxxxxxxxx / @example (telegram) / example@example.com"
              name="contacts"
              value={requestInfo?.contact}
              onChange={(e) =>
                setRequestInfo({
                  ...requestInfo,
                  contact: e.currentTarget.value,
                })
              }
            />
          </div>
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

export default ModalCommission;
