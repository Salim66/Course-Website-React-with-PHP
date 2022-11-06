import React, { Component } from 'react';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import PrivacySection from '../components/PrivacySection/PrivacySection';
import TopNavigation from '../components/TopNavigation/TopNavigation';

class PrivacyPage extends Component {
  render() {
    return (
      <>
        <TopNavigation title="Privacy Policy" />
        <PageTop pagetitle="Privacy Policy" />
        <PrivacySection />
        <Footer />
      </>
    )
  }
}

export default PrivacyPage;