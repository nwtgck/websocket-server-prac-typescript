import * as http from 'http'


const server: http.Server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    res.end('<h1>hello, world</h1>')
});

server.listen(8080);

console.log('hello, world');