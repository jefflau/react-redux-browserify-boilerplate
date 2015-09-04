var React = require('react'),
    Radium = require('radium');

var Nav = require('./components/nav');

var App = Radium(React.createClass({
  render: function() {
    return (
      <div className="app">
        <Nav />
      </div>
    )
  }
}));

React.render(
  <App />,
  document.getElementById('main')
);
