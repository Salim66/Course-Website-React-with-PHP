import React, { Component } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

class AllProjects extends Component {
  render() {
    return (
      <>
        <Container className='mt-5'>
            <Row>
                <Col sm={12} md={6} lg={4} className="p-2">
                    <Card className='projectCard'>
                        <img src="https://static.skillshare.com/cdn-cgi/image/quality=85,width=1242,height=839,format=auto/uploads/project/373921/cover_1242_a7a72bdcab531d2f78891196ab4f77e8.jpg" alt="" />
                        <Card.Body>
                            <Card.Title className='projectCardTitle'>New Project</Card.Title>
                            <Card.Text className='projectCardDes'> Lorem ipsum dolor sit amet. </Card.Text>
                            <Button>Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4} className="p-2">
                    <Card className='projectCard'>
                        <img src="https://static.skillshare.com/cdn-cgi/image/quality=85,width=1242,height=839,format=auto/uploads/project/373921/cover_1242_a7a72bdcab531d2f78891196ab4f77e8.jpg" alt="" />
                        <Card.Body>
                            <Card.Title className='projectCardTitle'>New Project</Card.Title>
                            <Card.Text className='projectCardDes'> Lorem ipsum dolor sit amet. </Card.Text>
                            <Button>Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4} className="p-2">
                    <Card className='projectCard'>
                        <img src="https://static.skillshare.com/cdn-cgi/image/quality=85,width=1242,height=839,format=auto/uploads/project/373921/cover_1242_a7a72bdcab531d2f78891196ab4f77e8.jpg" alt="" />
                        <Card.Body>
                            <Card.Title className='projectCardTitle'>New Project</Card.Title>
                            <Card.Text className='projectCardDes'> Lorem ipsum dolor sit amet. </Card.Text>
                            <Button>Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
      </>
    )
  }
}

export default AllProjects;