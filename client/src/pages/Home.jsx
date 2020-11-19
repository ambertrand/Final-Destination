import React, { useEffect, useState } from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/esm/Card';
import addgroup from '../assets/addgroup.png';
import viewgroups from '../assets/viewgroups.png';
import editinfo from '../assets/editinfo.png'
import stores from '../assets/stores.png'
import { CardImg } from "react-bootstrap";

function Home() {
    return (
    <Container>
            <Card>
            <Row className="teams justify-content-center">
                <Col sm="auto" className="t mb-3">
            <CardImg src={addgroup}/>

                    <Button variant="primary" type="submit" id="createTeam">Create Group</Button>
                </Col>
             </Row>
            
             <Row className="teams justify-content-center">
                <Col sm="auto" className="mb-3">
                <CardImg src={viewgroups}/>
                    <Button variant="primary" type="submit" id="viewTeams">View Groups</Button>
                </Col>
            </Row>
            <Row className="teams justify-content-center">
                <Col sm="auto" className="mb-3">
                <CardImg src={editinfo}/>
                    <Button variant="primary" type="submit" id="updateUserProfile">Update User Profile</Button>
                </Col>
             </Row>
             <Row className="teams justify-content-center">
                <Col sm="auto" className="mb-3">
                <CardImg src={stores}/>
                    <Button variant="primary" type="submit" id="viewGroupStores">View Group Stores</Button>
                </Col>
                
            </Row>
            </Card>
            </Container>


    )
}

export default Home;