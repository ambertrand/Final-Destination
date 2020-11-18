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
    return (
        <div>
            <JumboSection />
            
                    <UserForm />

        </div>

    )
}

export default UserInfo;