import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

function JumboSection(props) {
    const { title, imageSrc, altText, imgClass } = props;
    return (
        <Jumbotron className="jumbo">
            <Row className="justify-content-center">
                <Col xs="auto">
                    <h2 className="text-center text-dark display-5">{title}</h2>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs="auto">
                    <img className={imgClass} src={imageSrc} width="100px" alt={altText} />
                </Col>
            </Row>
        </Jumbotron>
    )
}


export default JumboSection;