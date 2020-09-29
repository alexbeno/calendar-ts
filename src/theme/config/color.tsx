
const colorJson = require('customtheme.json').color;

const dark = {
  t500: '#0D0D0D',
  t400: '#1A1919',
  t300: '#272626',
  t200: '#343232',
  t100: '#403F3F',
  t0: '#4D4C4C',
};

const grey = {
  t900: '#181818',
  t800: '#413E3E',
  t700: '#686464',
  t600: '#8F8A8A',
  t500: '#B4B1B1',
  t400: '#CDCBCB',
  t300: '#DFDDDD',
  t200: '#E6E5E5',
  t100: '#FAFAFA',
};

const red = {
  t900: '#321B1B',
  t800: '#602020',
  t700: '#B82E2E',
  t600: '#E23636',
  t500: '#F24848',
  t400: '#F76E6E',
  t300: '#FB9D9D',
  t200: '#FECDCD',
  t100: '#FFF0F0',
};

const green = {
  t900: '#1B3227',
  t800: '#206041',
  t700: '#2EB875',
  t600: '#36D98A',
  t500: '#48F2A0',
  t400: '#6EF7B5',
  t300: '#9DFBCE',
  t200: '#CDFEE6',
  t100: '#F0FFF8',
};

const yellow = {
  t900: '#32281B',
  t800: '#604720',
  t700: '#B8852E',
  t600: '#E2BA36',
  t500: '#F2D748',
  t400: '#F7E06E',
  t300: '#FBEB9D',
  t200: '#FEF6CD',
  t100: '#FFFCF0',
};

const blue = {
  t900: '#1B2132',
  t800: '#203260',
  t700: '#2E55B8',
  t600: '#3667E2',
  t500: '#5486F2',
  t400: '#6E95F7',
  t300: '#9DB8FB',
  t200: '#CDDBFE',
  t100: '#F0F4FF',
};

export const color = {
  black: '#000',
  white: '#fff',
  primary: '#000',
  dark,
  grey,
  red,
  green,
  yellow,
  blue,
  ...colorJson,
};
