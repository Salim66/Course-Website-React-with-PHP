import React, { Component } from 'react';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import RefundSection from '../components/RefundSection/RefundSection';
import TopNavigation from '../components/TopNavigation/TopNavigation';

class RefundPolicyPage extends Component {
  render() {
    return (
      <>
        <TopNavigation title="Refund Policy" />
        <PageTop pagetitle="Refund Policy" />
        <RefundSection />
        <Footer />
      </>
    )
  }
}

export default RefundPolicyPage;