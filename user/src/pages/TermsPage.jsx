import React, { Component } from 'react';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TermsSection from '../components/TermsSection/TermsSection';
import TopNavigation from '../components/TopNavigation/TopNavigation';

class TermsPage extends Component {
  render() {
    return (
      <>
        <TopNavigation title="Terms & Conditions" />
        <PageTop pagetitle="Terms & Conditions" />
        <TermsSection />
        <Footer />
      </>
    )
  }
}

export default TermsPage;