import { parentPort, workerData } from 'worker_threads';

parentPort.on('message', () => {
    if (workerData == 3) {
        throw new Error('Faild due to some config issue')
    }

    let sum = 0;
    for (let i = 0; i < 10000000000; i++) {
        sum += i;
    }
    parentPort.postMessage(`Sum from ${workerData}: ${sum}`);
})