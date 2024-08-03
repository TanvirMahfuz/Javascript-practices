let mySymbol = Symbol();
console.log(mySymbol);

const obj = {
  name: "symbol",
  [mySymbol]: "Its my symbol",
};
console.log(obj);

Object.freeze(obj);

obj.email = "email@email.com";
console.log(obj);
