#!/usr/bin/env node
/* eslint-disable no-console, consistent-return */
const { resolve } = require('path');
const fs = require('fs');
const { version } = require('./package.json');

const filesList = [
  {
    path: resolve(__dirname, 'sonar-project.properties'),
    lineToReplace: /^sonar.projectVersion=.*$/gmu,
    replaceWith: 'sonar.projectVersion=',
  },
];

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

updateAppVersion(filesList, version);
/* eslint-enable no-console, consistent-return */
