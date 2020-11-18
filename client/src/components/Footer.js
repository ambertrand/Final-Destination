import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
function Footer() {
    return (
<Container>
    <Row>
        <Col sm="6" lg="6">
            <h4>Our Mission</h4>
                <p> The Goal of "While You're There is to (describe goal and mission, mention reduced store trips and covid safety application
                 </p>
        </Col>
         <Col sm="6" lg="6">
                <h4>We Love Feedbeack!</h4>
                <ul className="list-unstyled">
                    <li>email </li>
                    <li>email</li>
                    <li>email</li>
                    <li>email</li>
                    
                </ul>
        </Col>
     </Row>

<Row>
    <p className="text-xs-center">
     &copy;{new Date().getFullYear()} While You're There App 
     </p>
</Row>
</Container>

    );
}

export default Footer;
