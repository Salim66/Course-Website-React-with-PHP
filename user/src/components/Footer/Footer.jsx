import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <>
        <Container fluid={true} className="text-center footerSection">
            <Row>
                <Col sm={12} md={6} lg={3} className="footer_info p-5">
                    <h1 className='serviceName'>Follow Me</h1>
                    <a href="#">Facebook</a><br />
                    <a href="#">Youtube</a>
                </Col>
                <Col sm={12} md={6} lg={3} className="footer_info p-5">
                    <h1 className='serviceName'>Address</h1>
                    <p className='serviceDescription'>Paglapir Bazar, Rangpur, Bangladesh</p>
                    <p className='serviceDescription'>salimhasanriad@gmail.com</p>
                    <p className='serviceDescription'>+8801773980593</p>
                </Col>
                <Col sm={12} md={6} lg={3} className="footer_info p-5">
                    <h1 className='serviceName'>Information</h1>
                    <a href="#">About Me</a><br />
                    <a href="#">Resume Me</a><br />
                    <a href="#">Contact Me</a>
                </Col>
                <Col sm={12} md={6} lg={3} className="footer_info p-5">
                    <h1 className='serviceName'>Legal</h1>
                    <a href="#">Refund Policy</a><br />
                    <a href="#">Terms and Condition</a><br />
                    <a href="#">Privacy Policy</a>
                </Col>
            </Row>
        </Container>
      </>
    )
  }
}

export default Footer;