function f() {
    console.log("Hello!");
}

Function.prototype.defer = function (ms) {
    // setTimeout(() => {
    //     return this();
    // }, ms);
    setTimeout(this, ms);
}

f.defer(1000); // shows "Hello!" after 1 second