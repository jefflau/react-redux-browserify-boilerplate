import store from '../store';
import React from 'react';

export default function FilterLink ({
  filter,
  children
}){
  return (
    <a href="#" onClick={(e)=> { 
      e.preventDefault();
      store.dispatch({ type: "SET_VISIBILITY_FILTER", filter: filter})
    }}>{children}</a>
  )
}