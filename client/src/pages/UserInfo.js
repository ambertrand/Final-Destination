import React, { useEffect, useState } from "react";
// import { Row } from "react-bootstrap";
import JumboSection from "../components/jumbotron.js";
import UserForm from "../components/userForm.js";
import ShopperStores from "../components/shopperStoreOptions.js";
import GroupStoreView from "../components/groupStoreView.js";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



function UserInfo() {
    return (
        <div>
            <JumboSection />
            <Row>
                <Col sm="12" md="4">
                    <UserForm />
                </Col>
                <Col sm="12" md="8">
                    <ShopperStores />
                </Col>
                {/* <Col sm="12" md="8">
                    <GroupStoreView />
                </Col> */}
            </Row>

        </div>

    )
}

export default UserInfo;