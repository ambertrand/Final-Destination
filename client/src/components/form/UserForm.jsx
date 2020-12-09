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
    const { userProfile, setUserProfile } = useContext(context);
    // console.log(userProfile);
    const [userName, setUserName] = useState(userProfile.username);

    // const [userPhoto, setUserPhoto] = useState("");
    const [userFirstName, setUserFirstName] = useState(userProfile.first_name);
    const [userLastName, setUserLastName] = useState(userProfile.last_name);

    // const [email, setEmail] = useState(userProfile.email);
    const [groupName, setGroupName] = useState(userProfile.group_name);
    // const [groupRole, setGroupRole] = useState(userProfile.shopper);
    const userId = useContext(userContext);

    // let shopperOrGroupMember = "";

    // function userRole() {
    //     if (userProfile.shopper === true) {
    //         shopperOrGroupMember === "Shopper";
    //     }
    //     if (userProfile.shopper === false) {
    //         shopperOrGroupMember === "Group Member";
    //     }
    //     else {
    //         shopperOrGroupMember === "Please select group role";
    //     }
    // }

    // userRole();
    const [groups, setGroups] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

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
        <div className="userInfoPad pt-5">
            {/* {console.log(userId)} */}
            <Row className="justify-content-center greyBox">
                {/* User image */}
                <Col xs="12" md="4">
                    <Card className="m-3 profileImage">
                        <Card.Img variant="top" src={userProfile.picture} alt={userProfile.first_name} className="img-responsive" width="60px" max-height="100px" />
                        <Card.Body >
                            <h5>{`Shopping group: ${userProfile.group_name}`}</h5>
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
                                All groups:
                                <select id="groupName" onChange={(event) => setGroupName(event.target.value)}>
                                    {/* <option>{userProfile.group_name}</option> */}
                                    {isFetching ? (<option>Loading</option>) : (groups.map(group => (<option key={group.group_name} value={group.group_name}>{group.group_name}</option>)))}
                                </select>
                            </label>
                            <Row className="justify-content-center p-2">
                                <Col sm="auto">
                                    <p>Select group from "All groups" if you would like to join a new group.</p>
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

