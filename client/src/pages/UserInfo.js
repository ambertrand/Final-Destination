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
            
                    <UserForm />

        </div>

    )
}

export default UserInfo;