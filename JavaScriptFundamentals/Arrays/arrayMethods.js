// Write the function camelize(str) that changes dash-separated words like “my-short-string” 
//into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.
function camelize(word) {
    return word
        .split('-')
        .map(
            (item, index) => index != 0 ? item[0].toUpperCase() + item.slice(1) : item
        )
        .join('');
}

console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');

// Write a function filterRange(arr, a, b) that gets an array arr, looks
// for elements with values higher or equal to a and lower or equal to b and 
// return a result as an array.

// The function should not modify the array. It should return the new array.

function filterRange(array, mustBeHigherOrEqual, mustBeLowerOrEqual) {
    return array.filter(item => (item >= mustBeHigherOrEqual && item <= mustBeLowerOrEqual));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1 (matching values)

console.log(arr); // 5,3,8,1 (not modified)

//Write a function filterRangeInPlace(arr, a, b) that gets an array arr and 
//removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

//The function should only modify the array. It should not return anything.

function filterRangeInPlace(array, mustBeHigherOrEqual, mustBeLowerOrEqual) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element < mustBeHigherOrEqual || element > mustBeLowerOrEqual) {
            array.splice(index, 1);
            index--;
        }
    }
}

let arrInPlace = [5, 3, 8, 1];

filterRangeInPlace(arrInPlace, 1, 4); // removed the numbers except from 1 to 4

console.log(arrInPlace); // [3, 1]

//Sort in decreasing order
{
    let arr = [5, 2, 1, -10, 8];

    arr.sort((a, b) => b - a);

    console.log(arr); // 8, 5, 2, 1, -10
}

//We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

//Create a function copySorted(arr) that returns such a copy.

{
    function copySorted(array) {
        return array.slice().sort();
    }

    let arr = ["HTML", "JavaScript", "CSS"];

    let sorted = copySorted(arr);

    console.log(sorted); // CSS, HTML, JavaScript
    console.log(arr); // HTML, JavaScript, CSS (no changes)
}