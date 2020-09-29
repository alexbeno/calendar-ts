import styled from 'styled-components';

interface ContainerProps {
  show?: boolean;
}

export const Container = styled('div')<ContainerProps>`
  width: 100%;
  position: relative;
  z-index: 999;
  box-shadow: 0px 11px 14px rgba(0, 0, 0, 0.02);
`;

export const Title = styled('h5')`
  width: 48px;
  height: 40px;
  background: #f7f8fc;
  padding: 15px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  width: 100%;
  color: #031442;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: sans-serif;
  font-weight: bold;
`;

export const Wrapper = styled('h5')<ContainerProps>`
  height: 0;
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  overflow: hidden;
  ${({ show }) =>
    show &&
    `
    height: 500px;
    overflow: auto;
  `};
`;

export const Item = styled('h5')`
  width: 48px;
  background: #f7f8fc;
  padding: 15px;
  height: 40px;
  font-style: normal;
  font-family: sans-serif;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  width: 100%;
  border-top: 1px solid #c3c3c3;
  color: #031442;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #89d1fa;
  }
`;
