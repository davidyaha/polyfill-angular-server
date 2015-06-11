/**
 * Created by netanel on 28/02/15.
 */
document = {
  createElement : function() {
    return {
      setAttribute : function(href) {

      },
      pathname : '/',
      getAttribute : function() {

      }
    };
  },
  addEventListener : function() {

  },
  querySelector : function() {

  },
  cookie : ''
};

window = {};
window.location = {
  href : 'noop'
};
window.addEventListener = function() {

};

window.history = {
  state : {}
};

window.setTimeout = Meteor.setTimeout;
window.setInterval = Meteor.setInterval;
window.clearTimeout = Meteor.clearTimeout;
window.clearInterval = Meteor.clearInterval;
window.console = console;

window.document = document;