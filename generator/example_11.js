const delayedSum = function(a, b) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(a + b);
        }, 500)
    });
};

const async = function(fn) {
    const gen = fn();
    asyncR(gen);
}

const asyncR = function(gen, result) {
    const obj = gen.next(result);
    console.log(obj);
    if (obj.done) return;
    obj.value.then(function(result) {
        asyncR(gen, result);
    })
};