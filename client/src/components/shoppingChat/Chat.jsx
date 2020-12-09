import React, { useEffect, useState, useRef, useContext, useMemo } from "react";
import axios from 'axios';
import { initiateSocket, disconnectSocket, subscribeToChat, sendMessage, goShopping } from "../../utils/socket/socket";
import "./listStyle.css";
import { useAuth0 } from '@auth0/auth0-react';
// import Shopping from "../../views/ShoppingList";
// import { Store } from "express-session";
import context from '../providers/userProfileProvider/context';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Chat() {
    const { user } = useAuth0();

    const { userProfile, } = useContext(context);
    // const [groupName, setGroupName] = useState(userProfile.group_name);
    const [groups, setGroups] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
<<<<<<< HEAD
=======

>>>>>>> 674e7c32478559b94ef4f1cda747530bb4c4c6fe
    const rooms = [userProfile.group_name];
    const [myList, setList] = useState([]);
    const messageRef = useRef(null);
    const storeRef = useRef(null);
    //shopper
    // const [shopper, setShopper] = useState("Shopper")
    //store and store message
    const [, setStore] = useState("Store")
    // const [storeMessage, setStoreMessage] = useState(shopper + " is going to: " + store)
    //rooms 
<<<<<<< HEAD
    const [room, setRoom] = useState(rooms[0]);
    const [typing, setTyping] = useState("")
    const [message, setMessage] = useState("");
=======
    const [room, ] = useState(rooms[0]);
    //const [room, setRoom] = useState(rooms);
    //const [room, setRoom] = useState(user.group_name);
    const [, setTyping] = useState("")
    const [, setMessage] = useState("");
>>>>>>> 674e7c32478559b94ef4f1cda747530bb4c4c6fe
    const [chat, setChat] = useState([]);

    // console.log(groups);
    const groupFilter = groups.filter(group => group.group_name === room)
    // if (groupFilter[0]) {
    //     groupId=groupFilter[0].id;
    // }
    const activeGroup = useMemo(() => {
        return (
            groups.filter(group => group.group_name === room));
    }, [groups, room]);
    if (groupFilter[0]) {
        // console.log(activeGroup[0].id);
    }
    

    //clears input
    const handleSubmit = (e) => {
        e.preventDefault();
        setList([...myList, messageRef.current.value]);
        messageRef.current.value = "";
        storeRef.current.value = "";
    }
<<<<<<< HEAD
=======

>>>>>>> 674e7c32478559b94ef4f1cda747530bb4c4c6fe
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
                setIsFetching(false);
            })
    }, [isFetching]);

    // useEffect(() => {
    //     // console.log(activeGroup)
    //     if (groupFilter[0]) {
    //     axios.get(`/api/groups/${activeGroup[0].id}`)
    //         .then(response => {
    //             // console.log("user message below");
    //             // console.log(response);
    //             // setIsFetching(false);
    //         })
    //     }
    // }, []);

    return (
        <div>
            <Row className="justify-content-center pt-5">
                <Col xs={10} className="greyBox rounded mb-0">


                    {/* <Row className="justify-content-center">

                        <Col sm={4}>
<<<<<<< HEAD
                            <h1>Group: {room}</h1>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col sm={4}>
                            <p>1.) Select group.</p>
                        </Col>
                        <Col sm={2}>
=======
                            <h1
                            >Group: {room}</h1>
>>>>>>> 674e7c32478559b94ef4f1cda747530bb4c4c6fe
                            {rooms.map((r, i) =>
                                <Button className="groupButton" onClick={() => setRoom(r)} key={i}>{r}
                                </Button>)}
                        </Col>
<<<<<<< HEAD
                    </Row>
=======
                    </Row> */}

>>>>>>> 674e7c32478559b94ef4f1cda747530bb4c4c6fe
                    <Row className="justify-content-center pt-2">
                        <Col sm={4}>
                            <p>If you are shopper, enter a store and select "go shopping." Otherwise, skip right to adding shopping items!</p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center pt-2">
                        <Col sm={4} md={3}>
                            <input type="text" defaultValue="" placeholder="Store"
                                onChange={() => setStore(storeRef.current.value)} ref={storeRef}>
                            </input>
                        </Col>
<<<<<<< HEAD
                        <Col sm={4} md={3}>
                            <Button className="goShopping" onClick={() => goShopping(room, user.name + " is going to: " + storeRef.current.value)}>Go Shopping</Button>
                        </Col>
=======
>>>>>>> 674e7c32478559b94ef4f1cda747530bb4c4c6fe
                    </Row>
                    <Row className='justify-content-center pt-2'>
                        <Col sm={2} md={2}>
                            <Button className="goShopping" onClick={() => goShopping(room, user.name + " is going to: " + storeRef.current.value)}>Go Shopping</Button>
                        </Col>
                    </Row>
                    

                    <div id="list-chat">
                        <div id="chat-window">
                            {/* <div id="output">
                                <p>Hello</p>
                            </div> */}
                            <div id="output" >
                                {chat.map((m, i) => <p key={i}>{m}<input className="checkbox" type="checkbox"></input></p>)}
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <input id="message" autoComplete="off" type="text"
                                defaultValue=""
                                placeholder="message"
                                onChange={() => setMessage(messageRef.current.value)} ref={messageRef}
                            />
                            <button id="send"
                                onClick={() => sendMessage(activeGroup[0], user.name, messageRef.current.value)}
                            >Send</button>
                        </form>
                    </div>
                </Col>
            </Row>
        </div>

    )
}

export default Chat;