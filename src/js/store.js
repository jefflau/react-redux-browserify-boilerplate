import { createStore, combineReducers } from 'redux';

function todos (state = [], action) {
  switch(action.type){
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
      break;
    case "TOGGLE_TODO":
      return state.map((todo)=>{
        if(todo.id !== action.id){
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed
        }
      })
      break;
    default:
      return state;
  }
}

function visibilityFilter (state = null, action) {
  switch(action.type){
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
}

const store = createStore(combineReducers({ todos, visibilityFilter }))

export default store;