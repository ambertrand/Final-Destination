import React, {useEffect} from 'react';
import UserInfo from "./pages/UserInfo";
import socket from "./utils/socket/socket";


function App() {
  useEffect( () => {
    socket.on("chat", (data) => {
      console.log(data);
    });
    return () => {
      socket.off("chat");
    }
    // dependency array, put user object in array if we want the callback function to fire everytime userobject sees a change
  }, [])
  return (
    <div className="App">
      <UserInfo />
      <button onClick={() => {socket.emit("chat", "socket works!")}}>emit</button>
    </div>
  );
}

export default App;
