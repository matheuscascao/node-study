import { Worker, isMainThread, workerData } from 'worker_threads'
import fs from 'fs'
const __filename = import.meta.url.replace('file://', '')

if (isMainThread) {
	console.log('main');
	const a = new Worker(__filename, { workerData: { code: 'a', number: 44 } });
	const b = new Worker(__filename, { workerData: { code: 'b', number: 44 } });
	const c = new Worker(__filename, { workerData: { code: 'c', number: 44 } });
	const d = new Worker(__filename, { workerData: { code: 'd', number: 44 } });
	a.on('message', function (message) {
		console.log(message);
	});
	b.on('message', function (message) {
		console.log(message);
	});
	c.on('message', function (message) {
		console.log(message);
	});
	d.on('message', function (message) {
		console.log(message);
	});
} else {
	console.log('thread', workerData.code, workerData.number);
	const result = fibonacci(workerData.code, workerData.number);
	parentPort.postMessage(`thread ${workerData.code} ${result}`);
}

//scaling with threads