var React = require('react');
var Header = require('./header/header');
var Link = require('react-router-component').Link;

var Template = React.createClass({

  componentDidMount: function () {
    new mlPushMenu(document.getElementById('mp-menu'), document.getElementById('trigger'));
  },

  render: function () {
    return (
      <div className="mp-pusher" id="mp-pusher">
        <nav id="mp-menu" className="mp-menu">
          <div className="mp-level">
            <div className="brand pull-left"><img src="/assets/metamorphic_logo.png" title="Forms Server" alt="Forms Server"/></div>
            <h2 className="icon icon-logo">Forms Server</h2>
            <ul>
              <li>
                <Link className="icon fa-home" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="icon fa-list-alt" href="/grid/form-schema">Form Schemas</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div>
          <Header/>
          <a href="#" id="trigger" className="menu-trigger">Metaform</a>
          <div className="content">{this.props.children}</div>
        </div>
      </div>
    );
  }
});

module.exports = Template;