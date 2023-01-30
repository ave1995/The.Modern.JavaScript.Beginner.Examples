class MyError extends Error {
    constructor(message) {
      super(message);
      this.name = this.constructor.name; //here
    }
  }
  
  class ValidationError extends MyError { }
  
  class PropertyRequiredError extends ValidationError {
    constructor(property) {
      super("No property: " + property);
      this.property = property;
    }
  }
  
  // name is correct
  alert( new PropertyRequiredError("field").name ); // PropertyRequiredError