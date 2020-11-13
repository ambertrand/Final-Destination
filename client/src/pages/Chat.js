import React from "react";
import "./styles.css";
import "./chat-script.js";
import "https://cdnjs.cloudflare.com/ajax/libs/socket.io/3.0.1/socket.io.js"

function Chat() {
    return (
        <div>
            <h1>While You're There</h1>
            <div id="shop-chat">
                <input id="store" type="text" placeholder="Store"></input>
                    <button id="shop">Start List</button>
                    <div id="store-div"></div>
                    <div id="chat-window">
                        <div id="output"></div>
                        <div id="feedback"></div>

                    </div>
                    <input id="handle" type="text" placeholder="Handle"></input>
                        <input id="message" type="text" placeholder="message"></input>
                            <button id="send">Send</button>
    </div>
        </div>
    )
}

export default Chat