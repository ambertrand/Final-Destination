// import {io} from "socket.io-client";
// const socket = io.connect(process.env.PORT || "http://localhost:3001");
//export default socket;

import axios from 'axios';
import io from 'socket.io-client';
let socket;
export const initiateSocket = (room) => {
  socket = io('http://localhost:3000');
  // console.log(`Connecting socket...`);
  if (socket && room) socket.emit('join', room);
}
export const disconnectSocket = () => {
  // console.log('Disconnecting socket...');
  if(socket) socket.disconnect();
}
export const subscribeToChat = (cb) => {
  if (!socket) return(true);
  socket.on('chat', msg => {
    // console.log('Websocket event received!');
    return cb(null, msg);
  });
}
export const sendMessage = (group, userName, message) => {
  
  if (socket) socket.emit('chat', {
    room: group.group_name, 
    message: `${userName}: ${message}` });
  // console.log("message sent")
  // console.log(group.id);

  axios.put(`/api/groups/${group.id}`, {userName, message})
  .then((response) => {
      // console.log(response);
  }).catch(err => console.log(err));
}
export const goShopping = (room, storeMessage) => {
  if (socket) socket.emit('shopping', {room, storeMessage });
  // console.log("new shopping trip")
}
// export const handleTyping = (room, message) =>{
//     if (socket) socket.emit('typing', {room, message});
//     console.log("typing")
// }
