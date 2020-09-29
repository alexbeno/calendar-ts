import styled from 'styled-components';

interface ButtonContainerProps {
  border?: string;
  textColor?: string;
  className?: string;
}

export const ButtonContainer = styled('a')<ButtonContainerProps>`
  padding: 10px 22px;
  line-height: 20px;
  color: #031442;
  font-size: 14px;
  font-weight: 500;
  font-family: sans-serif;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  background: #89d1fa;
  box-shadow: 0px 5px 14px rgba(1, 181, 226, 0.15);
  border-radius: 20px;
  border: none;
  font-weight: 600;
  width: 100%;
  text-align: center;
`;
