import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { CardImg } from "react-bootstrap";
//  Buttons
import addgroup from '../../assets/addgroup.png';
import viewgroups from '../../assets/viewgroups.png';
import editinfo from '../../assets/editinfo.png';
import stores from '../../assets/stores.png';
import './homeStyle.css';


function HomeButtons() {
    return (
        <Container>
            <Row className="teams justify-content-center">
                <Col sm="3" className="mb-3">
                    <CardImg src={addgroup} />

                    <Button class="choice m-2" type="submit" id="createTeam">Create Group</Button>
                </Col>
                <Col sm="3" className="mb-3">
                    <CardImg src={viewgroups} />
                    <Button class="choice m-2" type="submit" id="viewTeams">View Groups</Button>
                </Col>
                <Col sm="3" className="mb-3">
                    <CardImg src={editinfo} />
                    <Button class="choice m-2" type="submit" id="updateUserProfile">Update User Profile</Button>
                </Col>
                <Col sm="3" className="mb-3">
                    <CardImg src={stores} />
                    <Button class="choice m-2" type="submit" id="viewGroupStores">View Group Stores</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default HomeButtons;