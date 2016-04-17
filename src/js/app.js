import "babel-polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import store from './store';

import { Nav } from './components/nav';
import Todos from './components/todos';
import FilterLink from './components/filterLink';

const onFilterClick = (filter) => store.dispatch({ type: "SET_VISIBILITY_FILTER", filter})

@Radium
class App extends React.Component {
  render() {
    const state = store.getState();
    const { visibilityFilter } = state;
    return (
      <div className="app">
        <Nav green={true} />
        <Todos
          {...state}
        />
        Show: 
        <FilterLink filter="SHOW_ALL" currentFilter={visibilityFilter} onClick={onFilterClick}>All </FilterLink>
        <FilterLink filter="SHOW_ACTIVE" currentFilter={visibilityFilter} onClick={onFilterClick}>Active </FilterLink>
        <FilterLink filter="SHOW_COMPLETED" currentFilter={visibilityFilter} onClick={onFilterClick}>Completed</FilterLink>
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
