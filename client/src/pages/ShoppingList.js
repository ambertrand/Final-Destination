import React, { useEffect, useState } from "react";
import socket from "../utils/socket/socket";
import StartList from "../components/StartList";
import ChatWindow from "../components/ChatWindow";
import AddList from "../components/AddList";
import "./shopStyle.css";

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
            {/* {chatMessage} */}
            <label>Socket in shopping list</label>
            {/* <button onClick={() => { socket.emit("chat", "socket works!") }}>emit</button> */}
            {/* <div id="list-chat">
                <StartList />
                <ChatWindow />
                <AddList />
            </div> */}
            <div id="list-chat">
                <input id="store" type="text" placeholder="Store"></input>
                <button id="shop">Start List</button>
                <div id="store-div"></div>
                <div id="chat-window">
                    <div id="output"> {chatMessage}</div>
                    <div id="feedback"></div>

                </div>
                <input id="handle" type="text" placeholder="Handle"></input>
                <input id="message" type="text" placeholder="message"></input>
                <button id="send" onClick={() => { socket.emit("chat", "Message sent") }}>Send</button>
            </div>
        </div>
    )
}

export default Shopping;
