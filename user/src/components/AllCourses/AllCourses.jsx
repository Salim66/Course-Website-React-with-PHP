import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class AllCourses extends Component {
  render() {
    return (
      <>
        <Container className="mt-5">
            <Row>
                <Col sm={12} md={12} lg={6} className="p-2">
                    <Row>
                        <Col sm={12} md={6} lg={6} >
                            <img className='courseImg' src="https://pmtips.net/Portals/0/EasyDNNNews/927/700600p546EDNmainimg-team-control.jpg" alt="" />
                        </Col>
                        <Col sm={12} md={6} lg={6} >
                            <h5 className="courseTitle">Web Development</h5>
                            <p className="courseDes">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, mollitia.</p>
                            <Link to="/course-description" className="courseDetails">Read More</Link>
                        </Col>
                    </Row>
                </Col>
                <Col sm={12} md={12} lg={6} >
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <img className='courseImg' src="https://pmtips.net/Portals/0/EasyDNNNews/927/700600p546EDNmainimg-team-control.jpg" alt="" />
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <h5 className="courseTitle">Web Development</h5>
                            <p className="courseDes">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, mollitia.</p>
                            <a href="#" className="courseDetails">Read More</a>
                        </Col>
                    </Row>
                </Col>
                <Col sm={12} md={12} lg={6} className="p-2">
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <img className='courseImg' src="https://pmtips.net/Portals/0/EasyDNNNews/927/700600p546EDNmainimg-team-control.jpg" alt="" />
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <h5 className="courseTitle">Web Development</h5>
                            <p className="courseDes">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, mollitia.</p>
                            <a href="#" className="courseDetails">Read More</a>
                        </Col>
                    </Row>
                </Col>
                <Col sm={12} md={12} lg={6} className="p-2">
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <img className='courseImg' src="https://pmtips.net/Portals/0/EasyDNNNews/927/700600p546EDNmainimg-team-control.jpg" alt="" />
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <h5 className="courseTitle">Web Development</h5>
                            <p className="courseDes">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, mollitia.</p>
                            <a href="#" className="courseDetails">Read More</a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
      </>
    )
  }
}

export default AllCourses;