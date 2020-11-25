import React, { useEffect, useState, useRef } from "react";
import {socket, initiateSocket, disconnectSocket, subscribeToChat, handleTyping, sendMessage } from "../../utils/socket/socket";
import "./listStyle.css";
var user = "User";
var store = "Store"
var storeMessage = user + " is going to " + store;


function Chat() {
    const rooms = ['1', '2'];
    const messageRef = useRef();
    const [room, setRoom] = useState(rooms[0]);
    const [typing, setTyping] = useState("")
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);
    const handleSendMessage = () => {
        sendMessage(room, messageRef.current.value)
        //messageRef.current.value = "";
    }
    //const handleTyping = () => { socket.emit("typing", user + ": is typing") }
    useEffect(() => {
        if (room) initiateSocket(room);
        subscribeToChat((err, data) => {
            if (err) return;
            setChat(oldChats => [...oldChats, data])
            setTyping("")
        });
        return () => {
            disconnectSocket();
        }
    }, [room]);
    return (
        <div>
            <h1>Group: {room}</h1>
            { rooms.map((r, i) =>
                <button onClick={() => setRoom(r)} key={i}>{r}</button>)}
            <h1>{storeMessage}</h1>
            <div id="list-chat">
                <div id="chat-window">
                    <div id="output" >
                        {chat.map((m, i) => <p key={i}>{m}</p>)}
                    </div>
                    <div id="feedback" >{typing}</div>
                </div>
                <input id="message" autoComplete="off" type="text" placeholder="message" value={message}
                //not sure what e does anymore
                    onChange={e => setMessage(messageRef.current.value)} ref={messageRef}/>
                <button id="send" onClick={() => sendMessage(room, user + ": " + messageRef.current.value)}
                //onchange={e => messageRef.current.value = ""}
                // {handleSendMessage()}
                onChange={() => handleTyping(room, user + ": is typing." )}
                    >Send</button>
            </div>
        </div>
    )
}

export default Chat;