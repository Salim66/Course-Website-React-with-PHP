import React, { Component } from 'react';
import CourseDetails from '../components/CourseDetails/CourseDetails';
import Footer from '../components/Footer/Footer';
import TopNavigation from '../components/TopNavigation/TopNavigation';

class CourseDetailsPage extends Component {
  render() {
    return (
      <>
        <TopNavigation title="Course Details" />
        <CourseDetails />
        <Footer />
      </>
    )
  }
}

export default CourseDetailsPage;