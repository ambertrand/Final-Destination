import React from 'react';
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

// Button Logic
import newGroupButton from './newGroup';
import viewGroupButton from './viewGroup';
import updateButton from './updateUser';
import viewStores from './viewStores';


function HomeButtons() {

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
                            <Button type="submit" className="choice m-2" id="createTeam" onClick={newGroupButton} >Create Group</Button>
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
                            <Button type="submit" className="choice m-2" id="viewTeams" onClick={viewGroupButton}>View Groups</Button>
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
                            <Button type="submit" className="choice m-2" id="updateUserProfile" onClick={updateButton}>Update User Profile</Button>
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
                            <Button type="submit" className="choice m-2" id="viewGroupStores" onClick={viewStores}>View Group Stores</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default HomeButtons;