
const easeJson = require('customtheme.json').ease;

export const ease = {
  slow_fast_slow1: 'cubic-bezier(0.525, 0.005, 0.045, 1.005)',
  slow_fast_slow2: 'cubic-bezier(0.290, 0.005, 0.085, 1.000)',
  slow_fast1: 'cubic-bezier(0.155, 0.005, 0.000, 1.000)',
  slow_fast2: 'cubic-bezier(0.155, 0.005, 0.085, 1.000)',
  ...easeJson,
};
