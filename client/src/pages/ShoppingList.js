import React, { useEffect, useState } from "react";
import socket from "../utils/socket/socket";

function Shopping() {
    const [chatMessage, setChatMessage] = useState("");
    useEffect(() => {
      socket.on("chat", (data) => {
        setChatMessage(data);
      });
      return () => {
        socket.off("chat");
      }
      // dependency array, put user object in array if we want the callback function to fire everytime userobject sees a change
    }, [])
    return (
        <div>
        <p>Shopping list works!</p>
        {chatMessage}
        <label>Socket in shopping list</label>
        <button onClick={() => { socket.emit("chat", "socket works!") }}>emit</button>
        </div>
    )
}

export default Shopping;
