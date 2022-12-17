const express = require('express');
const { ExpressPeerServer } = require('peer');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res, next) => res.send('Hello world!'));

const server = app.listen(9000);

const peerServer = ExpressPeerServer(server, {
    debug: true
});

app.use('', peerServer);

peerServer.on('connection', (client) => { console.log('client connected');});
peerServer.on('disconnect', (client) => { console.log('client disconnected');});