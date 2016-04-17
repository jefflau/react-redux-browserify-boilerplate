import React from 'react';

export default function Counter({ value, increment, decrement}){
  return (
    <div>
      {value}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}