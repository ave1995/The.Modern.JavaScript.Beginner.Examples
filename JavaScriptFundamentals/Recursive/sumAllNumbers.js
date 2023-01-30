//Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.
// Make 3 solution variants:

// Using a for loop.
// Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
// Using the arithmetic progression formula.

function sumToForLoop(n) {
    let result = 0;
    for (let index = 1; index <= n; index++) {
        result += index;
    }
    return result;
}

console.log(sumToForLoop(100));

function sumToRecursive(n) {
    if(n == 1) return n;

    return n + sumToRecursive(n - 1);
}

console.log(sumToRecursive(100));

function sumToArithmeticProgression (n) {
    return n * (1 + n) / 2;
}

console.log(sumToArithmeticProgression(100));
