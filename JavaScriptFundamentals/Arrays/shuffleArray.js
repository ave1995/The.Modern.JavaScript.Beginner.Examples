function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        console.log("Index i: " + i);
        let x = Math.random() * (i + 1);
        console.log("Random number: " + x);
        let j = Math.floor(x); // random index from 0 to i
        console.log("Index j: " + j);
        // swap elements array[i] and array[j]
        // we use "destructuring assignment" syntax to achieve that
        // you'll find more details about that syntax in later chapters
        // same can be written as:
        // let t = array[i]; array[i] = array[j]; array[j] = t
        console.log("Number : " + array[j] + " swaps with number: " + array[i]);
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let arr = [1, 2, 3];
console.log(arr);

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);
