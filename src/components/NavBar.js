import React, { useState } from "react";
import styled from "styled-components"


import {
  
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  UncontrolledDropdown,

  Nav,
  NavItem,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink
} from "reactstrap";

const NavStyle = styled.a `
text-decoration:none;
color:black;
`

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    
    return (
      <div className="App">
          
        <div>
         
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Alan G Parker</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink> <NavStyle href="mailto:alanparker5123@gmail.com">Contact Me</NavStyle></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/alan5123">
                    GitHub
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                  Projects
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem><a href="https://vrfundingplatform.github.io/marketing-page/">Vr Funding Platform</a></DropdownItem>
                    <DropdownItem>Future project</DropdownItem>
                    <DropdownItem>Future Project</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
              
            </Collapse>
          </Navbar>
       
        </div>
        </div>
  
    );
  }
  export default NavBar