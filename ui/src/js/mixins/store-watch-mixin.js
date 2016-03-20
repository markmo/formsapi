'use strict';
var React = require('react');
var AppStore = require('../stores/app-store');

var StoreWatchMixin = function (callback) {
  return {

    getInitialState: function () {
      return callback(this);
    },

    componentWillMount: function () {
      AppStore.addWatch(this._onChange);
    },

    componentWillUnmount: function () {
      AppStore.removeWatch(this._onChange);
    },

    _onChange: function () {
      this.setState(callback(this));
    }
  };
};

module.exports = StoreWatchMixin;