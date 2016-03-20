var React = require('react');
var Metaform = require('metaform');
var AppStore = Metaform.AppStore;
var StoreWatchMixin = Metaform.StoreWatchMixin;

function getMessage(component) {
  var payload = AppStore.getMessage();
  if (payload && !payload.error) {
    setTimeout(function () {
      component.setState({message: null});
    }, 4000);
  }
  return {message: payload};
}

var Header = React.createClass({

  mixins: [StoreWatchMixin(getMessage)],

  closeAlert: function () {
    this.setState({message: null});
  },

  render: function () {
    if (this.state.message) {
      if (this.state.message.error) {
        return (
          <div id="alert" className="alert alert-danger" role="alert">
            <button className="close" type="button" aria-label="Close" onClick={this.closeAlert}><span aria-hidden="true">&times;</span></button>
            {this.state.message.message}
          </div>
        );
      } else {
        return (
          <div id="alert" className="alert alert-success" role="alert">
            <button className="close" type="button" aria-label="Close" onClick={this.closeAlert}><span aria-hidden="true">&times;</span></button>
            {this.state.message.message}
          </div>
        );
      }
    } else {
      return null;
    }
  }
});

module.exports = Header;