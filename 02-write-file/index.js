const { stdin, stdout } = process;
const fs = require('fs');

const output = fs.createWriteStream('02-write-file/destination.txt');

stdout.write('Набери текст\n');
    stdin.on('data', data => {
        output.write(data);
    stdin.on('error', error => console.log('Error', error.message));
  process.on('SIGINT', () => {
        stdout.write('До новых встреч!');
        process.exit(0);
})
});
