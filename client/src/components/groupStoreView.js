import React from "react";

// React Bootstrap
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';

function GroupStoreView() {
    return (
        <div>
            <Row className="justify-content-center">
                <Col sm="auto">
                   <p>Items</p>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col sm="auto">
                    <p>Store Options list that populate to screen. Socket.io</p>
                </Col>
            </Row>
        </div>
    )
}

export default GroupStoreView;
