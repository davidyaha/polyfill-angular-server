Package.describe({
  name: 'netanelgilad:polyfill-angular-server',
  version: '1.4.4',
  summary: 'Get AngularJS on the server side!',
  git: 'http://gihub.com/netanelgilad/meteor-angular-server',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('angular-server-polyfill.js', 'server');
  api.addFiles('angular.js', 'server');
  api.addFiles('angular-export.js', 'server');

  api.export('angular', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('netanelgilad:angular-server');
  api.addFiles('angular-server-tests.js');
});
