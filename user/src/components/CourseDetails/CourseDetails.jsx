import React, { Component } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import 'video-react/dist/video-react.css';
import { BigPlayButton, Player } from 'video-react';

class CourseDetails extends Component {
  render() {
    return (
      <>
        <Container fluid={true} className="topPageBanner p-0" >
            <div className="topPageOverlay">
                <Container className="topPageContent">
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p>Lorem, ipsum dolor.</p>
                            <p>Lorem, ipsum dolor.</p>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum deleniti id praesentium commodi rerum magni nulla, ea similique nemo quam dolorum animi atque labore incidunt quibusdam tempore? Deleniti, molestiae? Iusto tempore nihil, quas sunt veritatis a id, vero officiis non ea sint assumenda ex deserunt, quidem corrupti perspiciatis quaerat.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
        <Container className="mt-5">
            <Row>
                <Col sm={12} md={6} lg={6}>
                    <h1>Skil You Get</h1>
                    <ul>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                    </ul>
                    <Button>More Info</Button>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <Player>
                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                        <BigPlayButton position="center" />
                    </Player>
                </Col>
            </Row>
        </Container>
      </>
    )
  }
}

export default CourseDetails;