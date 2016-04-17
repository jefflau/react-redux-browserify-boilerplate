import React from 'react';
import { connect } from 'react-redux';

function FilterLink ({
  filter,
  children,
  onClick,
  currentFilter
}){
  if(currentFilter === filter) {
    return <span>{children}</span>
  } 

  return (
    <a href="#" onClick={()=> onClick(filter)}>{children}</a>
  )
}

const mapStateToProps = (state) => {
  return {
    currentFilter: state.visibilityFilter
  }
}

export default connect(mapStateToProps, null)(FilterLink);