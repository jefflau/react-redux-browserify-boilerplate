import "babel-polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import { createStore } from 'redux';

import { Nav } from './components/nav';
import Counter from './components/counter';

const store = createStore((state = 0, action)=>{
  switch(action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
})

@Radium
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Nav green={true} />
        <Counter 
          value={store.getState()}
          increment={()=>{store.dispatch({type: "INCREMENT"})}}
          decrement={()=>{store.dispatch({type: "DECREMENT"})}}
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
