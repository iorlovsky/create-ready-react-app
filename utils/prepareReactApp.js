const path = require('path');
const fs = require('fs');
const appJs = require('../templates/App');
const routerJs = require('../templates/router/index');
const historyJs = require('../templates/router/history');
const appJsAction = require('../templates/modules/actions/app');
const appJsReducer = require('../templates/modules/reducers/app');
const configureStoreJs = require('../templates/modules/store/configureStore');
const configJs = require('../templates/modules/config');
const typesJs = require('../templates/modules/types');
const urlsJs = require('../templates/modules/urls');
const dirs2create = require('../constants/fileStructure').dirs2create;
const files2create = require('../constants/fileStructure').files2create;
const files2delete = require('../constants/fileStructure').files2delete;


const setTemplates = (appName) => {
  return new Promise( resolve => {
    const templatesMap = [
      {file: path.join(appName, 'src', 'App.js'), template: appJs},
      {file: path.join(appName, 'src', 'app', 'router', 'index.js'), template: routerJs},
      {file: path.join(appName, 'src', 'app', 'router', 'history.js'), template: historyJs},
      {file: path.join(appName, 'src', 'app', 'modules', 'actions', 'app.js'), template: appJsAction},
      {file: path.join(appName, 'src', 'app', 'modules', 'reducers', 'app.js'), template: appJsReducer},
      {file: path.join(appName, 'src', 'app', 'modules', 'store', 'configureStore.js'), template: configureStoreJs},
      {file: path.join(appName, 'src', 'app', 'modules', 'config.js'), template: configJs},
      {file: path.join(appName, 'src', 'app', 'modules', 'types.js'), template: typesJs},
      {file: path.join(appName, 'src', 'app', 'modules', 'urls.js'), template: urlsJs},
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