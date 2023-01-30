function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));

    document.head.append(script);
}

// usage:
// loadScript('path/script.js', (err, script) => {...})

let loadScriptPromiseFunc = function (src) {
    return new Promise((resolve, reject) => {
        loadScript(src, (err, script) => {
            if (err) reject(err);
            else resolve(script);
        });
    });
};

// usage:
// loadScriptPromise('path/script.js').then(...)

function promisify(f) {
    return function (...args) { // return a wrapper-function (*)
      return new Promise((resolve, reject) => {
        function callback(err, result) { // our custom callback for f (**)
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
  
        args.push(callback); // append our custom callback to the end of f arguments
  
        f.call(this, ...args); // call the original function
      });
    };
  }
  
  // usage:
  let loadScriptPromise = promisify(loadScript);
  //loadScriptPromise(...).then(...);

  // promisify(f, true) to get array of results
function promisify(f, manyArgs = false) {
    return function (...args) {
      return new Promise((resolve, reject) => {
        function callback(err, ...results) { // our custom callback for f
          if (err) {
            reject(err);
          } else {
            // resolve with all callback results if manyArgs is specified
            resolve(manyArgs ? results : results[0]);
          }
        }
  
        args.push(callback);
  
        f.call(this, ...args);
      });
    };
  }
  
  // usage:
  f = promisify(f, true);
  //f(...).then(arrayOfResults => ..., err => ...);