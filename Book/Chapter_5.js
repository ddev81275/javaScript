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
// console.log('--------------------\nfor of');
// const _forOfArray = [1, 2, 3, 4, 5, 6, 12, 78, 100];
// let sumForOf = 0;
// for (const iterator of _forOfArray) { //for array, with Object for/in
//     sumForOf += iterator;
// }
// console.log(typeof (sumForOf));
// console.log(sumForOf);
console.log('--------------------\nfor/in');
let _custom_obj = {
    name: 'custom name',
    year: 2022,
    model: 'VC/75'
};

// // for/in Object
// for (const key in _custom_obj) {
//     const _propsName = key; // key - props name
//     const _propsValue = _custom_obj[key];
//     console.log(_propsName + ': ' + _propsValue);
// }
// // for/of Array
// for (const iterator of Object.keys(_custom_obj)) {
//     console.log(iterator);
// }

// for (const [key, value] of Object.entries(_custom_obj)) {
//     console.log(key + ' ' + value);
// }

// for (const iterator of Object.entries(_custom_obj)) {
//     console.table(iterator);
// }

// let _stringObj = {};
// for (const letter of 'object') {
//     if (_stringObj[letter]) {
//         _stringObj[letter]++;
//     }
//     else {
//         _stringObj[letter] = 1;
//     }
// }
// console.table(_stringObj);

// const _text = 'Ha ha ha ha na nu Batman!';
// // const _text = 'Ha ha ha ha Batman!';
// const _set = new Set(_text.split(' '));
// const _unique = [];

// for (const iterator of _set) {
//     _unique.push(iterator)
// }
// console.log(_unique);

const _map = new Map(
    [
        [1, 'hello'],
        ['2', 9484],
        [3, 'fsldajfl']
    ]);
for (const [key, value] of _map) {
    console.table(key + ': ' + value);
}