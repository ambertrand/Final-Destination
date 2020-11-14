import React, {useEffect, useState } from 'react';
import UserInfo from "./pages/UserInfo";
<<<<<<< HEAD
import ShoppingList from "./pages/ShoppingList.js";
=======
import socket from "./utils/socket/socket";

>>>>>>> 7868c3cfeb64bf1f14d2dd6bc043af6b2eb910e8

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
<<<<<<< HEAD
      {/* <UserInfo /> */}
      <ShoppingList/>
=======
      <UserInfo />
      {chatMessage}
      <button onClick={() => {socket.emit("chat", "socket works!")}}>emit</button>
>>>>>>> 7868c3cfeb64bf1f14d2dd6bc043af6b2eb910e8
    </div>
  );
}
export default App;
