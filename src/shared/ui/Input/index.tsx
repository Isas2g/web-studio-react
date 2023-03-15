import React, { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';
import classes from './style.module.scss';

interface Props {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  id: string;
  label?: string;
  isMultiline?: boolean;
  name: string;
}

const Input = ({
  type,
  placeholder,
  onChange,
  style,
  containerStyle,
  id,
  label,
  name,
  isMultiline,
}: Props) => {
  return (
    <div style={containerStyle} className={classes['input-container']}>
      <label className={classes['label']} htmlFor={id}>
        {label}
      </label>
      <span
        className={classes['input']}
        style={isMultiline ? { borderRadius: 50 } : {}}
      >
        {isMultiline ? (
          <textarea
            id={id}
            onChange={onChange}
            style={style}
            placeholder={placeholder}
            name={name}
          ></textarea>
        ) : (
          <input
            id={id}
            onChange={onChange}
            style={style}
            type={type}
            placeholder={placeholder}
            name={name}
          />
        )}
      </span>
    </div>
  );
};

export default Input;
