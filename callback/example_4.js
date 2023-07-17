const delayedSum = function (a, b, callbackFunction) {
    setTimeout(function() {
        callbackFunction(a + b);
    }, 2000)
}

console.time('performance')
delayedSum(2, 3, function (result) {
    delayedSum(result, 5, function (result2) {
        delayedSum(result2, 10, function (result3) {
            console.log("The result is: ", result3);
            console.timeEnd('performance')
        })
    })
})