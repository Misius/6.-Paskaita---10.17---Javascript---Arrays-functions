'use strict';
console.log('uzd.js');




// 5. let sent1 = [ 'Sveiki', 'mano', 'vardas', 'James' ] let sent2 = [ '. ', 'is', 'Londono']


//    3. is sujungto masyvo grazinti atskirame masyve  ['vardas', 'James', '. ', 'is' ]


//   
          //    0        1           2        3
let sent1 = [ 'Sveiki', 'mano', 'vardas', 'James' ] ;
let sent2 = [ '. ', 'is', 'Londono'];

// 3.1. istrinti 'mano'

// sent1.splice(1, 1);
// console.log(sent1);

// 3.2. vietoj 'Sveiki' iterpti "Laba diena"

// sent1.splice(0, 1, 'Laba diena');
// console.log(sent1);


// 3.3 tarp 'vardas' ir 'James' iterpti 'yra'

// sent1.splice(2, 0, 'yra');
// console.log(sent1);


// 5. let sent1 = [ 'Sveiki', 'mano', 'vardas', 'James' ] let sent2 = [ '. ', 'is', 'Londono']

//    1. sujujngti masyvus i viena

let sentence = sent1.concat(sent2);
// sent1.push(sent2);
console.log(sentence);


//    2. suskaicuoti kiek kieviename masyve yra elementu

console.log(sentence.length);

// 3. is sujungto masyvo grazinti atskirame masyve  ['vardas', 'James', '. ', 'is' ]

const riekele = sentence.slice(2, 6);
console.log(riekele);
console.log(sentence);



