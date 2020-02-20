import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import store from 'store';
import { Redirect } from 'react-router'

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
      return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/smaterialsadvisor">Sustainable Materials Advisor</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/smaterialsadvisor/3d" >3D Plot</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/smaterialsadvisor/Table" >Material List</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
  }
}

export default Header;
