import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import './Video.css';

class Video extends Component {

    constructor() {
        super();
        this.state = {
            show: false
        }
    }

    handleModalShow = () => this.setState({show:true});
    handleModalClose = () => this.setState({show:false});

  render() {
    return (
      <>
        <Container>
            <Row>
                <Col sm={12} md={12} lg={12} className="videoCard">
                    <div>
                        <p className="videoCardTitle">How I Do</p>
                        <p className="videoCardDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, totam. Libero, unde quod. Nam voluptatibus sapiente necessitatibus impedit aspernatur eius odio aliquid molestias debitis reprehenderit.</p>
                        <p><FontAwesomeIcon className='playBtn' icon={ faPlayCircle } onClick={ this.handleModalShow } /></p>
                    </div>
                </Col>
            </Row>
        </Container>
        <Modal show={this.state.show} onHide={this.handleModalClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={this.handleModalClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default Video;