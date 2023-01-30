function f(a, b) {
    console.log( a + b );
  }
  
Function.prototype.defer = function (ms) {
    let func = this;
    function wrapper(a, b){
        setTimeout(() => func(a, b), ms);
    }
    
    return wrapper;
}

  f.defer(1000)(1, 2); // shows 3 after 1 second

  Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
      setTimeout(() => f.apply(null, args), ms);
    }
  };
  
  f.defer(1000)(1, 2); // shows 3 after 1 sec


//   Please note: we use this in f.apply to make our decoration work for object methods.

//   So if the wrapper function is called as an object method,
//   then this is passed to the original method f.

  Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
      setTimeout(() => f.apply(this, args), ms);
    }
  };
  
  let user = {
    name: "John",
    sayHi() {
      alert(this.name);
    }
  }
  
  user.sayHi = user.sayHi.defer(1000);
  
  user.sayHi();