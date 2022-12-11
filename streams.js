// fs stands for filesystem
const fs = require('fs');

const readStream = fs.createReadStream('./Docs/blog3.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./Docs/blog4.txt');

// .on on readStream is an eventlistener, it listens to data event from readStream, look on row 4
// readStream.on('data', (chunk) => {
//     console.log('----- NEW CHUNK -----');
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// })

//piping
readStream.pipe(writeStream);