import { FC } from 'react';
import { InputSize } from '../constants.ts';

interface TextInputProps {
  value: string;
  label: string;
  name: string;
  onChange: (value: string) => void;
  size?: InputSize;
  error?: string;
  warning?: string;
  placeholder?: string;
  disabled?: boolean;
  optional?: string;
}

const TextInput: FC<TextInputProps> = ({
  value,
  label,
  name,
  onChange,
  size,
  error,
  warning,
  placeholder,
  disabled,
  optional
}) => {
  const labelClassName = disabled ? 'disabled' : error ? 'error' : warning ? 'warning' : '';

  return (
    <div className={'textInputGroup'}>
      <div className={'labelGroup'}>
        <label htmlFor={name} className={`label size-m ${labelClassName}`}>
          {label}
        </label>
        <div className={`label ${labelClassName}`}>{optional}</div>
      </div>
      <input
        name={name}
        className={`textInput size-${size} ${labelClassName}`}
        type='text'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
      />
      {error || warning ? <div className={`label ${labelClassName}`}>{error ? error : warning}</div> : null}
    </div>
  );
};

export default TextInput;
