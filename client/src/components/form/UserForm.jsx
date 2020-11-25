import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import userInfo from './userInfo';

// React Bootstrap
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import Form from 'react-bootstrap/Form';

function UserForm() {
    const { user } = useAuth0();

    return (
        <div>
            <Row className="justify-content-center">
                {/* User image */}
                <Col xs="10" md="3">
                    <Card className="m-3 profileImage">
                        <Card.Img variant="top" src={user.picture} alt={user.name} className="img-responsive" width="60px" max-height="100px" />
                        {/* <Card.Body>
                            <h4 className="text-center">User Info</h4>
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
                                <input type="text" placeholder={user.nickname} name="userName" />
                            </label>
                            <label>
                                Email:
                                <input type="text" placeholder={user.email} id="email" />
                            </label>
                            <label>
                                Group name:&nbsp;
                                {/* <input type="text" placeholder={user.email} id="email" /> */}
                                <select id="groupName">
                                    <option value="1">team1</option>
                                    <option value="2">team2</option>
                                    <option selected value="3">team3</option>
                                    <option value="4">team4</option>
                                </select>
                            </label>
                            <label>
                                Group role:&nbsp;
                                <select id="isShopper">
                                    <option value="shopper">Shopper</option>
                                    <option value="groupMember">Group Member</option>
                                </select>
                            </label>
                            <Row className="justify-content-center">
                                <Col sm="auto">
                                    <Button type="submit" className="m-2" id="updateUserInfo" onClick={userInfo}>
                                        Update Profile Info
                                </Button>
                                </Col>
                            </Row>
                            {/* <input type="submit" value="Submit" /> */}
                        </form>
                        {/* <Form > */}
                        {/* <Form.Group controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" id="firstName" data-id="Will need to change" value={user.name}/>
                        </Form.Group>

                        <Form.Group controlId="formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" id="lastName" data-id="Will need to change" />
                        </Form.Group>

                        {/* <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder={user.nickname} id="userName" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder={user.email} id="email" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Group Name</Form.Label>
                            <Form.Control id = "groupName" as="select" custom>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formShopperOrGroup">
                            <Form.Label>Role in group</Form.Label>
                            <Form.Control id = "shopper" as="select" custom>
                                <option>Shopper</option>
                                <option>Group Member</option>
                            </Form.Control>
                        </Form.Group>
                        <Row className="justify-content-center">
                            <Col sm="auto">
                                <Button type="submit" id="updateUserInfo" onClick={userInfo}>
                                    Update Profile Info
                                </Button>
                            </Col>
                        </Row>
                    </Form> */}

                    </Card>


                </Col>
            </Row>

        </div>
    )
}

export default UserForm;

