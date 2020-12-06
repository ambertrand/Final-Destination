import React, { useContext, useState, useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import userInfo from './userInfo';
import getUserInfo from './getUserInfo';
import userContext from './userContext';
import context from '../providers/userProfileProvider/context';

// React Bootstrap
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function UserForm() {
    const { user } = useAuth0();
    const { userProfile, setUserProfile } = useContext(context);
    console.log(userProfile);
    const [userName, setUserName] = useState(userProfile.username);

    // const [userPhoto, setUserPhoto] = useState("");
    // const [userFirstName, setUserFirstName] = useState("");

    const [email, setEmail] = useState(userProfile.email);
    const [groupName, setGroupName] = useState(userProfile.group_name);
    const [groupRole, setGroupRole] = useState(userProfile.shopper);
    const userId = useContext(userContext);

    // useEffect(() => {
    //     userPhoto 
    // });

    // getUserInfo(userId);

    return (
        <div className="userInfoPad">
            {console.log(userId)}
            <Row className="justify-content-center">
                {/* User image */}
                <Col xs="12" md="4">
                    <Card className="m-3 profileImage">
                        <Card.Img variant="top" src={userProfile.picture} alt={userProfile.first_name} className="img-responsive" width="60px" max-height="100px" />
                        {/* <Card.Body >
                            <h4>{`${userProfile.first_name} ${userProfile.last_name}`}</h4>
                        </Card.Body> */}
                    </Card>
                </Col>

                {/* User form */}
                <Col xs="12" md="8" >
                    <Card className="bg-light m-3">
                        {/* https://reactjs.org/docs/forms.html */}
                        <form>
                            <label>
                                Username:
                                {console.log(userProfile.username)}
                                <input type="text" defaultValue={userProfile.username} name="userName" onChange={(event) => setUserName(event.target.value)} />
                            </label>
                            <label>
                                Email:
                                <h6>{userProfile.email}</h6>
                                {/* type="text" defaultValue= id="email" onChange={(event) => setEmail(event.target.value)} /> */}
                            </label>
                            <label>
                                Group name:&nbsp;
                                {/* <input type="text" placeholder={user.email} id="email" /> */}
                                <select id="groupName" onChange={(event) => setGroupName(event.target.value)}>
                                    <option value="0">{userProfile.group_name}</option>
                                    <option value="1">team1</option>
                                    <option value="2">team2</option>
                                    <option value="3">team3</option>
                                    <option value="4">team4</option>
                                </select>
                            </label>
                            <label>
                                Group role:&nbsp;
                                <select id="isShopper" onChange={(event) => setGroupRole(event.target.value)}>
                                    <option>{userProfile.shopper}</option>
                                    <option value={true}>Shopper</option>
                                    <option value={false}>Group Member</option>
                                </select>
                            </label>
                            <Row className="justify-content-center">
                                <Col sm="auto">
                                    <Button type="submit" className="mb-2" id="updateUserInfo" onClick={event => userInfo(event, userId,
                                        {
                                            userName,
                                            email,
                                            groupName,
                                            groupRole
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

