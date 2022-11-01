import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './Summary.css';

class Summary extends Component {
  render() {
    return (
      <>
        <Container fluid={true} className="summaryBanner summarySection p-0" >
            <div className="summaryBannerOverlay">
                
            </div>
        </Container>
      </>
    )
  }
}

export default Summary;