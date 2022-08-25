let Sum2Nums = function (a, b) {
    return a + b;
}
const my_array = [1, 2, 3];
const simple_obj = {
    sub_name: 'simple',
    model: '15C'
};
const my_obj = {
    name: 'obj',
    year: 2022,
    coordinates: {
        x: 1,
        y: 2
    },
    sum_2_nums: Sum2Nums
};
const _first = {
    name: 'first',
    sub_name: '1'
};
const _second = {
    name: 'second',
    sub_name: '2'
};
const _third = [_first, 1, 2, [7878, 8989]];
// console.log(_first.name);
// console.log(_second['name']);

// console.log(my_array);
// console.log(simple_obj);
// console.log(my_obj);

console.log(_third[0].name);
// console.log(_third[8].name); // TypeError: Cannot read properties of undefined (reading 'name')
console.log(_third[8]?.name); // undefiend

let is_true = false;
// let is_true = false;
let is_false = false;
// is_true &&= is_false;
is_true ||= is_false;
console.log(is_true);

