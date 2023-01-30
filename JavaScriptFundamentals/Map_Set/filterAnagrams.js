function aclean(arr) {
    let map = new Map();

    for (let item of arr) {
        let sorted = item
            .toLowerCase()
            .split('')
            .sort()
            .join('');
        map.set(sorted, item);
    }

    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"

//Without use map
// function aclean(arr) {
//     let obj = {};
  
//     for (let i = 0; i < arr.length; i++) {
//       let sorted = arr[i].toLowerCase().split("").sort().join("");
//       obj[sorted] = arr[i];
//     }
  
//     return Object.values(obj);
//   }
  
//   let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
//   alert( aclean(arr) );