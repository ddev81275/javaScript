function HelloMan() {
    console.log("Hello man");
}
function HelloByConstName(name) {
    console.log("hello " + name);
}
function Sum2Nums(one = 2, two = 122) {
    return one + two;
}
function MethWithFuncParam(one = 120, two = 125, func) {
    func = Sum2Nums(one, two);
    return func + one + two;
}
function FuncInFunc(param) {
    return function(first, second) {
        return param + 10;
    }
}
const meth = MethWithFuncParam();
const result1 = FuncInFunc(10);
const result2 = result1(1, 2);
// let message = HelloMan();
// const greetingByName = HelloByConstName("Tommy");
// console.log(Sum2Nums());
// console.log(Sum2Nums(one = 100, two = 100));
// console.log(meth);