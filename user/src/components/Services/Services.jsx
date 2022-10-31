import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import web from '../../assets/images/web.png';
import mobile from '../../assets/images/mobile.png';
import graphic from '../../assets/images/graphic.png';

class Services extends Component {
  render() {
    return (
      <>
        <Container className='text-center'>
            <h1 className="serviceMainTitle">MY SERVICES</h1>
            <Row>
                <Col sm={12} md={6} lg={4} >
                    <div className="service-card text-center">
                        <img className='serviceLogo' src={ web } alt="" />
                        <h2 className="serviceName">Web Development</h2>
                        <p className="serviceDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quaerat ratione numquam inventore tempore similique?</p>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={4} >
                    <div className="service-card text-center">
                        <img className='serviceLogo' src={ mobile } alt="" />
                        <h2 className="serviceName">Web Development</h2>
                        <p className="serviceDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quaerat ratione numquam inventore tempore similique?</p>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={4} >
                    <div className="service-card text-center">
                        <img className='serviceLogo' src={ graphic } alt="" />
                        <h2 className="serviceName">Web Development</h2>
                        <p className="serviceDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quaerat ratione numquam inventore tempore similique?</p>
                    </div>
                </Col>
            </Row>
        </Container>
      </>
    )
  }
}

export default Services;