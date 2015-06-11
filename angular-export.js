angular = window.angular;

var origBootstrap = angular.bootstrap;
angular.bootstrap = function(modules, config) {
  Meteor.startup(function() {
    origBootstrap(document, modules, config);
  });
};