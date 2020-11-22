import React, { useEffect, useState, useRef } from "react";
import socket from "../../utils/socket/socket";
import "./listStyle.css";
var user = "User";
var store = "Store"
var storeMessage = user + " is going to " + store;
function List() {
    const messageRef = useRef();
    const [messages, setMessages] = useState([]);
    const [typing, setTyping] = useState("")
    const handleSendMessage = () => {
        socket.emit("chat", user + ": " + messageRef.current.value)
        messageRef.current.value = ""
    }
    const handleTyping = () => { socket.emit("typing", user + ": is typing") }
    useEffect(() => {
        socket.on("chat", (data) => {
            setMessages((prevMessages) => ([...prevMessages, data]));
            setTyping("")
        });
        socket.on("typing", (data) => {
            setTyping(data)
            console.log(data)
        });
        return () => {
            socket.off("chat");
        }
        // dependency array, put user object in array if we want the callback function to fire everytime userobject sees a change
    }, [])
    return (
        <div>
            <h1>{storeMessage}</h1>
            <div id="list-chat">
                <div id="chat-window">
                    <div id="output">
                        {messages.map((message, i) => (
                            <p key={i}>{message}</p>
                        ))}
                    </div>
                    <div id="feedback">{typing}</div>

                </div>
                <input id="message" autoComplete="off" type="text" placeholder="message" ref={messageRef} onChange={handleTyping} />
                <button id="send" onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    )
}

export default List;
