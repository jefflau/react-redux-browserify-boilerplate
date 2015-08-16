var multiply = require('./multiply');

var obj = {
  name: "Jeff",
  age: 30
}

var {name, age} = obj;

console.log(multiply(2, 5));
console.log(name, age);