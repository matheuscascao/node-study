const delayedSum = function(a, b) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(a + b);
        }, 500)
    });
};

const a = delayedSum(2, 2);
const b = delayedSum(3, 3);
const result = delayedSum(a, b);
console.log(result); // returns a promise