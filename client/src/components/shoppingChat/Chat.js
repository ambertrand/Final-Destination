import React, { useEffect, useState, useRef } from "react";
import { initiateSocket, disconnectSocket, subscribeToChat, handleTyping, sendMessage } from "../../utils/socket/socket";
import "./listStyle.css";
var user = "User";
var store = "Store"
var storeMessage = user + " is going to " + store;


function Chat() {
    const rooms = ['A', 'B', 'C'];
    const [room, setRoom] = useState(rooms[0]);
    const [typing, setTyping] = useState("")
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);
    //const handleTyping = () => { socket.emit("typing", user + ": is typing") }
    useEffect(() => {
        if (room) initiateSocket(room);
        subscribeToChat((err, data) => {
            if (err) return;
            setChat(oldChats => [...oldChats, data])
        });
        return () => {
            disconnectSocket();
        }
    }, [room]);
    return (
        <div>
            <h1>Room: {room}</h1>
            { rooms.map((r, i) =>
                <button onClick={() => setRoom(r)} key={i}>{r}</button>)}
            <h1>{storeMessage}</h1>
            <div id="list-chat">
                <div id="chat-window">
                    <div id="output" >
                        {chat.map((m, i) => <p key={i}>{m}</p>)}
                    </div>
                    <div id="feedback" onChange ={handleTyping}>{typing}</div>

                </div>
                <input id="message" autoComplete="off" type="text" placeholder="message" value={message}
                    onChange={e => setMessage(e.target.value)} />
                <button id="send" onClick={() => sendMessage(room, message)}>Send</button>
            </div>
        </div>
    )
}

export default Chat;