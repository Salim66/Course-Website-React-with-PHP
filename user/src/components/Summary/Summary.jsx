import React, { Component } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Summary.css';

class Summary extends Component {
  render() {
    return (
      <>
        <Container fluid={true} className="summaryBanner summarySection p-0" >
            <div className="summaryBannerOverlay">
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={8}>
                            <Row className='text-center countSection'>
                                <Col className='text-center'>
                                    <h1 className='countNumber'>100</h1>
                                    <h4 className='countText'>Total Projects</h4>
                                    <hr className="countLine" />
                                </Col>
                                <Col className='text-center'>
                                    <h1 className='countNumber'>100</h1>
                                    <h4 className='countText'>Total Clients</h4>
                                    <hr className="countLine" />
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title className='cardTitle'>How i Work</Card.Title>
                                    <Card.Text>
                                        <p className="cardSubTitle">Requirement Gathering</p>
                                        <p className="cardSubTitle">System Analysis</p>
                                        <p className="cardSubTitle">Coding Testing</p>
                                        <p className="cardSubTitle">Implementation</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
      </>
    )
  }
}

export default Summary;