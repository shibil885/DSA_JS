const fs = require('fs');

const readStream = fs.createReadStream('../../readAndWrite.js', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('../../error.txt');
readStream.on('data', chunk => {
  console.log('Received chunk:', chunk);
  writeStream.write(chunk,(err) => {
    if (err) {
        throw new Error('Something went wrong');
    }
    console.log('data wrote');
  } )
});

readStream.on('end', () => {
  console.log('Finished reading.');
});
