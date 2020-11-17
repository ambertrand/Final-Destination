import React, { useEffect, useState } from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



function Home() {
    return (
        <div>
            <Row className="teams justify-content-center">
                <Col sm="auto" className="mb-2">
                    <Button variant="primary" type="submit" id="createTeam">Create Group</Button>
                </Col>
                <Col sm="auto" className="mb-2">
                    <Button variant="primary" type="submit" id="viewTeams">View Groups</Button>
                </Col>
            </Row>
            <Row className="teams justify-content-center">
                <Col sm="auto" className="mb-2">
                    <Button variant="primary" type="submit" id="updateUserProfile">Update User Profile</Button>
                </Col>
                <Col sm="auto" className="mb-2">
                    <Button variant="primary" type="submit" id="viewGroupStores">View Group Stores</Button>
                </Col>
            </Row>

        </div>

    )
}

export default Home;