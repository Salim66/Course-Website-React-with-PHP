import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class AboutDescription extends Component {
  render() {
    return (
      <>
        <Container className="mt-5">
            <Row>
                <Col sm={12} md={12} lg={12}>
                    <h1 className='serviceName'>Wo i Am</h1>
                    <hr />
                    <p className="serviceDescription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus reiciendis architecto deleniti rerum! Quidem, quibusdam illo fuga corporis nisi iusto quaerat facilis obcaecati eius. Modi officiis ut laborum. Exercitationem magnam fugit laborum at, repellat iusto veritatis earum tempora? Nam, possimus.</p>
                </Col>
                <Col sm={12} md={12} lg={12}>
                    <h1 className='serviceName'>My Mission</h1>
                    <hr />
                    <p className="serviceDescription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus reiciendis architecto deleniti rerum! Quidem, quibusdam illo fuga corporis nisi iusto quaerat facilis obcaecati eius. Modi officiis ut laborum. Exercitationem magnam fugit laborum at, repellat iusto veritatis earum tempora? Nam, possimus.</p>
                </Col>
                <Col sm={12} md={12} lg={12}>
                    <h1 className='serviceName'>My Vission</h1>
                    <hr />
                    <p className="serviceDescription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus reiciendis architecto deleniti rerum! Quidem, quibusdam illo fuga corporis nisi iusto quaerat facilis obcaecati eius. Modi officiis ut laborum. Exercitationem magnam fugit laborum at, repellat iusto veritatis earum tempora? Nam, possimus.</p>
                </Col>
            </Row>
        </Container>
      </>
    )
  }
}

export default AboutDescription;