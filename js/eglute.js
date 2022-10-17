'use strict';
console.log('eglute.js');



/*


    +
   +++
  +++++
 +++++++
+++++++++

*/

let aukstai = 15;
console.log('     +');
console.log('    +++');
console.log('   +++++');
console.log('  +++++++');
console.log(' +++++++++');
console.log('+++++++++++');

// ciklas 1 = 4 tarpai; 1 pliusas
// ciklas 2 = 3 tarpai; 3 pliusai
// ciklas 3 = 2 tarpai; 5 pliusai
// ciklas 4 = 1 tarpai; 7 pliusai
// ciklas 5 = 0 tarpai; 9 pliusai

// 1 4 1
// 2 3 3
// 3 2 5
// 4 1 7
// 5 0 9

let laikinaEilute = '';
for (let i = 1; i <= aukstai; i++){
    // console.log('aukstas ===', i);
    // ciklas generuoti tarpus
   for (let j = aukstai - i; j > 0; j--) {
    // console.log(j);
    laikinaEilute += ' '
   }
// Generuojam reikalinga skaiciu pliusiuku
// Generuoja 1 3 5 7 9 ir tt.
   for (let k = 1; k <= i * 2 - 1; k ++) {
    laikinaEilute += '+'
   }
   console.log(laikinaEilute);
//    išsivalom laikiną eilutę kitam aukštui
   laikinaEilute = '';
}
let kazkas = `'<li>' laikinaEilute, '</li>'`;