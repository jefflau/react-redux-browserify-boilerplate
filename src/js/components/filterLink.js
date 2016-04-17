import store from '../store';
import React from 'react';

export default function FilterLink ({
  filter,
  children,
  currentFilter
}){
  if(currentFilter === filter) {
    return <span>{children}</span>
  } 

  return (
    <a href="#" onClick={(e)=> { 
      e.preventDefault();
      store.dispatch({ type: "SET_VISIBILITY_FILTER", filter: filter})
    }}>{children}</a>
  )
}