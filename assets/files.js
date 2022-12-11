// fs stands for filesystem
const fs = require('fs');

// reading files
fs.readFile('./Docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
})

console.log('last line');

//writing files
fs.writeFile('./Docs/blog2.txt', 'hello, world', () => {
    console.log('file was written');
})

//directories
// mkdir stands for make directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    })
}

//deleting files
if (fs.existsSync('./Docs/deleteme.txt')) {
    fs.unlink('./Docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted');
    })
}