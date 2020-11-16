import React, { useEffect, useState } from "react";
import socket from "../utils/socket/socket";
// import StartList from "../components/Chat/StartList";
// import ChatWindow from "../components/Chat/ChatWindow";
// import AddComment from "../components/Chat/AddComment";
import "./shopStyle.css";

function Shopping() {
    const [chatMessage, setChatMessage] = useState("");
    var message = "test";
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
            {/* {chatMessage} */}
            <label>Socket in shopping list</label>
            {/* <button onClick={() => { socket.emit("chat", "socket works!") }}>emit</button> */}
            {/* <div id="list-chat">
                <StartList />
                <ChatWindow />
                <AddComment />
            </div> */}
            <div id="list-chat">
                <input id="store" type="text" placeholder="Store"></input>
                <button id="shop">Start List</button>
                <div id="store-div"></div>
                <div id="chat-window">
                    <div id="output">
                        <p>{chatMessage}</p>
                    </div>
                    <div id="feedback"></div>

                </div>
                <input id="handle" type="text" placeholder="Handle"></input>
                <input id="message" type="text" placeholder="message"></input>
                <button id="send" onClick={() => { socket.emit("chat", "User:" + message) }}>Send</button>
            </div>
        </div>
    )
}

export default Shopping;
