

function testFn(func, options = {}) {
    let results_array = []
    const {
        log = false,
        functionItrerations = 10,
        testItrerations = 10,
        getInteger = false
    } = options
    let time = 0
    for (let tests = 0; tests < testItrerations; tests++) {
        const timeStart = performance.now()
        for (let index = 0; index < functionItrerations; index++) {
            const ans = func()
            results_array = { ...results_array, ans }
        }
        const timeEnd = performance.now()
        time += (timeEnd - timeStart)
    }
    const avgtestTimetaken = (time / testItrerations).toFixed(3) 
    const avgRequestTimetaken = ((time / functionItrerations)/testItrerations).toFixed(3)
    if (log) console.log('Average time taken per Batch: '+ avgtestTimetaken +"ms "+ "\n" + 'Average time taken per Function Request: ' + avgRequestTimetaken+"ms")
    if (getInteger) return avgRequestTimetaken

    const return_str = avgRequestTimetaken + "ms"
    return return_str
}

function testParameterizedFn(func, params, options = {}) {
    const {
        log = false,
        functionIterations = 100,
        testIterations = 10,
        getInteger = false
    } = options;

    let results = [];
    let totalTime = 0;

    for (let test = 0; test < testIterations; test++) {
        const timeStart = performance.now();
        for (let i = 0; i < functionIterations; i++) {
            const result = func(...params);
            results.push(result);
        }
        const timeEnd = performance.now();
        totalTime += (timeEnd - timeStart);
    }

    const avgtestTimetaken = (totalTime / testIterations).toFixed(3) 
    const avgRequestTimetaken = ((totalTime / functionIterations)/testIterations).toFixed(3)
    if (log) console.log('Average time taken per Batch: '+ avgtestTimetaken +"ms "+ "\n" + 'Average time taken per Function Request: ' + avgRequestTimetaken+"ms")
    if (getInteger) return avgRequestTimetaken

    const return_str = avgRequestTimetaken + "ms"
    return return_str
}



module.exports = {
    testFn,
    testParameterizedFn
}

