const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const { Client } = require('pg')

app.use('/static', express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/dev', (req, res) => {
  res.sendFile(__dirname + "/dev.html");
});

io.on('connection', (socket) => {

    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

    socket.on('color', (msg) => {
      io.emit('color', msg);
    });

  });


server.listen(8080, () => {
  console.log('listening on *:8080');
});
