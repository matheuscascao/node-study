const delayedSum = function (a, b, callbackFunction) {
    setTimeout(function() {
        callbackFunction(a + b);
    }, 2000)
}

const result = delayedSum(2, 3, function (result) {
    console.log("The result is: ", result);
});