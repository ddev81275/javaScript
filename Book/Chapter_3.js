function ShowObjValue(value) {
    console.log(Object.toString(value) + ': ' + value);
}

/*  3.1   */
let a = [1, 0, 12, 4];
// a.sort();
// a.sort((b, c) => b - c);
a.sort((b, c) => c - b);

// console.log(a);

/*  3.2 */
let numberExample = new Number(12);
const EPSILON_VALUE = Number.EPSILON;
const STRANGE_NUMBER = 0X007AFD;;

/*console.log('elipson: ' + elipson);
console.log('strange number: ' + strangeNumber);

console.log('------------------------');

console.log('type of: ' + typeof(numberExample));
console.log('value of: ' + numberExample.valueOf());*/

let long_number = 1.45_98_1235_8;

// console.log(long_number);

// console.log('------------------------');

let PI_VALUE = Math.PI;

/*console.log('PI: ' + PI_VALUE);
console.log('E: ' + Math.E);
console.log('INFITINY :>> ', Number.POSITIVE_INFINITY);*/

// console.log('------------------------');

let dateNow = Date.now();
const date = new Date();

/*ShowObjValue(dateNow);
ShowObjValue(date);*/

console.log('------------------------');

let greet = 
'Hello \
User';
const nameOfCompany = 'Hello Jh\'on!';
const smileInUnicode = '\u{1F600}';
const carModel = 'Nissan X/125 GT-1';
const nissanModel = carModel.replace('125', '75');

// console.log('nameOfCompany :>> ', nameOfCompany);
// console.log('smile: ' + smileInUnicode);
// console.log(greet);
console.log(carModel);
console.log(nissanModel);