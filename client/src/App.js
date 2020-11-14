import React, {useEffect, useState } from 'react';
import UserInfo from "./pages/UserInfo";
import socket from "./utils/socket/socket";


function App() {
  const [chatMessage, setChatMessage] = useState("");
  useEffect( () => {
    socket.on("chat", (data) => {
      setChatMessage(data);
    });
    return () => {
      socket.off("chat");
    }
    // dependency array, put user object in array if we want the callback function to fire everytime userobject sees a change
  }, [])
  return (
    <div className="App">
      <UserInfo />
      {chatMessage}
      <button onClick={() => {socket.emit("chat", "socket works!")}}>emit</button>
    </div>
  );
}
export default App;
