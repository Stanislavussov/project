"use strict";

const btn = document.querySelectorAll('button');

// btn.addEventListener('mouseenter', () => {
//     alert('Привет 1');
// });

// btn.addEventListener('click', () => {
//     alert('Hello!');
// });



const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);
};

btn.forEach(item => {
    item.addEventListener('click', deleteElement);
});
