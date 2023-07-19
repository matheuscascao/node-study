const delayedSum = function(a, b) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(a + b);
        }, 500)
    });
};

const a = await delayedSum(2, 2);
const b = await delayedSum(3, 3);
const result = await delayedSum(a, b);
console.log(result); // returns a RESOLVED promise -> value