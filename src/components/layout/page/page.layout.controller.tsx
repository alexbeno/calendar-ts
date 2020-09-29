import * as React from 'react';
import { MainContainer, ContentContainer } from './page.layout.style';

interface Props {
  style?: object;
  className?: string;
  children?: React.ReactElement;
  active?: string;
}

const LayoutPage: React.FC<Props> = ({ className, style, children }) => (
  <MainContainer style={style} className={className}>
    <ContentContainer>{children}</ContentContainer>
  </MainContainer>
);

export default LayoutPage;
