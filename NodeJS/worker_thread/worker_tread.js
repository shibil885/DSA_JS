import { Worker } from 'worker_threads'

// const worker = new Worker('./worker.js',)
// worker.on('message', (data) => {
//     console.log('response from thread:', data);
// })


// worker.postMessage('start');

function runWorker(id) {
    const worker = new Worker('./worker.js', { workerData: id });
    worker.on('message', (sum) => {
        console.log(sum);
    })
    worker.on('error', (err) => {
        console.error(`Worker ${id} error:`, err);
    })
    worker.on('exit', (code) => {
        console.log(`Worker ${id}:`, 'exited with code', code);

    })
    worker.postMessage('start')
}

for (let i = 0; i < 5; i++) {
    runWorker(i);
}