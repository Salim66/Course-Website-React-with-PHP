import React, { Component } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../../assets/css/custom.css';

class TopBanner extends Component {
  render() {
    return (
      <>
        <Container fluid={true} className="topFixedBanner p-0" >
            <div className="topBannerOverlay">
                <Container className="topContent">
                    <Row>
                        <Col className="text-center">
                            <h1 className='topTitle'>SOFTWARE ENGINEER</h1>
                            <h4 className='topSubTitle'>Mobile & Web Application</h4>
                            <Button variant='primary'>More Info</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
      </>
    )
  }
}

export default TopBanner;