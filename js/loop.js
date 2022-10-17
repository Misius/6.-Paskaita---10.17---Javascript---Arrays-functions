'use strict';
console.log('loop.js');



             //    0        1           2        3
 let sent1 = [ 'Sveiki', 'mano', 'vardas', 'James' ] ;

// for (let word of sent1) {
//     console.log(word);
// }

for (let i = 0; i <sent1.length; i++) {
    console.log(sent1[i]);
}


for (let i = sent1.length - 1; i >= 0; i--) {
    let word = sent1[i];
    console.log(word);
}