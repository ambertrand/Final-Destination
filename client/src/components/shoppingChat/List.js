import React, { useEffect, useState, useRef } from "react";
import socket from "../../utils/socket/socket";
import "./listStyle.css";
var user = "User";
var store = "Store"
var storeMessage = user + " is going to " + store;
//room test
var room1 = "room1";
var room2 = "room2";

function List() {
    const messageRef = useRef();
    const [messages, setMessages] = useState([]);
    const [typing, setTyping] = useState("")
    const handleSendMessage = () => {
        socket.emit("chat", user + ": " + messageRef.current.value)
        messageRef.current.value = ""
    }
    //room test
    //connect room 1
    const connectRoom1 = () => {
        socket.on('connect', function () {
            socket.emit('room1', room1)
            console.log("connected to room1")
        });
    }
    //connect room 2
    const connectRoom2 = () => {
        socket.on('connect', function () {
            socket.emit('room2', room2)
            console.log("connected to room2")
        });
    }
    //commented out for now
    // socket.on('connect', function(){
    //     socket.emit('room1', room1)
    // });
    // socket.on('connect', function(){
    //     socket.emit('room2', room2)
    // });
    //room test
    socket.on('message', function (data) {
        console.log('Incoming message:', data);
    });
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
            {/* connect to room 1 */}
            <button onClick={connectRoom1}>Room1</button>
            {/* connect to room 2 */}
            <button onClick={connectRoom2}>Room2</button>
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
