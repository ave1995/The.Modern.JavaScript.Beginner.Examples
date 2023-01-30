function f() {
    alert( this ); // you will get null
  }
  
  let user = {
    g: f.bind(null)
  };
  
  user.g();