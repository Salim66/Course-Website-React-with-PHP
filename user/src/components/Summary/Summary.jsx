import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Summary.css';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

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
                                    <h1 className='countNumber'>
                                        <CountUp start={0} end={100}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start}>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                    </h1>
                                    <h4 className='countText'>Total Projects</h4>
                                    <hr className="countLine" />
                                </Col>
                                <Col className='text-center'>
                                    <h1 className='countNumber'>
                                        <CountUp start={0} end={100}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start}>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                    </h1>
                                    <h4 className='countText'>Total Clients</h4>
                                    <hr className="countLine" />
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <Card className="cardWork">
                                <Card.Body>
                                    <Card.Title className='cardTitle'>How i Work</Card.Title>
                                    <Card.Text>
                                        <p className="cardSubTitle"> <FontAwesomeIcon className='iconBulet' icon={ faCircleCheck } /> Requirement Gathering</p>
                                        <p className="cardSubTitle"><FontAwesomeIcon className='iconBulet' icon={ faCircleCheck } /> System Analysis</p>
                                        <p className="cardSubTitle"><FontAwesomeIcon className='iconBulet' icon={ faCircleCheck } /> Coding Testing</p>
                                        <p className="cardSubTitle"><FontAwesomeIcon className='iconBulet' icon={ faCircleCheck } /> Implementation</p>
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