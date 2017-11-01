// (from: https://medium.com/factory-mind/websocket-node-js-express-step-by-step-using-typescript-725114ad5fe4)
import * as express   from 'express';
import * as http      from 'http';
import * as WebSocket from 'ws';

const HTTP_PORT = 8080;

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>hello, world</h1>');
});


const server = http.createServer(app);

const wss    = new WebSocket.Server({
    server: server
});

wss.on('connection', (ws: WebSocket) => {

    console.log('on connection in WS');
    ws.send(`${new Date()}: Your connection was successful!`);

    ws.on('message', (message: string) => {
        console.log('on message in WS');
        ws.send(`${new Date()}: You sent "${message}"`);
    });
});

server.listen(HTTP_PORT, () => {
    console.log(`${new Date()}: Server is listening on port ${server.address().port}`)
});