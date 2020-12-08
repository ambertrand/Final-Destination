// import {io} from "socket.io-client";
// const socket = io.connect(process.env.PORT || "http://localhost:3001");
//export default socket;

import io from 'socket.io-client';
let socket;
export const initiateSocket = (room) => {
  socket = io(process.env.PORT || 'http://localhost:3000');
  console.log(`Connecting socket...`);
  if (socket && room) socket.emit('join', room);
}
export const disconnectSocket = () => {
  console.log('Disconnecting socket...');
  if(socket) socket.disconnect();
}
export const subscribeToChat = (cb) => {
  if (!socket) return(true);
  socket.on('chat', msg => {
    console.log('Websocket event received!');
    return cb(null, msg);
  });
}
export const sendMessage = (room, message) => {
  if (socket) socket.emit('chat', {room, message });
  console.log("message sent")
}
export const goShopping = (room, storeMessage) => {
  if (socket) socket.emit('shopping', {room, storeMessage });
  console.log("new shopping trip")
}
// export const handleTyping = (room, message) =>{
//     if (socket) socket.emit('typing', {room, message});
//     console.log("typing")
// }
