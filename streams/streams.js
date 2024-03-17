const fs = require('fs')

const readStream = fs.createReadStream('./read.txt', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./write.txt');

readStream.on('data', (chunk) => {
  console.log("----- New chunk --------");
  writeStream.write(chunk);
});