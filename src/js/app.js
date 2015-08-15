var multiply = require('./multiply');

var obj = {
  name: "Jeff",
  age: 99
}

var {name, age} = obj;

console.log(multiply(2, 4));
console.log(name, age);