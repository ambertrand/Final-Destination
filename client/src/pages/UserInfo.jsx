import React, { useEffect, useState } from "react";
// import { Row } from "react-bootstrap";
import JumboSection from "../components/Jumbotron.jsx";
import UserForm from "../components/UserForm.jsx";
import ShopperStores from "../components/ShopperStoreOptions.jsx";
import GroupStoreView from "../components/GroupStoreView.jsx";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



function UserInfo() {
    return (<
            div >
        <JumboSection
            title="While You're There"
            imageSrc="https://static.thenounproject.com/png/1700380-200.png"
            altText="shopping cart"
        />
        <
            Row >
            <
            Col sm="12"
                md="4" >
                <
                    UserForm />
                <
            /Col> <
            Col sm="12"
                    md="8" >
                    <
                        ShopperStores />
                    <
            /Col> {
                        /* <Col sm="12" md="8">
                                            <GroupStoreView />
                                        </Col> */
                    } <
        /Row>

    <
    /div>

)
}

export default UserInfo;