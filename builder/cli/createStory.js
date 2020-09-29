/* eslint-disable */

const fs = require('fs');
const http = require('http');
const os = require("os");

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const baseFile = './src/stories/';

let componentObj = {
  parent : null,
  name : null,
}

function promptName() {
  readline.question(`\x1b[34m Storie name ? `, (parent) => {
    componentObj.parent = parent
    if (fs.existsSync(`${baseFile}${parent}.js`)){
        console.log(`\x1b[31m`, `Storie already exist`)
        promptName()
    } else {
      createFile()
    }
  })
}

function createFile() {
    readline.close()
    if (!fs.existsSync(`${baseFile}${componentObj.parent}.js`)){
        
        fs.appendFile(`${baseFile}${componentObj.parent}.stories.tsx`, writeInside(componentObj.parent), function (err) {
            if (err) throw err;
        });
    }
}

function writeInside(parent) {
  const includString = `
/* eslint-disable */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import t from 'theme'

export default {
  title: '${capitalizeFirstLetter(parent)}',
};

export const sandbox = () => (
  <div>Story of ${capitalizeFirstLetter(parent)}</div>
);

sandbox.story = {
  decorators: [withKnobs],
};
  `

  return includString
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

promptName()