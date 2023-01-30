function sum(a) {
    let currentResult = a;

    function f(b) {
        currentResult += b;
        return f;
    }

    f.toString = function () {
        return currentResult;
    }

    return f;
}



console.log(sum(1)(2).toString()); // 1 + 2
console.log(sum(1)(2)(3).toString()); // 1 + 2 + 3
console.log(sum(5)(-1)(2).toString());
console.log(sum(6)(-1)(-2)(-3).toString());
console.log(sum(0)(1)(2)(3)(4)(5).toString());