import * as React from 'react';
import { Form } from './form.form.style';

interface Props {
  style?: object;
  className?: string;
  prevent?: boolean;
  children: React.ReactElement | Array<React.ReactElement | false>;
  submit?: (e: React.FormEvent<EventTarget>) => void;
}

const FormForm: React.FC<Props> = ({ className, style, submit, children, prevent }) => {
  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    if (prevent) {
      e.preventDefault();
    }
    if (submit) {
      submit(e);
    }
  };
  return (
    <Form style={style} className={className} onSubmit={handleSubmit}>
      {children}
    </Form>
  );
};

export default FormForm;
