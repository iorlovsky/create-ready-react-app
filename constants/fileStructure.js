const path = require('path');

const dirs2create = [
  path.join('src', 'app' ),
  path.join('src', 'app', 'components'),
  path.join('src', 'app', 'modules'),
  path.join('src', 'app', 'modules', 'actions'),
  path.join('src', 'app', 'modules', 'reducers'),
  path.join('src', 'app', 'modules', 'store'),
  path.join('src', 'app', 'pages'),
  path.join('src', 'app', 'router'),
  path.join('src', 'app', 'utils'),
  path.join('src', 'assets'),
  path.join('src', 'assets', 'styles'),
  path.join('src', 'assets', 'styles', 'base'),
  path.join('src', 'assets', 'styles', 'components'),
  path.join('src', 'assets', 'styles', 'elements'),
  path.join('src', 'assets', 'styles', 'variables'),
];

const files2create = [
  path.join('src', 'assets', 'styles', 'base', '_layout.scss'),
  path.join('src', 'assets', 'styles', 'base', '_typography.scss'),
  path.join('src', 'assets', 'styles', 'components', '_simple_component.scss'),
  path.join('src', 'assets', 'styles', 'elements', '_buttons.scss'),
  path.join('src', 'assets', 'styles', 'elements', '_forms.scss'),
  path.join('src', 'assets', 'styles', 'variables', '_colors.scss'),
  path.join('src', 'assets', 'styles', 'app.scss'),
];

const files2delete = [
  path.join('src', 'App.css'),
  path.join('src', 'index.css'),
  path.join('src', 'logo.svg'),
];

module.exports = {
  dirs2create,
  files2create,
  files2delete
};