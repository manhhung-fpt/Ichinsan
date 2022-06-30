/*!

=========================================================
* Now UI Dashboard PRO React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
} from "reactstrap";

function AuthNavbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return window.location.href.indexOf(routeName) > -1 ? "active" : "";
  };
  return (
    <Navbar
      expand="lg"
      className={
        isOpen
          ? "bg-white navbar-absolute"
          : "navbar-transparent navbar-absolute"
      }
    >
      <Container fluid>
        <div className="navbar-wrapper">
          <div className="navbar-toggle">
            <NavbarToggler onClick={toggle}>
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </NavbarToggler>
          </div>
          <Link to="/" className="navbar-brand">
            Ichinsan - An Freelancer Transalte page
          </Link>
        </div>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/admin/dashboard" className="nav-link">
                <i className="now-ui-icons design_bullet-list-67" /> Dashboard
              </Link>
            </NavItem>
            <NavItem className={activeRoute("/auth/register-page")}>
              <Link to="/auth/register-page" className="nav-link">
                <i className="now-ui-icons tech_mobile" /> Register
              </Link>
            </NavItem>
            <NavItem className={activeRoute("/auth/login-page")}>
              <Link to="/auth/login-page" className="nav-link">
                <i className="now-ui-icons users_circle-08" /> Login
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default AuthNavbar;