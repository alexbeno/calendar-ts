const breakpointJson = require('customtheme.json').breakpoint;

export const breakpoint = {
  sm: '768px',
  md: '900px',
  xmd: '1200px',
  mdlg: '1340px',
  lg: '1500px',
  xl: '2500px',
  ...breakpointJson,
};
