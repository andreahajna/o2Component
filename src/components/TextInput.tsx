import { FC } from 'react';

interface TextInputProps {
  value: string;
  label: string;
  name: string;
  onChange: (value: string) => void;
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
  error,
  warning,
  placeholder,
  disabled,
  optional
}) => {
  const labelClassName = disabled ? 'disabled' : error ? 'error' : warning ? 'warning' : '';

  return (
    <div className='textInputGroup'>
      <div className='labelGroup'>
        <label htmlFor={name} className={`label ${labelClassName}`}>
          {label}
        </label>
        <div className={`label optional ${labelClassName}`}>{optional}</div>
      </div>
      <input
        name={name}
        className={`textInput ${labelClassName}`}
        type='text'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
      />
      {error || warning ? <div className={`message  ${labelClassName}`}>{error ? error : warning}</div> : null}
    </div>
  );
};

export default TextInput;
