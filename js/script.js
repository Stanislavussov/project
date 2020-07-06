"use strict";
const arr = [55, 84, 91, 10, 2];

arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} в массиве ${arr}`);
// });

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for (let value of arr){
//     console.log(value);
// }

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));
