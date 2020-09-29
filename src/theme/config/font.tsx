const fontJson = require('customtheme.json').font;

export const font = {
  heavy: 900,
  extra: 800,
  bold: 700,
  semi: 600,
  medium: 500,
  regular: 400,
  light: 300,
  primary: "'Avenir', sans-serif",
  ...fontJson,
};
