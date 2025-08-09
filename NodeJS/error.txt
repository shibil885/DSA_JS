import { writeFile, access, constants, appendFile } from 'fs'

function writeError(error) {
    return new Promise((resolve, reject) => {
        access('error.txt', constants.F_OK, (err) => {
            if (err) {
                writeFile('error.txt', error + '\n', (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve('file created');
                    }
                });
            } else {
                appendFile('error.txt', error + '\n', (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve('data appended');
                    }
                });
            }
        });
    });
}

writeError('Something went wrong')
    .then(console.log)
    .catch(console.error);