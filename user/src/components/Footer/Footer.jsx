import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <>
        <Container fluid={true} className="text-center footerSection">
            <Row>
                <Col sm={12} md={6} lg={3} className="footer_info p-5">
                    <h1 className='serviceName'>Follow Me</h1>
                    <a className='socialLink' href="#"><FontAwesomeIcon icon={faFacebook} /> Facebook</a><br />
                    <a className='socialLink' href="#"><FontAwesomeIcon icon={faYoutube} /> Youtube</a>
                </Col>
                <Col sm={12} md={6} lg={3} className="footer_info p-5">
                    <h1 className='serviceName'>Address</h1>
                    <p className='serviceDescription'>Paglapir Bazar, Rangpur, Bangladesh</p>
                    <p className='serviceDescription'><FontAwesomeIcon icon={faEnvelope} /> salimhasanriad@gmail.com</p>
                    <p className='serviceDescription'><FontAwesomeIcon icon={faPhone} />+8801773980593</p>
                </Col>
                <Col sm={12} md={6} lg={3} className="footer_info p-5">
                    <h1 className='serviceName'>Information</h1>
                    <a className='footerLink' href="#">About Me</a><br />
                    <a className='footerLink' href="#">Resume Me</a><br />
                    <a className='footerLink' href="#">Contact Me</a>
                </Col>
                <Col sm={12} md={6} lg={3} className="footer_info p-5">
                    <h1 className='serviceName'>Legal</h1>
                    <Link className='footerLink' to="/refund">Refund Policy</Link><br />
                    <a className='footerLink' href="#">Terms and Condition</a><br />
                    <a className='footerLink' href="#">Privacy Policy</a>
                </Col>
            </Row>
        </Container>
        <Container fluid={true} className="text-center copyrightSection">
            <a href="#" className="copyrightText">Recoo.com &copy; 2022 - 2023</a>
        </Container>
      </>
    )
  }
}

export default Footer;