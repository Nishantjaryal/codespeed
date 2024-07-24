const {testFn,testParameterizedFn} = require("../package/FuncBench")

// Example usage



// function exampleFunc(a, b) {
//     return a + b;
// }

// const result = testParameterizedFn(exampleFunc, [5, 3], {
//     log: true,
//     functionIterations: 100,
//     testIterations: 10,
//     getInteger: false
// });






function Example() {
    console.log("hello")
}

testFn(Example, {
    log: true,
    FunctionItrerations: 100,
    TestItrerations: 10,
    getInteger: true
})