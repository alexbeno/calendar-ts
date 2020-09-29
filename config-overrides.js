
const rewireStyledComponents = require('react-app-rewire-styled-components');

module.exports = function override(config, env) {
  config = rewireStyledComponents(config, env, {
    displayName: true,
  });
  // config = rewireReactHotLoader(config, env);
  return config;
};
