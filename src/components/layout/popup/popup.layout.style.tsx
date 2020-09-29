import styled from 'styled-components';

interface ContainerProps {
  active?: boolean;
}

export const Container = styled('div')<ContainerProps>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999999;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
  pointer-events: none;
  ${({ active }) =>
    active &&
    `
    display: flex;
    pointer-events: all;
  `};
`;

export const Wrapper = styled('div')<ContainerProps>`
  padding: 24px 64px;
  border-radius: 10px;
  background: white;
  min-width: 45vw;
  opacity: 0;
  transition: all ease 0.6s;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `};
`;

export const Close = styled('div')<ContainerProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
  background: rgba(0, 0, 0, 0.5);
  transition: all ease 0.6s;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `};
`;

export const Title = styled('h2')`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #031442;
  font-family: sans-serif;
`;
