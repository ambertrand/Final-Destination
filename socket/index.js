const socketio = require('socket.io');

const initializeSocketio = (server) => {
    const io = socketio(server, {
        cors: {
          origin: "http://localhost:3000",
          methods: ["GET", "POST"],
          allowedHeaders: ["my-custom-header"],
          credentials: true
        }
      });
    io.on('connection', function (socket) {
        console.log("made socket connection", socket.id)
    
        socket.on('chat', function (data) {
            io.sockets.emit('chat', data)
        });
    
        socket.on('start-shop', function (data) {
            io.sockets.emit('start-shop', data)
        });
    
        socket.on('typing', function (data) {
            socket.broadcast.emit('typing', data)
        });
    });
}

module.exports = initializeSocketio;
