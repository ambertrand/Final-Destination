import React, { useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from "react-bootstrap/Image";
//  Buttons
import addgroup from '../../assets/addgroup.png';
import viewgroups from '../../assets/viewgroups.png';
import editinfo from '../../assets/editinfo.png';
// import stores from '../../assets/stores.png';



function HomeButtons(event) {

    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);
    // const [showViewStoreModal, setShowViewStoreModal] = useState(false);
    const [groupName, setGroupName] = useState("");


    const handleClose = () => setShowCreateModal(false);
    const handleShow = () => setShowCreateModal(true);
    const handleViewClose = () => setShowViewModal(false);
    // const handleViewStoreClose = () => setShowViewStoreModal(false);

    const newGroup = () => {
        console.log(groupName);
        axios.post("/api/groups", { group_name: groupName })
            .then(res => {
                console.log(res)
            }).catch(err => console.log(err));
    }

    const viewGroups = (groupName) => {
        return axios.get(`/api/groups/${groupName}`);
        
    }

    return (
        <Container>
            <Row className="teams">
                <Col sm={12} md={4}>

                    {/* Create Group */}
                    <Row>
                        <Col className="text-center">
                            <Image className="iconImg" src={addgroup} />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <Button type="submit" className="choice m-2" id="createTeam" onClick={() => setShowCreateModal(true)} >Create Group</Button>
                        </Col>

                        <Modal show={showCreateModal} onHide={handleClose}>
                            <Modal.Header>
                                <Modal.Title>Create Group</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <form onSubmit={newGroup}>
                                    <input placeholder="Group Name" onChange={event => setGroupName(event.target.value)}></input>
                                </form>
                            </Modal.Body>

                            <Modal.Footer>
                                <Row>
                                    <Col xs={6}>
                                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                                    </Col>
                                    <Col xs={6}>
                                        <Button variant="primary" onClick={newGroup}>Save</Button>
                                    </Col>
                                </Row>
                            </Modal.Footer>
                        </Modal>

                    </Row>
                </Col>

                {/* View Group  */}
                <Col sm={12} md={4}>
                    <Row>
                        <Col className="text-center">
                            <Image className="iconImg" src={viewgroups} />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <Button type="submit" className="choice m-2" id="viewTeams" onClick={() => setShowViewModal(true)}>View Groups</Button>
                        </Col>

                        <Modal show={showViewModal} onHide={handleViewClose}>
                            <Modal.Header>
                                <Modal.Title>Your Groups</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                {viewGroups}
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleViewClose}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    </Row>
                </Col>

                {/* Go Shopping */}
                <Col sm={12} md={4}>
                    <Row>
                        <Col className="text-center">
                            <Image className="iconImg" src={editinfo} />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <Button type="submit" className="choice m-2" id="updateUserProfile">Shopping</Button>
                        </Col>
                    </Row>
                </Col>

                {/* View Group Stores - Future development */}
                {/* <Col sm={12} md={3}>
                    <Row>
                        <Col className="text-center">
                            <Image className="iconImg" src={stores} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button type="submit" className="choice m-2" id="viewGroupStores" onClick={() => setShowViewStoreModal(true)}>View Group Stores</Button>
                        </Col>

                        <Modal show={showViewStoreModal} onHide={handleViewStoreClose}>
                            <Modal.Header>
                                <Modal.Title>Your Groups Stores</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <p>Populated Stores</p>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleViewStoreClose}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    </Row>
                </Col> */}
            </Row>
        </Container>
    )
}

export default HomeButtons;