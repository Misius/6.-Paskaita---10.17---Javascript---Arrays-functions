'use strict';
console.log('array.js');
// i                     0      1        2
let paprastasMasyvas = ['red', 'green', 'blue']

let paprastasMasyvasCopy = paprastasMasyvas
paprastasMasyvasCopy[2] = 'kopijos pakeitimas';

let color = 'blue';

let color2 = color;

//gauti green reiksme 
console.log('Gauti green reiksme ===', paprastasMasyvas[1]);

// pakeisti pirma i violet
paprastasMasyvas[0] = 'violet';
console.log('Pakeista reiksme i violet', paprastasMasyvas);


//  prideti reiksme i masyvo gala = push

console.log(paprastasMasyvas);
paprastasMasyvas.push('red');
console.log('pop', paprastasMasyvas.pop());
console.log('shift',paprastasMasyvas.shift());
console.log('unshift',paprastasMasyvas.unshift('coral'));
console.log('shift',paprastasMasyvas.shift());
