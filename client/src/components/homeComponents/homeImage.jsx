import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

const HomeImage = () => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Image className="justify-content-center" src="https://i.dlpng.com/static/png/6959392_preview.png" alt="Logo" width="160" height="160" />
            </Row>
        </Container>
    )
}

export default HomeImage;