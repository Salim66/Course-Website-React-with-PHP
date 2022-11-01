import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
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
                            <Row className='text-center'>
                                <Col>
                                    <h1>100</h1>
                                    <h4>Total Projects</h4>
                                    <hr className="bg-white w-25" />
                                </Col>
                                <Col>
                                    <h1>100</h1>
                                    <h4>Total Projects</h4>
                                    <hr className="bg-white w-25" />
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={12} md={6} lg={4}>

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