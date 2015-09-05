var React = require('react'),
    Radium = require('radium');

var Nav = require('./components/nav');

@Radium
class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="app">
        <Nav green={true} />
      </div>
    )
  }
}

React.render(
  <App />,
  document.getElementById('main')
);
