import React from 'react';

export default function FilterLink ({
  filter,
  children,
  currentFilter,
  onClick
}){
  if(currentFilter === filter) {
    return <span>{children}</span>
  } 

  return (
    <a href="#" onClick={()=> onClick(filter)}>{children}</a>
  )
}