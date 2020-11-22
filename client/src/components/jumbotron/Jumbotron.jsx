import React from "react";
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

function JumboSection(props) {
    const { title, imageSrc, altText, imgClass } = props;
    return (
        <Jumbotron fluid className="jumbo jumbotron-fluid">
            <Row className="justify-content-center">
                <Col xs="auto">
                    <h2 className="text-center text-dark">{title}</h2>
                    {/* className="display-4" */}
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs="auto">
                    <img className={imgClass} src={imageSrc} width="100px" alt={altText} />
                    {/* <img src="./assets/shoppingCart.png" width="100px" alt="shopping cart"/> */}
                </Col>
            </Row>
        </Jumbotron>
    )
}

// JumboSection.defaultProps = {
//     altText: 'hi',
//     imgClass: null
// }

// JumboSection.propTypes = {
//     title: PropTypes.string.isRequired,
//     imageSrc: PropTypes.string.isRequired,
//     altText: PropTypes.string,
//     imgClass: PropTypes.string,
// }

export default JumboSection;