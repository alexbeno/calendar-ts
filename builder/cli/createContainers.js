/* eslint-disable */

const fs = require('fs');
const http = require('http');
const os = require("os");

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const baseFile = './src/containers/';

let componentObj = {
  parent : null,
  name : null,
}

function promptName() {
  readline.question(`\x1b[34m Container parent name ? `, (parent) => {
    readline.question(`\x1b[34m Container name ? `, (name) => {
        componentObj.name = name
        componentObj.parent = parent
        if (fs.existsSync(`${baseFile}${parent}/${name}`)){
          console.log(`\x1b[31m`, `Container already exist`)
          promptName()
        } else {
          createFile()
        }
      })
  })
}

function createFile() {
    readline.close()
    if (!fs.existsSync(`${baseFile}${componentObj.parent}`)){
      fs.mkdirSync(`${baseFile}${componentObj.parent}`);
    }
    if (!fs.existsSync(`${baseFile}${componentObj.parent}/${componentObj.name}`)){
        fs.mkdirSync(`${baseFile}${componentObj.parent}/${componentObj.name}`);
        
        fs.appendFile(`${baseFile}${componentObj.parent}/${componentObj.name}/${componentObj.name}.${componentObj.parent}.controller.tsx`, writeInside_JS(componentObj.parent, componentObj.name), function (err) {
            if (err) throw err;
        });
        
        // fs.appendFile(`${baseFile}${componentObj.parent}/${componentObj.name}/${componentObj.name}.${componentObj.parent}.style.tsx`, writeInside_STYLE(componentObj.parent, componentObj.name), function (err) {
        //     if (err) throw err;
        // });

        fs.appendFile(`${baseFile}${componentObj.parent}/${componentObj.name}/${componentObj.name}.${componentObj.parent}.template.tsx`, writeInside_TEMPLATE(componentObj.parent, componentObj.name), function (err) {
            if (err) throw err;
        });
    }
}

function writeInside_JS(parent, name) {
  const includString = `
import * as React from 'react';
import ${capitalizeFirstLetter(parent)}${capitalizeFirstLetter(name)}_template from './${name}.${parent}.template';

interface Props {
    title?: string;
}

const ${capitalizeFirstLetter(parent)}${capitalizeFirstLetter(name)}: React.FC<Props> = (props) => {
  const [titleState, setTitleState] = React.useState(props.title);

  React.useEffect(() => {
    setTitleState(props.title);
  }, []);

  return (
    <${capitalizeFirstLetter(parent)}${capitalizeFirstLetter(name)}_template title={titleState || ''} text="lorem ipsum" />
  );
};
export default ${capitalizeFirstLetter(parent)}${capitalizeFirstLetter(name)};
  `

  return includString
}

function writeInside_STYLE(parent, name) {
  const includString = `
import styled from 'styled-components';

interface PageTitleProps {
  color?: string;
}
  
${"export const PageTitle = styled('h1') < PageTitleProps > ``;"}  
${"export const PageText = styled('p') < PageTitleProps > ``;"}  
  `

  return includString
}

function writeInside_TEMPLATE(parent, name) {
  const includString = `
import * as React from 'react';

interface Props {
    title?: string;
    text: string;
}

const ${capitalizeFirstLetter(parent)}${capitalizeFirstLetter(name)}_template: React.FC<Props> = (props) => (
  <div>
    <PageTitle>
      {props.title}
    </PageTitle>
    <PageText>
      {props.text}
    </PageText>
  </div>
);

export default ${capitalizeFirstLetter(parent)}${capitalizeFirstLetter(name)}_template;
  `

  return includString
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function readFiles(dirname) {
  let myFiles = []
  return new Promise(resolve => {
    fs.readdir(dirname, { withFileTypes: true }, function(err, filenames) {
      if (err) {
        resolve(err);
        return;
      } 
      filenames.forEach(element => {
        if(element.isDirectory()) {
          myFiles.push(element.name)
        }
      });

      resolve(myFiles);
    });
  })
}

promptName()