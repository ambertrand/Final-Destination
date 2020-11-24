import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
function Footer() {
    return (
        <Container>

            <Row className="bg-dark text-white">
                <p>
                    &copy;{new Date().getFullYear()} While You're There App
     </p>
            </Row>
        </Container>

    );
}

export default Footer;
