class Rabbit extends Object {}

// normally we call Object.getOwnPropertyNames
console.log ( Rabbit.getOwnPropertyNames({a: 1, b: 2})); // a,b

class Bear {}

console.log ( Bear.prototype.__proto__ === Object.prototype ); // (1) true
console.log ( Bear.__proto__ === Object ); // (2) false (!)
console.log ( Bear.__proto__ === Function.prototype ); // as any function by default

// error, no such function in Rabbit
console.log  ( Bear.getOwnPropertyNames({a: 1, b: 2})); // Error