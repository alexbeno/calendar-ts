import { configure, setAddon, addParameters } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);
// automatically import all files ending in *.stories.js


// addParameters({
//   options: {
//     /**
//      * name to display in the top left corner
//      * @type {String} 
//      */
//     name: 'Allowa',
//   }
// })


configure([
  // require.context('../src/components', true, /\.stories\.tsx$/),
  // require.context('../src/containers', true, /\.stories\.tsx$/)
  require.context('../src/stories', true, /\.stories\.tsx$/)
], module);