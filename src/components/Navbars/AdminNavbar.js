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
import { Link, useLocation } from "react-router-dom";
// used for making the prop types of this component
import PropTypes from "prop-types";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';  

// reactstrap components
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
} from "reactstrap";
import { useHistory } from "react-router-dom";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';

function AdminNavbar(props) {
  const location = useLocation();
  let history = useHistory();
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [color, setColor] = React.useState("transparent");
  const sidebarToggle = React.useRef();
  
  const logOutOnClick = () => {
    console.log(history);
    localStorage.clear();
    history.push({pathname: "/auth/login-page"});
  }
  const toggle = () => {
    if (isOpen) {
      setColor("transparent");
    } else {
      setColor("white");
    }
    setIsOpen(!isOpen);
  };
  const dropdownToggle = (e) => {
    setDropdownOpen(!dropdownOpen);
  };
  const openSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    sidebarToggle.current.classList.toggle("toggled");
  };
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && isOpen) {
      setColor("white");
    } else {
      setColor("transparent");
    }
  };
  React.useEffect(() => {
    window.addEventListener("resize", updateColor);
    // eslint-disable-next-line
  }, []);
  React.useEffect(() => {
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      sidebarToggle.current.classList.toggle("toggled");
    }
  }, [location]);
  return (
    // add or remove classes depending if we are on full-screen-maps page or not
    <Navbar
      color={
        window.location.href.indexOf("full-screen-maps") !== -1
          ? "white"
          : color
      }
      expand="lg"
      className={
        window.location.href.indexOf("full-screen-maps") !== -1
          ? "navbar-absolute "
          : "navbar-absolute " +
            (color === "transparent" ? "navbar-transparent " : "")
      }
    >
      <Container fluid>
        <div className="navbar-wrapper">
          <div className="navbar-toggle">
            <button
              type="button"
              ref={sidebarToggle}
              className="navbar-toggler"
              onClick={() => openSidebar()}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <NavbarBrand href="/">{props.brandText}</NavbarBrand>
        </div>
        <NavbarToggler onClick={toggle}>
          <span className="navbar-toggler-bar navbar-kebab" />
          <span className="navbar-toggler-bar navbar-kebab" />
          <span className="navbar-toggler-bar navbar-kebab" />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          <Nav navbar>
            <NavItem>
            <Link to="/admin/Search" className="nav-link">
            <SearchIcon></SearchIcon>
            </Link>
            </NavItem>
            {/* <NavItem>
              <Link to="/admin/customer-create-project" className="nav-link">
              <AddCircleIcon></AddCircleIcon>
              </Link>
            </NavItem> */}
            <NavItem>
            <Link to="#pablo" className="nav-link">
              <NotificationsNoneIcon></NotificationsNoneIcon>
              </Link>
            </NavItem>
            <Dropdown
              nav
              isOpen={dropdownOpen}
              toggle={(e) => dropdownToggle(e)}
            >
              <DropdownToggle caret nav>
                <i className="now-ui-icons users_single-02" />
                <p>
                  <span className="d-lg-none d-md-block">Account</span>
                </p>
              </DropdownToggle>
              <DropdownMenu right>
                {!localStorage.getItem('name')  && (
                <DropdownItem tag="a" href="/auth/login-page">Login</DropdownItem> )}
                {localStorage.getItem('name')  && (
                <DropdownItem tag="a"
                onClick={logOutOnClick}
                >Logout</DropdownItem> )}
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

AdminNavbar.defaultProps = {
  brandText: "Default Brand Text",
};

AdminNavbar.propTypes = {
  // string for the page name
  brandText: PropTypes.string,
};

export default AdminNavbar;