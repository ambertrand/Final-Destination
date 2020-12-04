import React, {useContext} from "react";
import { useAuth0 } from '@auth0/auth0-react';
import userInfo from './userInfo';
import userContext from './userContext';

// React Bootstrap
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useState } from "react";
// import Form from 'react-bootstrap/Form';

function UserForm() {
    const { user } = useAuth0();
    const [userName, setUserName] = useState(user.nickname);
    const [email, setEmail] = useState(user.email);
    const [groupName, setGroupName] = useState("");
    const [groupRole, setGroupRole] = useState("");
    const userId = useContext(userContext);

    return (
        <div>
            {console.log(userId)}
            <Row className="justify-content-center">
                {/* User image */}
                <Col xs="12" md="4">
                    <Card className="m-3 profileImage">
                        <Card.Img variant="top" src={user.picture} alt={user.name} className="img-responsive" width="60px" max-height="100px" />
                        <Card.Body >
                            <h4>{user.name}</h4>
                        </Card.Body>
                    </Card>
                </Col>
                
                {/* User form */}
                <Col xs="12" md="8" >
                    <Card className="bg-light m-3">
                        {/* https://reactjs.org/docs/forms.html */}
                        <form>
                            <label>
                                Username:
                                <input type="text" placeholder={user.nickname} name="userName" onChange={(event) => setUserName(event.target.value)}/>
                            </label>
                            <label>
                                Email:
                                <input type="text" defaultValue={user.email} id="email" onChange={(event) => setEmail(event.target.value)}/>
                            </label>
                            <label>
                                Group name:&nbsp;
                                {/* <input type="text" placeholder={user.email} id="email" /> */}
                                <input type="text" defaultValue={user.group_name} id="groupName" onChange={(event) => setGroupName(event.target.value)}/>
                                {/* <select id="groupName" onChange={(event) => setGroupName(event.target.value)}>
                                    <option value="1">team1</option>
                                    <option value="2">team2</option>
                                    <option value="3">team3</option>
                                    <option value="4">team4</option>
                                </select> */}
                            </label>
                            <label>
                                Group role:&nbsp;
                                <select id="isShopper" onChange={(event) => setGroupRole(event.target.value)}>
                                    <option>Shopper</option>
                                    <option>Group Member</option>
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

