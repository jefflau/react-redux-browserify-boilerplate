import React from 'react';
const { Component } = React;
import store from '../store';

var nextTodoId = 0;

export default class Todos extends Component {
  render() {
    return (
      <div>
        <form onSubmit={(e)=>{
          e.preventDefault();
          store.dispatch({
            type: "ADD_TODO",
            id: nextTodoId++,
            text: this.input.value
          })

          this.input.value = "";
        }}>
        <input type="text" ref={node=> this.input = node} />
        </form>
        {this.props.todos.map((todo)=>
          <li>{todo.text}</li>
        )}
      </div>
    )
  }
}