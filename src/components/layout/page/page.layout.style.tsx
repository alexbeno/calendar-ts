import styled from 'styled-components';

export const MainContainer = styled('div')`
  width: 100%;
  height: auto;
  min-height: calc(100vh - (63px / 2));
  padding: 63px;
  background: #f7f8fc;
`;

export const ContentContainer = styled('div')`
  width: 100%;
  height: auto;
  min-height: 100%;
  padding: 24px;
  background: white;
  box-shadow: 0px 11px 14px rgba(0, 0, 0, 0.02);
  border-radius: 10px;
`;
