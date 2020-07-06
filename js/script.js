"use strict";

// function copyFunc (myObj){
//     const copyObj = {};

//     for (let key in myObj){
//         copyObj[key] = myObj[key];
//     }

//     return copyObj;
// }


// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copyFunc(numbers);

// newNumbers.a = 10;

// console.log(newNumbers);



// function copy(mainObj){
//     let objCopy = {};

//     let key;
//     for (key in mainObj){
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }



// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     d: 11,
//     e: 22
// };

// const together = Object.assign({}, add);

// together.d = 66;

// console.log(add);
// console.log(together);



const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'abcd';

console.log(newArray);

console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube', 'myvideo'],
      blogs = ['wordpress', 'lj', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'fb'];

console.log(internet);

function logg (a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const numb = [2, 3, 5];
logg(...numb);