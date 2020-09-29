import styled from 'styled-components';
import theme from 'theme';

interface ContainerProps {
  className?: string;
  error?: boolean;
}

interface ErrorLabel {
  errorBottom?: boolean;
}

export const Wrapper = styled('div')`
  width: 100%;
  height: auto;
  position: relative;
`;

export const TextField = styled('input')<ContainerProps>`
  width: 100%;
  background: #f7f7f7;
  border-radius: 8px;
  padding: 15px;
  height: auto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: ${({ error }) => (error ? theme.color.red.t500 : theme.color.grey.t500)};
`;

export const Error = styled('p')<ErrorLabel>`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: ${theme.color.red.t500};
  ${({ errorBottom }) =>
    !errorBottom
      ? `
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(calc(-100% - 12px));
    `
      : `
    margin-top: 20px;
  `};
`;

export const LabelHeader = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const FormRequire = styled('p')`
  font-size: 12px;
  color: green;
`;
