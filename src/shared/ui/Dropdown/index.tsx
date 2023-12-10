import React, { ChangeEvent } from 'react';
import classes from './style.module.scss';

interface Option {
  value: string | undefined;
  label: string;
}

interface DropdownProps {
  id: string;
  label: string;
  options: Option[];
  value: string | undefined;
  onChange: (selectedOption: Option) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  id,
  label,
  options,
  value,
  onChange,
}) => {
  return (
    <div className={classes['dropdown-wrapper']}>
      <label className={classes['dropdown-label']} htmlFor={id}>
        {label}
      </label>
      <div className={classes['dropdown-gradient']}>
        <select
          id={id}
          value={value}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            const selectedOption = options.find(
              (option) => option.value === e.target.value
            ) || { value: '', label: '' };
            onChange(selectedOption);
          }}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
