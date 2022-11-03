import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <>
        <Container fluid={true} className="footerSection">
            <Row>
                <Col sm={12} md={6} lg={3}>
                    <h1 className='serviceName'>Follow Me</h1>
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <h1 className='serviceName'>Address</h1>
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <h1 className='serviceName'>Information</h1>
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <h1 className='serviceName'>Legal</h1>
                </Col>
            </Row>
        </Container>
      </>
    )
  }
}

export default Footer;