import { FC } from 'react';
import styles from './TextInput.module.scss';
import classNames from 'classnames';

interface TextInputProps {
  id: string;
  value: string;
  label: string;
  name: string;
  onChange: (value: string) => void;
  required?: boolean;
  variant?: 'error' | 'warning';
  helperText?: string;
  error?: string;
  warning?: string;
  placeholder?: string;
  disabled?: boolean;
  optional?: string;
}

const TextInput: FC<TextInputProps> = ({
  id,
  value,
  label,
  name,
  onChange,
  required,
  error,
  warning,
  placeholder,
  disabled,
  optional
}) => {
  const variant = disabled ? 'disabled' : error ? 'error' : warning ? 'warning' : '';

  return (
    <div className={styles.textInputGroup}>
      <div className={styles.labelGroup}>
        <label htmlFor={id} className={classNames(styles.label, styles[variant])}>
          {label}
        </label>
        {!required ? (
          <span className={classNames(styles.label, styles.optional, styles[variant])}>{optional}</span>
        ) : null}
      </div>
      <input
        id={id}
        name={name}
        className={classNames(styles.textInput, styles[variant])}
        type='text'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
      />
      {error || warning ? (
        <span className={classNames(styles.message, styles[variant])}>{error ? error : warning}</span>
      ) : null}
    </div>
  );
};

export default TextInput;
