// creating a server
const http = require('http');

const server =http.createServer((req, res) => {
    console.log('request made');
});


// listening to the server: localhost, 3000
server.listen(3000, 'localhost', () => {
    console.log('listening for requets on port 3000')
})