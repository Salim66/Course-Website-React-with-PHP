import React, { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import NavLogo from '../../assets/images/navlogo.png';
import './TopNavigation.css';
import { NavLink } from 'react-router-dom';

class TopNavigation extends Component {

    constructor(props){
        super();
        this.state = {
            navBarTitle: 'navTitle',
            navBarBack: 'navBackground',
            navBarItem: 'navItem',
            navResponsiveButton: 'dark',
            pageTitle:props.title,
        }
    }

    onScroll = () => {
        if(window.scrollY > 100){
            this.setState({ navBarTitle: 'navTitleScroll', navBarBack: 'navBackgroundScroll', navBarItem: 'navItemScroll', navResponsiveButton: 'light' });
        }else if(window.screenY < 100){
            this.setState({ navBarTitle: 'navTitle', navBarBack: 'navBackground', navBarItem: 'navItem', navResponsiveButton: 'dark' });
        }
    }

    componentDidMount() {
        window.addEventListener( 'scroll', this.onScroll );
    }

  render() {
    return (
      <>
        <title>{ this.state.pageTitle }</title>
        <Navbar fixed='top' collapseOnSelect expand="lg" className={ this.state.navBarBack } variant={ this.state.navResponsiveButton }>
            <Container fluid={ true }>
                <Navbar.Brand className={ this.state.navBarTitle }> <img className='navLogo' src={ NavLogo } alt="" /> Recoo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                    <Nav.Link><NavLink className={isActive => "nav-link" + (!isActive ? " unselected" : "")} className={ this.state.navBarItem } to="/">HOME</NavLink></Nav.Link>
                    <Nav.Link><NavLink className={isActive => "nav-link" + (!isActive ? " unselected" : "")} className={ this.state.navBarItem } to="/services">SERVICES</NavLink></Nav.Link>
                    <Nav.Link><NavLink className={isActive => "nav-link" + (!isActive ? " unselected" : "")} className={ this.state.navBarItem } to="/courses">COURSES</NavLink></Nav.Link>
                    <Nav.Link><NavLink className={isActive => "nav-link" + (!isActive ? " unselected" : "")} className={ this.state.navBarItem } to="/portfolio">PORTFOLIO</NavLink></Nav.Link>
                    <Nav.Link><NavLink className={isActive => "nav-link" + (!isActive ? " unselected" : "")} className={ this.state.navBarItem } to="/contact">CONTACT</NavLink></Nav.Link>
                    <Nav.Link><NavLink className={isActive => "nav-link" + (!isActive ? " unselected" : "")} className={ this.state.navBarItem } to="/about">ABOUT</NavLink></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      </>
    )
  }
}

export default TopNavigation;