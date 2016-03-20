'use strict';
var React = require('react');
var FormStore = require('../stores/form-store');

var FormStoreWatchMixin = function (callback) {
  return {

    getInitialState: function () {
      return callback(this);
    },

    componentWillMount: function () {
      FormStore.addWatch(this._onChange);
    },

    componentWillUnmount: function () {
      FormStore.removeWatch(this._onChange);
    },

    _onChange: function () {
      this.setState(callback(this));
    }
  };
};

module.exports = FormStoreWatchMixin;