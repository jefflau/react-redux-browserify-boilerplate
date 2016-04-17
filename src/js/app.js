import "babel-polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';

import { Nav } from './components/nav';
import Todos from './components/todos';
import Counter from './components/counter';
import store from './store';

@Radium
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Nav green={true} />
        <Todos
          todos={store.getState().todos}
        />
      </div>
    )
  }
}

function render(){
  ReactDOM.render(
    <App />,
    document.getElementById('main')
  );
}

render();
store.subscribe(render);
