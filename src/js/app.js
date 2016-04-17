import "babel-polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import store from './store';

import { Nav } from './components/nav';
import Todos from './components/todos';
import FilterLink from './components/filterLink';

@Radium
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Nav green={true} />
        <Todos
          {...store.getState()}
        />
        Show: 
        <FilterLink filter="SHOW_ALL">All</FilterLink>
        <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
        <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
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
