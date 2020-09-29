import * as React from 'react';
import { SelectObject } from 'data/constant/select.constant';
import { Container, Title, Wrapper, Item } from './select.form.style';

interface Props {
  result: string;
  value: SelectObject[];
  select: (slug: string) => void;
}

const FormSelect: React.FC<Props> = ({ result, value, select }) => {
  const [show, setShow] = React.useState(false);

  const handleSelect = (slug: string) => {
    select(slug);
    setShow(false);
  };

  const renderOption = () => {
    return value.map(item => <Item onClick={() => handleSelect(item.value)}>{item.value}</Item>);
  };

  const handleOpen = () => {
    setShow(true);
  };

  return (
    <Container>
      <Title onClick={handleOpen}>{result || 'Select an ID'}</Title>
      <Wrapper show={show}>{renderOption()}</Wrapper>
    </Container>
  );
};

export default FormSelect;
