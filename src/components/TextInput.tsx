import { FC } from 'react';

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  disabled?: boolean;
}

const TextInput: FC<TextInputProps> = ({ value, onChange, error, placeholder, disabled }) => {
  console.log(error);
  return (
    <>
      <input
        className={'textInput'}
        type='text'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
      />
      <div className='errorMsg'>{error}</div>
    </>
  );
};

export default TextInput;
