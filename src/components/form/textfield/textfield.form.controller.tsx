import * as React from 'react';
import { TextField, Wrapper, Error } from './textfield.form.style';

interface Props {
  style?: object;
  className?: string;
  placeholder?: string;
  value?: string;
  error?: boolean;
  label?: string;
  type?: string;
  errorMessage?: string;
  change?: (value: string) => void;
  icon?: string;
  errorBottom?: boolean;
  require?: boolean;
}

const FormTextfield: React.FC<Props> = ({
  className,
  style,
  placeholder,
  value,
  error,
  change,
  type,
  errorMessage,
  errorBottom,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (change) {
      change(e.currentTarget.value);
    }
  };

  const renderInput = (): React.ReactElement => (
    <React.Fragment>
      <Wrapper>
        <TextField
          style={style}
          className={className}
          value={value}
          placeholder={placeholder}
          error={error}
          onChange={handleChange}
          type={type || 'text'}
        />
        {error && !errorBottom ? <Error>{errorMessage || 'Error'}</Error> : null}
      </Wrapper>
      {error && errorBottom ? <Error errorBottom={errorBottom}>{errorMessage || 'Error'}</Error> : null}
    </React.Fragment>
  );

  return <React.Fragment>{renderInput()}</React.Fragment>;
};

export default FormTextfield;
