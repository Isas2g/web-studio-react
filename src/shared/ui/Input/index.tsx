import React, { ChangeEvent, ChangeEventHandler, EventHandler, HTMLInputTypeAttribute, useRef } from 'react';
import classes from './style.module.scss';

interface Props {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  style?: React.CSSProperties;
  id: string;
  label?: string;
  value?: string;
  isMultiline?: boolean;
  name: string;
  defaultValue?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Input = (props: Props) => {
  const {id, label, isMultiline, ...inputProps} = props
  const InputType = (isMultiline) ? 'textarea' : 'input';

  return (
    <div className={classes['input-container']}>
      <label className={classes['input-label']} htmlFor={id}>
        {label}
      </label>
        <div className={classes['input-gradient']}>
          <InputType {...inputProps}></InputType>
        </div>
    </div>
  );
};

export default Input;
