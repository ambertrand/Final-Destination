import React, { useEffect, useState, useRef, useContext } from "react";
import axios from 'axios';
import { initiateSocket, disconnectSocket, subscribeToChat, handleTyping, sendMessage, goShopping } from "../../utils/socket/socket";
import "./listStyle.css";
import { useAuth0 } from '@auth0/auth0-react';
import Shopping from "../../views/ShoppingList";
import { Store } from "express-session";
import context from '../providers/userProfileProvider/context';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Chat() {
    const { user } = useAuth0();

    const { userProfile, setUserProfile } = useContext(context);
    const [groupName, setGroupName] = useState(userProfile.group_name);
    const [groups, setGroups] = useState({});
    const [isFetching, setIsFetching] = useState(true);

    //const rooms = ['1', '2'];
    //const { rooms }  = useAuth0();
    // const rooms = ["Default", "Test"];
    // const rooms = ["Default", "Test", userProfile.group_name];
    const rooms = [userProfile.group_name];
    const [myList, setList] = useState([]);
    const messageRef = useRef(null);
    const storeRef = useRef(null);
    //const [userName, setUserName] = useState(user.nickname);
    //const store = "Store"
    //const storeMessage = user.name + " is going to " + store;
    //shopper
    const [shopper, setShopper] = useState("Shopper")
    //store and store message
    const [store, setStore] = useState("Store")
    const [storeMessage, setStoreMessage] = useState(shopper + " is going to: " + store)
    //rooms 
    const [room, setRoom] = useState(rooms[2]);
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
        storeRef.current.value = "";
    }
    //does nothing atm
    // const handleTyping = () => {
    //     setMessage()
    //     //want to put room but if I put room, message it just displays the room number
    //     setTyping(user.name + ": is typing")
    //     console.log(typing)
    // }
    // const newShoppingTrip = () => {
    //     console.log("New shopping trip started")
    //     let newStore = "New Store";
    //     let newShopper = user.name;
    //     setStore(newStore)
    //     setShopper(newShopper)
    //     console.log(store)
    //     setStoreMessage(newShopper + " is going to: " + newStore)
    //     goShopping(room, newShopper + " is going to: " + newStore)
    // }
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
    useEffect(() => {
        axios.get("/api/groups")
            .then(response => {
                setGroups(response.data);
                // console.log("user groups below");
                // console.log(response);
                setIsFetching(false);
            })
    }, []);
    return (
        <div>
            <Row className="justify-content-center pt-5">
                <Col sm={8} className="greyBox">


                    <Row className="justify-content-center">

                        <Col sm={4}>
                            <h1
                            //won't send message
                            // onChange={() => setMessage(user.name + " Joined Group" + room)}
                            // onChange={() => sendMessage(room, user.name + " Joined Group" + room)}
                            // onChange={console.log("room changed")}
                            >Group: {room}</h1>
                        </Col>
                    </Row>
                    {/* {console.log(userProfile.group_name)} */}
                    <Row className="justify-content-center">
                        <Col sm={4}>
                            <p>1.) Select group.</p>
                        </Col>
                        <Col sm={2}>
                            {rooms.map((r, i) =>
                                <Button className="groupButton"
                                    //onChange={() => sendMessage(room, user.name + " Joined Group" + room)} 
                                    onClick={() => setRoom(r)} key={i}>{r}
                                </Button>)}
                        </Col>
                    </Row>
                    {/* <h1>{storeMessage}</h1> */}
                    {/* <div id="storeMessage">
                {shopping.map((m, i) => <h1 key={i}>{m}</h1>)}
            </div> */}
                    {/* <button onClick={() => newShoppingTrip()}>Go Shopping</button> */}
                    <Row className="justify-content-center pt-2">
                        <Col sm={4}>
                            <p>2. If you are shopper, enter a store and select "go shopping."</p>
                        </Col>
                        <Col sm={4} md={3}>
                            <input type="text" defaultValue="" placeholder="Store"
                                onChange={() => setStore(storeRef.current.value)} ref={storeRef}>
                            </input>
                        </Col>
                        <Col sm={4} md={3}>
                            {/* <form onSubmit={handleSubmit}> */}
                            <Button className="goShopping" onClick={() => goShopping(room, user.name + " is going to: " + storeRef.current.value)}>Go Shopping</Button>
                            {/* </form> */}
                        </Col>
                    </Row>
                    <Row className="justify-content-center pt-2">
                        <Col sm={4}>
                            <p>3. Add shopping items!</p>
                        </Col>
                    </Row>



                    <div id="list-chat">
                        <div id="chat-window">
                            <div id="output" >
                                {chat.map((m, i) => <p key={i}>{m}<input class="checkbox" type="checkbox"></input></p>)}
                            </div>
                            {/* <div id="feedback" >{typing}</div> */}
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
                </Col>
            </Row>
        </div>

    )
}

export default Chat;