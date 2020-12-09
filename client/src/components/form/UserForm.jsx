import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';
// import { useAuth0 } from '@auth0/auth0-react';
import userInfo from './userInfo';
// import getUserInfo from './getUserInfo';
import userContext from './userContext';
import context from '../providers/userProfileProvider/context';

// React Bootstrap
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function UserForm() {
    // const { user } = useAuth0();
    const { userProfile, } = useContext(context);
    // console.log(userProfile);
    const [userName, setUserName] = useState(userProfile.username);
    const [userFirstName, setUserFirstName] = useState(userProfile.first_name);
    const [userLastName, setUserLastName] = useState(userProfile.last_name);
    const [groupName, setGroupName] = useState(userProfile.group_name);
    const userId = useContext(userContext);
    const [groups, setGroups] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    // added to try to catch when user first logs in
    // if (userProfile.group_name === "") {
    //     setGroupName("Please choose a group!");
    // }

    useEffect(() => {
        axios.get("/api/groups")
            .then(response => {
                if (Array.isArray(response.data)) {
                    setGroups(response.data);
                    // console.log("user groups below");
                    // console.log(response);
                    setIsFetching(false);
                }
            })
    }, []);


    return (
        <div className="userInfoPad pt-5">
            {/* {console.log(userId)} */}
            <Row className="justify-content-center greyBox">
                {/* User image */}
                <Col xs="12" md="4">
                    <Card className="m-3 profileImage">
                        <Card.Img variant="top" src={userProfile.picture} alt={userProfile.first_name} className="img-responsive" width="60px" max-height="100px" />
                        <Card.Body >
                            <h5>{`${userProfile.first_name} ${userProfile.last_name}`}</h5>
                        </Card.Body>
                    </Card>
                </Col>

                {/* User form */}
                <Col xs="12" md="8" >
                    <Card className="bg-light m-3">
                        {/* https://reactjs.org/docs/forms.html */}
                        <form>
                            <label>
                                First Name:
                                <input type="text" defaultValue={userProfile.first_name} name="firstName" onChange={(event) => setUserFirstName(event.target.value)} />
                                {/* type="text" defaultValue= id="email" onChange={(event) => setEmail(event.target.value)} /> */}
                            </label>
                            <label>
                                Last Name:
                                <input type="text" defaultValue={userProfile.last_name} name="lastName" onChange={(event) => setUserLastName(event.target.value)} />
                            </label>
                            {/* <label>
                                Group role:&nbsp;
                                <select id="isShopper" onChange={(event) => setGroupRole(event.target.value)}>
                                    <option>{shopperOrGroupMember}</option>
                                    <option value={true}>Shopper</option>
                                    <option value={false}>Group Member</option>
                                </select>
                            </label> */}
                            <label>
                                Username:
                                <input type="text" defaultValue={userProfile.username} name="userName" onChange={(event) => setUserName(event.target.value)} />
                            </label>
                            <label>
                                <p>Your Group: {userProfile.group_name}</p>
                                <select id="groupName" onChange={(event) => setGroupName(event.target.value)}>
                                    <option>Choose new group</option>
                                    {isFetching ? (<option>Loading</option>) : (groups.map(group => (<option key={group.group_name} value={group.group_name}>{group.group_name}</option>)))}
                                </select>
                            </label>
                            <Row className="justify-content-center p-2">
                                <Col sm="auto">
                                    <p>Select another group if you would like to join a new group.</p>
                                </Col>
                            </Row>
                            <Row className="justify-content-center">
                                <Col xs={5}>
                                    <Button type="submit" className="mb-2" id="updateUserInfo" onClick={event => userInfo(event, userId,
                                        {
                                            userName,
                                            groupName,
                                            userFirstName,
                                            userLastName
                                        }
                                    )}>
                                        Update Profile Info
                                </Button>
                                </Col>
                            </Row>
                        </form>
                    </Card>
                </Col>
            </Row>

        </div>
    )
}

export default UserForm;

