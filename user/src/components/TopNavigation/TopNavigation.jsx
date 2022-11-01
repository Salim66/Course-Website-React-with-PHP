import React, { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import NavLogo from '../../assets/images/navlogo.png';
import './TopNavigation.css';

class TopNavigation extends Component {

    constructor(){
        super();
        this.state = {
            navBarTitle: 'navTitle'
        }
    }

    onScroll = () => {
        if(window.scrollY > 100){
            this.setState({ navBarTitle: 'navTitleScroll' });
        }else if(window.screenY < 100){
            this.setState({ navBarTitle: 'navTitle' });
        }
    }

    componentDidMount() {
        window.addEventListener( 'scroll', this.onScroll );
    }

  render() {
    return (
      <>
        <Navbar fixed='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid={ true }>
                <Navbar.Brand className={ this.state.navBarTitle }> <img className='navLogo' src={ NavLogo } alt="" /> Recoo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">HOME</Nav.Link>
                    <Nav.Link href="#deets">SERVICES</Nav.Link>
                    <Nav.Link href="#deets">COURSES</Nav.Link>
                    <Nav.Link href="#deets">PORTFOLIO</Nav.Link>
                    <Nav.Link href="#deets">CONTACT</Nav.Link>
                    <Nav.Link href="#deets">ABOUT</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      </>
    )
  }
}

export default TopNavigation;