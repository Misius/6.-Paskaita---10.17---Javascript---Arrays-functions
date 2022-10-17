'use strict';
console.log('splice.js');

let spalvos = ['red', 'green', 'blue', 'black'];
// console.log(spalvos);

// console.log('splice', spalvos.splice(0, 0, 'violet', 'orange'));
console.log('unshift', spalvos.unshift(0, 0, 'violet', 'orange'));
console.log('spalvos ===', spalvos);
spalvos.slice('spalvos.slice(1,3) ===', spalvos.slice(1, 3)); 
let spalvuAtkarposKopija = spalvos.slice(1, 3);

console.log('spalvuAtkarposKopija ===',spalvuAtkarposKopija);
console.log('spalvos ===',spalvos);

let paskDuEl = spalvos.slice(-2);
console.log('paskDuEl ===', paskDuEl);

let visiSpalvosElNuoVieneto = spalvos.slice(2);
console.log('visiSpalvosElNuoVieneto ===', visiSpalvosElNuoVieneto);

// indexOf()

