import React, { useEffect, useState } from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


function Home() {
    return (
        <Container>
            <Row className="teams justify-content-center">
                <Col sm="auto" className="t mb-3">
                    <Button variant="primary" type="submit" id="createTeam">Create Group</Button>
                </Col>
             </Row>
             <Row className="teams justify-content-center">
                <Col sm="auto" className="mb-3">
                    <Button variant="primary" type="submit" id="viewTeams">View Groups</Button>
                </Col>
            </Row>
            <Row className="teams justify-content-center">
                <Col sm="auto" className="mb-3">
                    <Button variant="primary" type="submit" id="updateUserProfile">Update User Profile</Button>
                </Col>
             </Row>
             <Row className="teams justify-content-center">
                <Col sm="auto" className="mb-3">
                    <Button variant="primary" type="submit" id="viewGroupStores">View Group Stores</Button>
                </Col>
                
            </Row>

        </Container>

    )
}

export default Home;