const socketio = require('socket.io');

let rooms = ["room1", "room2"] 

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
        //room test
        room1 = "room1";
        socket.on('join1', function(room1) {
            socket.join(room1);
            console.log(room1)
        });
        room2 = "room2";
        socket.on('join2', function(room2) {
            socket.join(room2);
            console.log(room2)
        });
        //socket.in(room).emit('message', 'what is going on, party people?');
        // socket.in('foobar').emit('message', 'anyone in this room yet?');
    });
}

module.exports = initializeSocketio;
