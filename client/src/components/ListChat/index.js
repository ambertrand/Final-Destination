import React from "react";
import StartList from "./StartList"
import ChatWindow from "./ChatWindow"
import AddList from "./AddList"


function ListChat() {
    return (
        <div id="list-chat">
           <StartList/>
           <ChatWindow/>
           <AddList/>
        </div>
    )
}

export default ListChat;