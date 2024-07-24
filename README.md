#Function Information


log: Logs result on console

functionItrerations:  Iteration count of function in order to get Average

testItrerations: Number of Test Batches Scheduled

getInteger:  returns interger value



##for testing non parameterized code

```
function Example() {
    console.log("hello")
}

testFn(Example, {
    log: true, 
    functionItrerations: 100,
    testItrerations: 10,
    getInteger: true 
})
```

##for testing parameterized code

```
function exampleFunc(a, b) {
    return a + b;
}

const result = testParameterizedFn(exampleFunc, [5, 3], {
    log: true,
    functionIterations: 100,
    testIterations: 10,
    getInteger: false
});


```