import cluster from 'cluster';
import os from 'os';
import http from 'http';

const fibonacci = function (n) {
    return n < 1 ? 0 : n <=2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

if (cluster.isMaster) {
    console.log('master', process.pid);
    const avaibleCpus = os.cpus().length;
    const cpus = 4;
    for (let i = 0; i < cpus; i++) {
        const worker = cluster.fork();
        worker.on('message', function (message) {
            console.log('return: ', message);
        })
    }
} else {
    console.log('worker', process.pid);
    http.createServer(function (req, res) {
        res.writeHead(200);
        const result = fibonacci(42);
        process.send(`worker ${process.pid}: ${result.toString()}`)
        res.write(`worker ${process.pid}: ${result.toString()}`)
        res.end();
    }).listen(8000);
}

// SCALING WITH PROCESSES