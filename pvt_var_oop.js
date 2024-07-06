"use strict";
//THE ILLUSION OF PRIVATE VARIABLES IN JAVASCRIPT
function variable(name) {
  let x = name;
  return {
    getName: () => {
      return x;
    },
    setName: (val) => {
      x = val;
    },
  };
}
class Person {
  constructor(name) {
    this.name = variable(name);
  }
}

let obj = new Person("John");
console.log(obj.name.getName());
obj.name.setName("Bob");
console.log(obj.name.getName());
console.log(obj.name); //{ getName: [Function: getName], setName: [Function: setName] }
