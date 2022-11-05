import React, { Component } from 'react';
import AllProjects from '../components/AllProjects/AllProjects';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';

class AllProjectsPage extends Component {
  render() {
    return (
      <>
        <TopNavigation/>
        <PageTop pagetitle="Portfolio" />
        <AllProjects />
        <Footer />
      </>
    )
  }
}

export default AllProjectsPage;