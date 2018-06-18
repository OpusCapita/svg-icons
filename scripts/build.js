'use strict'

let fs = require('fs');
let path = require('path');
let pipes = require('./pipes');

let sourcePath = path.resolve(__dirname, '../svg');
let destinationPath = path.resolve(__dirname, '../lib');

fs.mkdirSync(destinationPath);
let svgFilesNames = fs.readdirSync(sourcePath);

let unprocessableFiles = [
  'app_provisioning.svg'
];

svgFilesNames.map(svgFileName => {
  let svgSourceFilePath = path.join(sourcePath, svgFileName);
  let svgDestinationFilePath = path.join(destinationPath, svgFileName);
  let fileContent = fs.readFileSync(svgSourceFilePath, 'utf-8');
  let readyFileContent = unprocessableFiles.indexOf(svgFileName) === -1 ?
    fileContent :
    Object.keys(pipes).reduce((result, pipeName) => pipes[pipeName](result), fileContent);
  fs.writeFileSync(svgDestinationFilePath, readyFileContent);
});
