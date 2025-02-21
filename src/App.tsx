import TextInput from './components/TextInput.tsx';
import React from 'react';

enum StateEnum {
  ENABLED = 'enabled',
  DISABLED = 'disabled'
}

enum VariantEnum {
  NEUTRAL = 'neutral',
  ERROR = 'error',
  WARNING = 'warning'
}

function App() {
  const [disabled, setDisabled] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [warningMessage, setWarningMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VariantEnum.NEUTRAL);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDisabled(event.target.value === StateEnum.DISABLED);
  };

  const handleVariantChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const variantValue = event.target.value;
    setVariant(variantValue as VariantEnum);
    setErrorMessage(variantValue === VariantEnum.ERROR ? 'errorMessage' : '');
    setWarningMessage(variantValue === VariantEnum.WARNING ? 'warningMessage' : '');
  };

  return (
    <>
      <div>
        <input
          type='radio'
          id='enabled'
          name='state'
          value={StateEnum.ENABLED}
          onChange={handleRadioChange}
          checked={!disabled}
        />
        <label htmlFor='enabled'>{StateEnum.ENABLED}</label>

        <input
          type='radio'
          id='disabled'
          name='state'
          value={StateEnum.DISABLED}
          onChange={handleRadioChange}
          checked={disabled}
        />
        <label htmlFor='disabled'>{StateEnum.DISABLED}</label>
      </div>

      <div>
        <input
          type='radio'
          id='neutral'
          name='variant'
          value={VariantEnum.NEUTRAL}
          onChange={handleVariantChange}
          checked={variant === VariantEnum.NEUTRAL}
        />
        <label htmlFor='neutral'>neutral</label>

        <input
          type='radio'
          id='error'
          name='variant'
          value={VariantEnum.ERROR}
          onChange={handleVariantChange}
          checked={variant === VariantEnum.ERROR}
        />
        <label htmlFor='error'>error</label>

        <input
          type='radio'
          id='warning'
          name='variant'
          value={VariantEnum.WARNING}
          onChange={handleVariantChange}
          checked={variant === VariantEnum.WARNING}
        />
        <label htmlFor='warning'>warning</label>
      </div>

      <div style={{ display: 'flex' }}>
        <TextInput
          value={value}
          label={'Input'}
          optional={'Optional'}
          name={'input'}
          onChange={(value) => {
            setValue(value);
          }}
          error={errorMessage}
          warning={warningMessage}
          placeholder={'Placeholder'}
          disabled={disabled}
        />
      </div>
    </>
  );
}

export default App;
