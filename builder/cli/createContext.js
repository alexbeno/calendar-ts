/* eslint-disable */

const fs = require('fs');
const http = require('http');
const os = require("os");

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const baseFile = './src/context/';

let componentObj = {
  parent : null,
  name : null,
}

function promptName() {
  readline.question(`\x1b[34m Context parent name ? `, (parent) => {
    componentObj.parent = parent
    if (fs.existsSync(`${baseFile}${parent}Context.js`)){
        console.log(`\x1b[31m`, `Context already exist`)
        promptName()
    } else {
      createFile()
    }
  })
}

function createFile() {
    readline.close()
    if (!fs.existsSync(`${baseFile}${componentObj.parent}Context.js`)){
        
        fs.appendFile(`${baseFile}${componentObj.parent}Context.js`, writeInside(componentObj.parent), function (err) {
            if (err) throw err;
        });
    }

    console.log(`\x1b[32m`, `Success`)
}

function writeInside(parent) {
  const includString = `
  import React, { createContext } from 'react';

  /**
   * initial state
   */
  export const ${capitalizeFirstLetter(parent)}Context = createContext({
    ${parent}: '',
    resetContext: () => {},
    update${capitalizeFirstLetter(parent)}: () => {},
  });
  
  /**
   * Provider
   */
  
  export class ${capitalizeFirstLetter(parent)}Provider extends React.Component {
    state = {
      ${parent}: '${parent}',
      update${capitalizeFirstLetter(parent)}: (value) => this.update${capitalizeFirstLetter(parent)}(value),
      resetContext: () => this.resetContext(),
    };
  
    resetContext = () => {
      this.setState({ ${parent}: '${parent}' });
    };
  
    update${capitalizeFirstLetter(parent)} = async (newValue) => {
      this.setState({ ${parent}: newValue });
    };
  
    render() {
      return (
        <${capitalizeFirstLetter(parent)}Context.Provider value={this.state}>
          {this.props.children}
        </${capitalizeFirstLetter(parent)}Context.Provider>
      );
    }
  }
  
  /**
   * consumer
   */
  
  export const ${capitalizeFirstLetter(parent)}Consumer = ${capitalizeFirstLetter(parent)}Context.Consumer;

  /*
  import { ${capitalizeFirstLetter(parent)}Provider } from 'context/${parent}Context'
  import { ${capitalizeFirstLetter(parent)}Context } from 'context/${parent}Context'
  <${capitalizeFirstLetter(parent)}Provider>
    provider
  </${capitalizeFirstLetter(parent)}Provider>
  */
  `

  return includString
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

promptName()