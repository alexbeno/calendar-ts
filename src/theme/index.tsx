import script from 'helpers/script/index.util';
import indexStyle from 'helpers/style/index.style';
import constant from 'data/constant/index';
import mixins from './styled/index.theme';
import config from './config/index';
import image from './image';

/**
 * Color
 */

export default {
  color: config.color,
  mixins,
  break: config.breakpoint,
  font: config.font,
  ease: config.ease,
  grid: config.grid,
  image,
  fn: script,
  style: indexStyle,
  constant,
};
