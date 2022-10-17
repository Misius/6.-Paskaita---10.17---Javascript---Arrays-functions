'use strict';
console.log('music.js');


let music = ['Jazz', 'Blues'];
console.log(music);


music.push('Rock and Roll');
console.log(music);

music[1] = 'Classics';
console.log(music);





// music.unshift('Rap', 'Reggae');
music.splice(0,0, 'Rap', 'Reggae');
console.log('music ===', music);


let randomArr = [11, 'cat', true, 4, 'mouse', 5, 9, 5, 76, false]

// 1. atspausdinti kiekvieno masyvo tipa consoleje

console.log('=====================================================');
let randomArrTypes = [];
for (let randomEl of randomArr) {
    // console.log(typeof randomEl);
    // console.log(Array.isArray(randomEl));
    // randomArrTypes.push(typeof randomEl);
    if (typeof randomEl === 'string') {
        randomArrTypes.push(randomEl);
    }
}
console.log(randomArrTypes);