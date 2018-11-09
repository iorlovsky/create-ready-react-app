const path = require('path');
const fs = require('fs');
const appjs = require('../templates/App');

const setTemplates = (appName) => {
  const templatesMap = [
    {file: path.join(appName, 'src', 'App.js'), template: appjs}
  ];
  templatesMap.forEach(el => fs.writeFileSync(el.file, el.template));
};

const createAppStructure = (appName) => {
  const dirs2Create = [
    path.join(appName, 'src', 'app'),
    path.join(appName, 'src', 'app', 'components'),
    path.join(appName, 'src', 'app', 'modules'),
    path.join(appName, 'src', 'app', 'modules', 'actions'),
    path.join(appName, 'src', 'app', 'modules', 'reducers'),
    path.join(appName, 'src', 'app', 'modules', 'store'),
    path.join(appName, 'src', 'app', 'pages'),
    path.join(appName, 'src', 'app', 'router'),
    path.join(appName, 'src', 'app', 'utils'),
    path.join(appName, 'src', 'assets'),
    path.join(appName, 'src', 'assets', 'styles'),
    path.join(appName, 'src', 'assets', 'styles', 'base'),
    path.join(appName, 'src', 'assets', 'styles', 'components'),
    path.join(appName, 'src', 'assets', 'styles', 'elements'),
    path.join(appName, 'src', 'assets', 'styles', 'variables'),
  ];

  const files2create = [
    path.join(appName, 'src', 'assets', 'styles', 'base', '_layout.scss'),
    path.join(appName, 'src', 'assets', 'styles', 'base', '_typography.scss')
  ];

  const files2delete = [
    path.join(appName, 'src', 'App.css'),
    path.join(appName, 'src', 'index.css'),
    path.join(appName, 'src', 'logo.svg'),
  ];

  dirs2Create.forEach(dir => fs.mkdirSync(dir));
  files2create.forEach(file => fs.appendFileSync(file, ''));
  files2delete.forEach(file => fs.unlinkSync(file));
};



module.exports = {
  createAppStructure,
  setTemplates
};