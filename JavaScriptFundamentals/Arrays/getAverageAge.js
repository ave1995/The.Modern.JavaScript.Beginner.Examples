function getAverageAge(array) {
    return array.reduce((sum, current) => sum + current.age, 0) / array.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28