import "babelify/polyfill";

import React from 'react';
import Radium from 'radium';

import { Nav } from './components/nav';

var someAsyncThing = function() {
  return new Promise(function(resolve, reject) {
    // this will throw, x does not exist
    resolve(x + 2);
  });
};

someAsyncThing().then(function() {
  console.log('everything is great');
}).catch(function(error) {
  console.log('oh no', error);
});

@Radium
class App extends React.Component {
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
