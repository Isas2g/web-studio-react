import React, {
  ChangeEvent,
  HTMLInputTypeAttribute,
  useState,
} from 'react';
import classes from './style.module.scss';

interface Props {
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  style?: React.CSSProperties;
  id: string;
  label?: string;
  value?: string;
  checked?: boolean;
  isMultiline?: boolean;
  name: string;
  defaultValue?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onClick?: () => void;
}

const Input = (props: Props) => {
  const { id, label, checked, value, isMultiline, ...inputProps } = props;
  const InputType = isMultiline ? 'textarea' : 'input';

  const [isChecked, setIsChecked] = useState(checked);

  return (
    <div className={classes['input-container']}>
      {props.type === 'checkbox' ? (
        <div className={classes['checkbox-container']}>
          <label className={classes['checkbox-label']} htmlFor={id}>
            <InputType
              {...inputProps}
              className={classes['check']}
              checked={isChecked}
            ></InputType>
            <span
              className={classes['check-designed']}
              role="presentation"
              onClick={() => {
                setIsChecked(!isChecked);
                if (props.onClick) props.onClick();
              }}
            ></span>
            {value}
          </label>
        </div>
      ) : (
        <div>
          <label className={classes['input-label']} htmlFor={id}>
            {label}
          </label>
          <div className={classes['input-gradient']}>
            <InputType {...inputProps}></InputType>
          </div>
        </div>
      )}
    </div>
  );
};

export default Input;
