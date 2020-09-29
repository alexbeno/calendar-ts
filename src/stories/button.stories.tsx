/* eslint-disable */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import t from 'theme'

export default {
  title: 'Button|Add button',
};

export const sandbox = () => (
  <div>Ma story</div>
);

sandbox.story = {
  decorators: [withKnobs],
};
