const delayedSum = function (a, b, callbackFunction) {
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            resolve(a + b);
        }, 300) 
    });
}

console.time('Performance');
Promise.all([
    delayedSum(2, 2),
    delayedSum(3, 3)
]).then(function (result){
    delayedSum(result, 10).then(function(result) {
        console.log("The result is: ", result);
        console.timeEnd('Performance');
    })
})