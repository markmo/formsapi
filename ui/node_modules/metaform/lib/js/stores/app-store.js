var Fluxy = require('fluxy');
var AppConstants = require('../constants/app-constants');

var AppStore = Fluxy.createStore({

  actions: [
    [AppConstants.ALERT, function (message) {
      this.set('message', message);
    }]
  ],

  getMessage: function () {
    return this.getAsJS('message');
  }
});

module.exports = AppStore;