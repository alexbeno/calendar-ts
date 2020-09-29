import * as React from 'react';
import { Container } from './separator.grid.style';

interface Props {
  style?: object;
  className?: string;
  xl?: string;
  lg?: string;
  xmd?: string;
  md?: string;
  sm?: string;
  mdlg?: string;
}

const GridSeparator: React.FC<Props> = ({ className, style, xl, lg, xmd, md, sm, mdlg }) => (
  <Container style={style} className={className} xl={xl} lg={lg} xmd={xmd} md={md} sm={sm} mdlg={mdlg} />
);

export default GridSeparator;
