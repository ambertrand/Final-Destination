import React from 'react';
// import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from "react-bootstrap/Image";
//  Buttons
import addgroup from '../../assets/addgroup.png';
import viewgroups from '../../assets/viewgroups.png';
import editinfo from '../../assets/editinfo.png';
import stores from '../../assets/stores.png';


function HomeButtons() {

    const clickButtons = (event) => {
        event.preventDefault();
        // console.log("button clicked");
    }


    return (
        <Container>
            <Row className="teams">
                <Col sm={12} md={3}>
                    <Row>
                        <Col className="text-center">
                            <Image className="iconImg" src={addgroup} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button type="submit" className="choice m-2" id="createTeam" onClick={clickButtons} >Create Group</Button>
                        </Col>
                    </Row>
                </Col>

                <Col sm={12} md={3}>
                    <Row>
                        <Col className="text-center">
                            <Image className="iconImg" src={viewgroups} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button type="submit" className="choice m-2" id="viewTeams">View Groups</Button>
                        </Col>
                    </Row>
                </Col>

                <Col sm={12} md={3}>
                    <Row>
                        <Col className="text-center">
                            <Image className="iconImg" src={editinfo} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button type="submit" className="choice m-2" id="updateUserProfile">Update User Profile</Button>
                        </Col>
                    </Row>
                </Col>

                <Col sm={12} md={3}>
                    <Row>
                        <Col className="text-center">
                            <Image className="iconImg" src={stores} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button type="submit" className="choice m-2" id="viewGroupStores">View Group Stores</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default HomeButtons;