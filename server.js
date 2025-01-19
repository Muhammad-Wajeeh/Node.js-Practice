import http from 'http';

const server = http.createServer((req, res) =>{
    res.write('Hello World!');
    res.end();
});

server.listen(8000, () =>{
    console.log('server is running on port 8000');
});