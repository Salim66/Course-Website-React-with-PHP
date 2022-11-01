import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class Courses extends Component {
  render() {
    return (
      <>
        <Container >
            <Row>
                <Col sm={12} md={12} lg={6}>
                    <Row>
                        <Col sm={12} md={6} lg={6}></Col>
                        <Col sm={12} md={6} lg={6}></Col>
                    </Row>
                </Col>
                <Col sm={12} md={12} lg={6}>
                    <Row>
                        <Col sm={12} md={6} lg={6}></Col>
                        <Col sm={12} md={6} lg={6}></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
      </>
    )
  }
}

export default Courses;