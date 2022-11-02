import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { Col, Container, Row } from 'react-bootstrap';
import './Video.css';

class Video extends Component {
  render() {
    return (
      <>
        <Container>
            <Row>
                <Col sm={12} md={12} lg={12} className="videoCard">
                    <div>
                        <p className="videoCardTitle">How I Do</p>
                        <p className="videoCardDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, totam. Libero, unde quod. Nam voluptatibus sapiente necessitatibus impedit aspernatur eius odio aliquid molestias debitis reprehenderit.</p>
                        <p><FontAwesomeIcon className='playBtn' icon={ faPlayCircle } /></p>
                    </div>
                </Col>
            </Row>
        </Container>
      </>
    )
  }
}

export default Video;