import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import landingimage from '../../assets/landingimage.png';

const LandingImage = () => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Image className="justify-content-center" src={landingimage} alt="Logo" width="160" height="160" />
            </Row>
        </Container>
    )
}

export default LandingImage;