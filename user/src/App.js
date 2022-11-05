import AboutDescription from "./components/AboutDescription/AboutDescription";
import PageTop from "./components/PageTop/PageTop";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import AboutPage from "./pages/AboutPage";
import AllCoursesPage from "./pages/AllCoursesPage";
import AllProjectsPage from "./pages/AllProjectsPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={ <HomePage /> } />
        <Route exact path="/services" element={ <ServicePage /> } />
        <Route exact path="/courses" element={ <AllCoursesPage/> } />
        <Route exact path="/portfolio" element={ <AllProjectsPage /> } />
        <Route exact path="/courses" element={ <ContactPage /> } />
        <Route exact path="/about" element={ <AboutPage/> } />
      </Routes>      
    </>
  );
}

export default App;
