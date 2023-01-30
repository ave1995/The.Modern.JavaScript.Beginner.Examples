class Button {
    constructor(value) {
      this.value = value;
    }
  
    click() {
      console.log(this.value);
    }
  }
  
  let buttonWrong = new Button("hello");

  setTimeout(buttonWrong.click, 1000); // undefined

// The problem is called "losing this".

// There are two approaches to fixing it,
//  as discussed in the chapter Function binding:

// Pass a wrapper-function, such as setTimeout(() => buttonWrong.click(), 1000).
// Bind the method to object, e.g. in the constructor.
// buttonWrong.click.bind(buttonWrong)
// Class fields provide another, quite elegant syntax:

class Button {
    constructor(value) {
      this.value = value;
    }
    click = () => {
      alert(this.value);
    }
  }
  
  let button = new Button("hello");
  
  setTimeout(button.click, 1000); // hello

//   The class field click = () => {...} is created on a per-object basis,
//    there’s a separate function for each Button object,
//     with this inside it referencing that object.
//      We can pass button.click around anywhere,
//       and the value of this will always be correct.

// That’s especially useful in browser environment, for event listeners.