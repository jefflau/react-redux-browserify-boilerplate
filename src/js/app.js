import React from 'react';
import Radium from 'radium';

import Nav from './components/nav';

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
