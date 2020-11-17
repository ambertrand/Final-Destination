import React from "react";

// React Bootstrap
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function UserForm() {
    return (
        <div>
            <Card>
                    <Card.Img variant="top" src="https://static.thenounproject.com/png/642902-200.png" />
                    <Card.Body>
                        <Form>
                            <Form.Group controlId="formFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="First Name" id="firstName" data-id="Will need to change" />
                            </Form.Group>

                            <Form.Group controlId="formLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last Name" id="lastName" data-id="Will need to change" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder="User Email" id="email" data-id="Will need to change" />
                            </Form.Group>

                            <Form.Group controlId="formGroup">
                                <Form.Label>Group Name</Form.Label>
                                <Form.Control as="select" custom>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formShopperOrGroup">
                                <Form.Label>Role in group</Form.Label>
                                <Form.Control as="select" custom>
                                    <option>Shopper</option>
                                    <option>Group Member</option>
                                </Form.Control>
                            </Form.Group>
                            <Row className="justify-content-center">
                                <Col sm="auto">
                                    <Button variant="primary" type="submit" id="updateUserInfo">
                                        Update Profile Info
                                     </Button>
                                </Col>
                            </Row>      
                        </Form>
                    </Card.Body>
                </Card>
                <Row className="teams justify-content-center">
                                <Col sm="auto" className="mb-2">
                                <Button variant="primary" type="submit" id="createTeam">Create Team</Button>
                                </Col>
                                <Col sm="auto" >
                                <Button variant="primary" type="submit" id="viewTeams">View Teams</Button>
                                </Col>
                            </Row>

        </div>
    )
}

export default UserForm;

