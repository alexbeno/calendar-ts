import styled from 'styled-components';

interface ContainerProps {
  className?: string;
}

export const Form = styled('form')<ContainerProps>`
  width: 100%;
`;
