import React, { useEffect, useState, useRef } from "react";
import { initiateSocket, disconnectSocket, subscribeToChat, handleTyping, sendMessage } from "../../utils/socket/socket";
import "./listStyle.css";
import { useAuth0 } from '@auth0/auth0-react';


function Chat() {
    const { user } = useAuth0();
    //const rooms = ['1', '2'];
    //const { rooms }  = useAuth0();
    const rooms = ["Default", "Test", user.group_name];
    const [myList, setList] = useState([]);
    const messageRef = useRef(null);
    //const [userName, setUserName] = useState(user.nickname);
    const store = "Store"
    const storeMessage = user.name + " is going to " + store;
    const [room, setRoom] = useState(rooms[0]);
    //const [room, setRoom] = useState(rooms);
    //const [room, setRoom] = useState(user.group_name);
    const [typing, setTyping] = useState("")
    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([]);
    //clears input
    const handleSubmit = (e) => {
        e.preventDefault();
        setList([...myList, messageRef.current.value]);
        // you can manually set the value of your input by the node ref
        messageRef.current.value = "";
        // Or you can reset your form element to its default values
        // e.currentTarget.reset();
    }
    //does nothing atm
    const handleTyping = () => {
        setMessage()
        //want to put room but if I put room, message it just displays the room number
        setTyping("" + user.name + ": is typing")
        console.log(typing)
    }
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
            <h1
                //won't send message
                // onChange={() => setMessage(user.name + " Joined Group" + room)}
                // onChange={() => sendMessage(room, user.name + " Joined Group" + room)}
                // onChange={console.log("room changed")}
            >Group: {room}</h1>
            { rooms.map((r, i) =>
                <button
                    //onChange={() => sendMessage(room, user.name + " Joined Group" + room)} 
                    onClick={() => setRoom(r)} key={i}>{r}
                </button>)}
            <h1>{storeMessage}</h1>
            <div id="list-chat">
                <div id="chat-window">
                    <div id="output" >
                        {chat.map((m, i) => <p key={i}>{m}<input class="checkbox" type="checkbox"></input></p>)}
                    </div>
                    <div id="feedback" >{typing}</div>
                </div>
                <form onSubmit={handleSubmit}>
                    <input id="message" autoComplete="off" type="text"
                        defaultValue=""
                        placeholder="message"
                        //value={message}
                        onChange={() => setMessage(messageRef.current.value)} ref={messageRef}
                    //onKeyDown={() => sendMessage(room, user.name + ": " + messageRef.current.value)}
                    //onChange={() => handleTyping()}
                    />
                    <button id="send"
                        onClick={() => sendMessage(room, user.name + ": " + messageRef.current.value)}
                    >Send</button>
                </form>
            </div>
        </div>
    )
}

export default Chat;