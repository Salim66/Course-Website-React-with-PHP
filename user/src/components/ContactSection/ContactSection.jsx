import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './ContactSection.css';

class ContactSection extends Component {
  render() {
    return (
      <Container className="mt-5">
        <Row>
            <Col sm={12} md={6} lg={6}>
                <h1 className="serviceName">Quick Connect</h1>
                <Form>
                    <Form.Group>
                        <Form.Label className="serviceDescription">Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="serviceDescription">Email Address</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="serviceDescription">Your Message</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Button type="submit" variant="primary">Submit</Button>
                    </Form.Group>
                </Form>
            </Col>
            <Col sm={12} md={6} lg={6}>
                <h1 className="serviceName">Discus Now</h1>
                <p className='serviceDescription'>Paglapir Bazar, Rangpur, Bangladesh</p>
                <p className='serviceDescription'><FontAwesomeIcon icon={faEnvelope} /> salimhasanriad@gmail.com</p>
                <p className='serviceDescription'><FontAwesomeIcon icon={faPhone} />+8801773980593</p>
            </Col>
        </Row>
      </Container>
    )
  }
}

export default ContactSection;