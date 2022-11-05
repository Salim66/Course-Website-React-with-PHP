import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './PageTop.css';

class PageTop extends Component {
  render() {
    return (
      <>
        <Container fluid={true} className="topPageBanner p-0" >
            <div className="topPageOverlay">
                <Container className="topPageContent">
                    <Row>
                        <Col className="text-center">
                            <h4 className='topSubTitle'>{ this.props.pagetitle }</h4>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
      </>
    )
  }
}

export default PageTop;