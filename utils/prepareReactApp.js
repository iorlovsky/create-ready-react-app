const path = require('path');
const fs = require('fs');
const appjs = require('../templates/App');
const dirs2create = require('../constants/fileStructure').dirs2create;
const files2create = require('../constants/fileStructure').files2create;
const files2delete = require('../constants/fileStructure').files2delete;

const setTemplates = (appName) => {
  return new Promise( resolve => {
    const templatesMap = [
      {file: path.join(appName, 'src', 'App.js'), template: appjs}
    ];
    templatesMap.forEach(el => fs.writeFileSync(el.file, el.template));

    resolve(true)
  });
};

const createAppStructure = (appName) => {
  return new Promise( resolve => {
    dirs2create
      .map(dir => path.join(appName, dir))
      .forEach(dir => fs.mkdirSync(dir));

    files2create
      .map(file => path.join(appName, file))
      .forEach(file => fs.appendFileSync(file, ''));

    files2delete
      .map(file => path.join(appName, file))
      .forEach(file => fs.unlinkSync(file));

    resolve(true);
  });
};



module.exports = {
  createAppStructure,
  setTemplates
};