import React, { Component } from 'react';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import ProjectDetails from '../components/ProjectDetails/ProjectDetails';
import TopNavigation from '../components/TopNavigation/TopNavigation';

class ProjectDescriptionPage extends Component {
  render() {
    return (
      <>
        <TopNavigation title="Project Description" />
        <PageTop pagetitle="Project Name" />
        <ProjectDetails />
        <Footer />
      </>
    )
  }
}

export default ProjectDescriptionPage;