#!/usr/bin/env node
/* eslint-disable no-console, consistent-return */
const { resolve } = require('path');
const fs = require('fs');
const { version } = require('./package.json');

const args = process.argv.slice(2);
const releaseVersion = args[0] || version;
const filesList = [
  {
    path: resolve(__dirname, 'sonar-project.properties'),
    lineToReplace: /^sonar.projectVersion=.*$/gmu,
    replaceWith: 'sonar.projectVersion=',
  },
];

console.info(`Version from package.json: ${version}, next release version: ${releaseVersion}\n`);

const updateAppVersion = (files, newVersion) => {
  files.forEach((file) => {
    fs.readFile(file.path, 'utf-8', (error, data) => {
      if (error) {
        console.error(error);
      }
      console.info(`File ${file.path} found\n`);

      const formatted = data.replace(file.lineToReplace, `${file.replaceWith}${newVersion}`);
      console.info(`Version updated in file ${file.path}\n`);

      fs.writeFile(file.path, formatted, 'utf-8', (error) => {
        if (error) {
          return console.error(error);
        }
        console.info(`File ${file.path} overwritten with new version: ${newVersion}\n`);
      });
    });
  });
};

updateAppVersion(filesList, releaseVersion);
/* eslint-enable no-console, consistent-return */
