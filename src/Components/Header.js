import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Header extends Component {

  onLogin(){
    this.props.onLogin();
  }

  onLogout(){
    this.props.onLogout();
  }

  render(){
    let logact;
    if(!(this.props.idToken)){
      logact = <NavItem onClick={this.onLogin.bind(this)} href="#">
        Login
      </NavItem>
    } else {
      logact = <NavItem onClick={this.onLogout.bind(this)} href="#">
        Logout
      </NavItem>
    }

    return(
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            Github Searcher
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          {logact}
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
