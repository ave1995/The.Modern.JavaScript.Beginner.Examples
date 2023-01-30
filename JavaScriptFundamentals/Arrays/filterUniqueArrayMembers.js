function unique(arr) {
    let uniques = [];
    for (let str of arr) {
        if (!uniques.includes(str)) {
            uniques.push(str);
        }
      }
        
    return uniques;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings)); // Hare, Krishna, :-O

// So the solution is only good for small arrays.

// Further in the chapter Map and Set we’ll see how to optimize it.