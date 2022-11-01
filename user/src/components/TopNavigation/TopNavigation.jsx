import React, { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import NavLogo from '../../assets/images/navlogo.png';
import './TopNavigation.css';

class TopNavigation extends Component {

    constructor(){
        super();
        this.state = {
            navBarTitle: 'navTitle',
            navBarBack: 'navBackground',
            navBarItem: 'navItem',
        }
    }

    onScroll = () => {
        if(window.scrollY > 100){
            this.setState({ navBarTitle: 'navTitleScroll', navBarBack: 'navBackgroundScroll', navBarItem: 'navItemScroll' });
        }else if(window.screenY < 100){
            this.setState({ navBarTitle: 'navTitle', navBarBack: 'navBackground', navBarItem: 'navItem' });
        }
    }

    componentDidMount() {
        window.addEventListener( 'scroll', this.onScroll );
    }

  render() {
    return (
      <>
        <Navbar fixed='top' collapseOnSelect expand="lg" className={ this.state.navBarBack } variant="dark">
            <Container fluid={ true }>
                <Navbar.Brand className={ this.state.navBarTitle }> <img className='navLogo' src={ NavLogo } alt="" /> Recoo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                    <Nav.Link className={ this.state.navBarItem } href="#deets">HOME</Nav.Link>
                    <Nav.Link className={ this.state.navBarItem } href="#deets">SERVICES</Nav.Link>
                    <Nav.Link className={ this.state.navBarItem } href="#deets">COURSES</Nav.Link>
                    <Nav.Link className={ this.state.navBarItem } href="#deets">PORTFOLIO</Nav.Link>
                    <Nav.Link className={ this.state.navBarItem } href="#deets">CONTACT</Nav.Link>
                    <Nav.Link className={ this.state.navBarItem } href="#deets">ABOUT</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      </>
    )
  }
}

export default TopNavigation;