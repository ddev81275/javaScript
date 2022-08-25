const numberForIf = 10;
// if (numberForIf === 10) {
//     console.log(10);
// }
// else if (numberForIf > 10) {
//     console.log('number >' + numberForIf);
// }
// else {
//     console.log('else block');
// }
// switch
// console.log('\n----------------------\nswitch case');
// const key = 12;
// switch (key) {
//     case 12:
//         console.log('key ' + key);
//         break;
//     case 12:
//         console.log(12);
//         break;
//     default:
//         console.log('def case');
//         break;
// }

// console.log('--------------------\nwhile');
// let _whileCounter = 0;
// while (_whileCounter < 10) {
//     console.log(_whileCounter);
//     _whileCounter++;
// }
// console.log('--------------------\nfor');
// for (let iter = 1; iter < 12; iter = iter + 2) {
//     console.log(iter);
// }

// let i, j, sum = 0;
// for (i = 0, j = 0; i < 10; i++, j++) {
//     sum += i * j;
//     console.log(sum);
// }
// console.log('summa =' + sum);
console.log('--------------------\nfor of');
const _forOfArray = [1, 2, 3, 4, 5, 6, 12, 78, 100];
let sumForOf = 0;
for (const iterator of _forOfArray) { //for array, with Object for/in
    sumForOf += iterator;
}
console.log(typeof (sumForOf));
console.log(sumForOf);