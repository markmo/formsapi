var App = require('./components/app');
var injectTapEventPlugin = require('react-tap-event-plugin');

// must be defined after App otherwise "TypeError: Cannot call method 'emit' of undefined"
var React = require('react');

// react-devtools looks for an instance of React in the global scope
window.React = React;

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

React.render(
  <App/>,
  document.getElementById('main'));