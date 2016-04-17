import React from 'react';
const { Component } = React;
import store from '../store';

var nextTodoId = 0;

function getVisibleTodos(todos, filter) {
  switch(filter){
    case "SHOW_ALL":
      return todos;
      break;
    case "SHOW_ACTIVE":
      return todos.filter(t => !t.completed)
      break;
    case "SHOW_COMPLETED":
      return todos.filter(t => t.completed)
      break;
    default:
      return todos;
  }
}

export default class Todos extends Component {
  render() {
    console.log(this.props.visibilityFilter);
    let visibleTodos = getVisibleTodos(this.props.todos, this.props.visibilityFilter);
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
        {visibleTodos.map((todo)=>
          <li onClick={()=> store.dispatch({ type:"TOGGLE_TODO", id: todo.id})} style={todo.completed ? {textDecoration: "line-through"} : {}}>{todo.text}</li>
        )}
      </div>
    )
  }
}
 