import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class ProjectDetails extends Component {
  render() {
    return (
      <>
        <Container className="mt-5">
            <Row>
                <Col sm={12} md={6} lg={6}>
                    <img src="https://image.shutterstock.com/image-photo/engineers-helping-design-work-on-260nw-1724713963.jpg" alt="" />
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <h2 className="serviceName">Foll Bazzar</h2>
                    <p className="serviceDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, consequatur!</p>
                    <ul>
                        <li className="serviceDescription">Lorem ipsum dolor sit amet.</li>
                        <li className="serviceDescription">Lorem ipsum dolor sit amet consectetur.</li>
                        <li className="serviceDescription">Lorem ipsum dolor sit amet.</li>
                        <li className="serviceDescription">Lorem ipsum dolor sit amet.</li>
                        <li className="serviceDescription">Lorem ipsum dolor sit.</li>
                        <li className="serviceDescription">Lorem ipsum dolor sit amet.</li>
                        <li className="serviceDescription">Lorem, ipsum dolor.</li>
                        <li className="serviceDescription">Lorem ipsum dolor sit amet consectetur.</li>
                    </ul>
                </Col>
            </Row>
        </Container>
      </>
    )
  }
}

export default ProjectDetails;