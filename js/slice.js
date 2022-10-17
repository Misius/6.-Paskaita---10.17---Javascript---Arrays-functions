'use strict';
console.log('slice.js');



let spalvos = ['red', 'green', 'blue', 'black'];

let blueIndex = spalvos.indexOf('blue')



let blueIndex11 = spalvos.indexOf('blue11')
console.log(blueIndex);
if (!spalvos.includes('blue11')) {
    console.log('Neradau elemento');     // -1
}






let lastblueIndex = spalvos.lastIndexOf('black')
console.log(lastblueIndex);