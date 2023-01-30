function printNumbersSetInterval(from, to) {
    let timerId = setInterval(() => {
        if (from >= to) {
            clearInterval(timerId);
        }
        console.log(from++)
    }, 1000);
}

printNumbersSetInterval(1, 5);

function printNumbersSetTimeout(from, to) {
    let current = from;
    setTimeout(function run() {
        console.log(current++);
        if (current <= to) {
            setTimeout(run, 1000);
        }
    }, 1000);
}

printNumbersSetTimeout(1, 5);

//If we also want the function to run immediately, 
//then we can add an additional call on a separate line, like this:

// function printNumbers(from, to) {
//     let current = from;
  
//     function go() {
//       alert(current);
//       if (current == to) {
//         clearInterval(timerId);
//       }
//       current++;
//     }
  
//     go();
//     let timerId = setInterval(go, 1000);
//   }
  
//   printNumbers(5, 10);