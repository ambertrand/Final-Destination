import React, { useEffect, useState, useRef } from "react";
import socket from "../utils/socket/socket";
// import StartList from "../components/Chat/StartList";
//import ChatWindow from "../components/Chat/ChatWindow";
// import AddComment from "../components/Chat/AddComment";
import "./shopStyle.css";

function Shopping() {
    const messageRef = useRef();
    const typingRef = useRef();
    // const [chatMessage, setChatMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const handleSendMessage = () => { socket.emit("chat", "User: " + messageRef.current.value) }
    const handleTyping = () => {socket.emit("typing", "User: " + " is typing")}
    useEffect(() => {
        socket.on("chat", (data) => {
            setMessages((prevMessages) => ([...prevMessages, data]));
            console.log(data)
        });
        socket.on("typing", (data) => {
          console.log("is typing")
        });
        return () => {
            socket.off("chat");
        }
        // dependency array, put user object in array if we want the callback function to fire everytime userobject sees a change
    }, [])
    return (
        <div>
            <h1>Shopping List</h1>
            {/* <p>Shopping list works!</p> */}
            {/* {chatMessage} */}
            {/* <label>Socket in shopping list</label> */}
            {/* <button onClick={() => { socket.emit("chat", "socket works!") }}>emit</button> */}
            {/* <div id="list-chat">
                <StartList />
                <ChatWindow />
                <AddComment />
            </div> */}
            <div id="list-chat">
                {/* <input id="store" type="text" placeholder="Store"></input>
                <button id="shop">Start List</button> */}
                <div id="store-div"></div>
                <div id="chat-window">
                    <div id="output">
                        {messages.map((message, i) => (
                            <p key={i}>{message}</p>
                        ))}
                    </div>
                    <div id="feedback" ref={typingRef}></div>

                </div>
                {/* <input id="handle" type="text" placeholder="Handle"></input> */}
                <input id="message" type="text" placeholder="message" ref={messageRef} onInput={handleTyping}/>
                <button id="send" onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Shopping;
