import React from 'react';
import Row from 'react-bootstrap/Row';


function Footer() {
    return (
        <>
            <Row className="footer justify-content-center bg-dark text-white p-2">
                <footer>While You're There | Copyright &copy;{new Date().getFullYear()}</footer>
            </Row>
        </>

    );
}

export default Footer;
