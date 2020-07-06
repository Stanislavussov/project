"use strict";

const soldier = {
    health: 400,
    armor: 120,
    sayHello: function(){
        console.log('Hi from John');
    }    
};

const john = Object.create(soldier);

// Object.setPrototypeOf(soldier, john);

console.log(john.armor);