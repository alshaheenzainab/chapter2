const express = require('require');
const server = express , {};

server.get('/', (_reg, res) {
    res.send('<h1>Hello World</h1>');

});

server.listen('/', (30000, function () {
    console.log('Ready on port 3000');

} );
