import * as React from 'react';
import GridSeparator from 'components/grid/separator/separator.grid.controller';
import { Container, Wrapper, Close, Title } from './popup.layout.style';

interface Props {
  title: string;
  active?: boolean;
  children: React.ReactElement | Array<React.ReactElement>;
  closeEvent: () => void;
}

const LayoutPopup: React.FC<Props> = ({ active, children, title, closeEvent }) => (
  <Container active={active}>
    <Wrapper active={active}>
      <Title>{title}</Title>
      <GridSeparator sm="24" />
      {children}
    </Wrapper>
    <Close active={active} onClick={closeEvent} />
  </Container>
);

export default LayoutPopup;
