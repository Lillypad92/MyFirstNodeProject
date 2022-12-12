// creating a server
const http = require('http');
const fs = require('fs');

const server =http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
    // send content back to user
    res.setHeader('Content-Type', 'text/html');

    // path 
    let path = './views/';
    switch(req.url) {
        case '/':
        path += 'index.html';
        res.statusCode = 200;
        break;
        case '/about': 
        path += 'about.html';
        res.statusCode = 200;
        break;
        case '/about-blah': 
        res.statusCode = 301;
        res.setHeader('Location', '/about');
        res.end();
        break;
        default:
        path += '404.html';
        res.statusCode = 404;
        break;
    }

    // send an html file
    fs.readFile(path, (err, data) =>{
        if (err) {
            console.log(err);
            res.end();
        } else {
        // if you have one data, you can directly put the data in res.end(); method
        // res.write(data) gives you two html text on the page
            // res.write(data);
            
            res.end(data);
        }
    })

    // res.write('<head><link rel="stylesheet" href="#"></head>')
    // what text is sent back to user
    // res.write('<p>hello, ninjas</p>');
    // res.write('<p>hello again, ninjas</p>');
    // ending the response
    // res.end();
});


// listening to the server: localhost, 3000
server.listen(3000, 'localhost', () => {
    console.log('listening for requets on port 3000')
});