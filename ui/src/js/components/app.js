var React = require('react');
var Router = require('react-router-component');
var Layout = require('./layout');
var Fluxy = require('fluxy');
var Metagrid = require('./metagrid');
var AppStore = require('../stores/app-store');

var Locations = Router.Locations;
var Location = Router.Location;

Fluxy.start();

var App = React.createClass({
  render: function () {
    return (
      <Layout>
        <Locations>
          <Location path="/grid/:name" handler={Metagrid}/>
          <Location path="/" handler={Metagrid}/>
        </Locations>
      </Layout>
    );
  }
});

module.exports = App;