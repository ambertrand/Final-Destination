import React from "react";
import Container from 'react-bootstrap/Container';
import JumboSection from "../components/jumbotron/Jumbotron.jsx";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import addgroup from '../assets/addgroup.png';
import viewgroups from '../assets/viewgroups.png';
import editinfo from '../assets/editinfo.png'
import stores from '../assets/stores.png'
import { CardImg } from "react-bootstrap";
import "./homeStyle.css";


function Home() {
    return (
        <>
            <JumboSection
                title="Welcome to While You're There!"
                imageSrc="https://static.thenounproject.com/png/1700380-200.png"
                altText="shopping cart"
                imgClass="animate__animated animate__bounceInLeft"
            />


            <Row className="teams justify-content-center">
                <Col sm="3" className="mb-3">
                    <CardImg src={addgroup} />

                    <Button class="choice" type="submit" id="createTeam">Create Group</Button>
                </Col>
                <Col sm="3" className="mb-3">
                    <CardImg src={viewgroups} />
                    <Button class="choice" type="submit" id="viewTeams">View Groups</Button>
                </Col>
                <Col sm="3" className="mb-3">
                    <CardImg src={editinfo} />
                    <Button class="choice" type="submit" id="updateUserProfile">Update User Profile</Button>
                </Col>
                <Col sm="3" className="mb-3">
                    <CardImg src={stores} />
                    <Button class="choice" type="submit" id="viewGroupStores">View Group Stores</Button>
                </Col>
            </Row>



            {/* <Row>
                <Col md="8">
                    <p>
                        The mission of While You're There is to empower users with the ability to communicate with others
                        such as significant others, roommates, familiy members, and friends to collaberate and create shopping lists in real time.
                        Especially now more then ever with Covid-19, we believe that While You're There can help family members
                        and friends who are at high risk for the virus. This gives them the control to make lists in real time
                        and communicate with others who are able to go out and retrieve everything they need to survive during this crisis.
                            </p>

                </Col>

            </Row> */}



        </>


    )
}

export default Home;