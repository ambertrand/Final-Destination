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

        socket.on('disconnect', () =>
            console.log(`Disconnected: ${socket.id}`));
        socket.on('join', (room) => {
            console.log(`Socket ${socket.id} joining ${room}`);
            socket.join(room);
        });
        socket.on('chat', (data) => {
            const { message, room } = data;
            console.log(`msg: ${message}, room: ${room}`);
            io.to(room).emit('chat', message);
        });
        socket.on('shopping', (data) => {
            const { storeMessage, room } = data;
            console.log(`msg: ${storeMessage}, room: ${room}`);
            io.to(room).emit('chat', storeMessage);
        });
    });
}

module.exports = initializeSocketio;
