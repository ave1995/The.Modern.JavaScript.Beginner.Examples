class Rabbit {
    constructor(name) {
      this.name = name;
    }
  }
  
  let rabbit = new Rabbit("Rab");
  
  // hasOwnProperty method is from Object.prototype
  console.log( rabbit.hasOwnProperty('name') ); // true

  class Bear extends Object {
    constructor(name) {
      super();
      this.name = name;
    }
  }
  
  let bear = new Bear("Bea");
  
  console.log( bear.hasOwnProperty('name') ); // Error
