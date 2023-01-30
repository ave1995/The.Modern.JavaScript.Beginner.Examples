let obj = {
    0: "Hello",
    1: "world!",
    length: 2,
    name: '5'
  };
  
  obj.join = Array.prototype.join;
  
  console.log( obj.join(',') ); // Hello,world!

// It works because the internal algorithm of the built-in
// join method only cares about the correct indexes and the length property.
// It doesn’t check if the object is indeed an array.
// Many built-in methods are like that.