/* eslint-disable */

const fs = require('fs');
const http = require('http');
const os = require("os");

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const baseFile = './src/pages/';
const baseFileContent = './src/data/static/content/';

let componentObj = {
  parent : null,
  name : null,
}

function promptName() {
  readline.question(`\x1b[34m Page parent name ? `, (parent) => {
    componentObj.parent = parent
    if (fs.existsSync(`${baseFile}${parent}.js`)){
        console.log(`\x1b[31m`, `Page already exist`)
        promptName()
    } else {
      createFile()
    }
  })
}

function createFile() {
    readline.close()
    if (!fs.existsSync(`${baseFile}${componentObj.parent}.js`)){
        
        fs.appendFile(`${baseFile}${componentObj.parent}.page.tsx`, writeInside(componentObj.parent), function (err) {
            if (err) throw err;
        });
    }
    if (!fs.existsSync(`${baseFileContent}fr/${componentObj.parent}.content.json`)){
        
        fs.appendFile(`${baseFileContent}fr/${componentObj.parent}.content.json`, writeInside_JSON(componentObj.parent), function (err) {
            if (err) throw err;
            bundleJson()
        });
    }
}

function writeInside(parent) {
  const includString = `
import * as React from 'react';

const ${capitalizeFirstLetter(parent)}: React.FC = () => (
  <div>${capitalizeFirstLetter(parent)}</div>
);

export default ${capitalizeFirstLetter(parent)};
  `

  return includString
}

function writeInside_JSON(parent) {
  const includString = `
{
  "config": {
      "page_name": "${capitalizeFirstLetter(componentObj.parent)}",
      "path": "/${componentObj.parent}"
  }
}
  `

  return includString
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function readFiles(dirname) {
  let myFiles = []
  return new Promise(resolve => {
    fs.readdir(dirname, function(err, filenames) {
      if (err) {
        resolve(err);
        return;
      } 
      filenames.forEach(element => {
        if(element.includes('.json')) {
          myFiles.push(element.replace('.json', ''))
        }
      });

      resolve(myFiles);
    });
  })
}


async function bundleJson() {
  var files = await readFiles(`${baseFileContent}fr/`)

  fs.writeFile(`${baseFileContent}fr/index.js`, writeInside_Bundle(files), (err) => {
    if (err) throw err;
    console.log(`\x1b[32m`, `Success`)
  });
}


function writeInside_Bundle(content) {
  const includString = `
  ${
  content.map((file) =>
  `const ${file.replace('.content', '')}Content = require('data/static/content/fr/${file}.json')${os.EOL}`
  ).join('')
  }

  export default {
  ${
  content.map((file) =>
  `${file.replace('.content', '')}: ${file.replace('.content', '')}Content,${os.EOL}`
    
  ).join('')
  }
  }
  `

  return includString
}

promptName()