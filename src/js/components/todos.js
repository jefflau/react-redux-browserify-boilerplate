import React from 'react';
import { connect } from 'react-redux'; 
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

class Todos extends Component {
  render() {
    let { todos, onAddTodo, onTodoClick } = this.props;

    console.log(todos);
    return (
      <div>
        <form onSubmit={(e)=>{
          e.preventDefault();
          onAddTodo(this.input.value);
          this.input.value = "";
        }}>
        <input type="text" ref={node=> this.input = node} />
        </form>
        {todos.map((todo)=>
          <li onClick={()=> onTodoClick(todo.id)} style={todo.completed ? {textDecoration: "line-through"} : {}}>{todo.text}</li>
        )}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch({
        type:"TOGGLE_TODO", id: id
      })
    },

    onAddTodo: (value) => {
      dispatch({
        type: "ADD_TODO",
        id: nextTodoId++,
        text: value
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);