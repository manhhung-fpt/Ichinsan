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
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';

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
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { useHistory } from "react-router-dom";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import Notification from "components/Notification/notification";

function AdminNavbar(props) {
  const location = useLocation();
  let history = useHistory();
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [color, setColor] = React.useState("transparent");
  const sidebarToggle = React.useRef();
  const [openNotification, setOpenNotification] = React.useState(false);
  const [modalNotice, setModalNotice] = React.useState(false);

  const onClickBell = () => {
    setOpenNotification(!openNotification);
  };
  const toggleModalNotice = () => {
    setModalNotice(!modalNotice);
  };


  const logOutOnClick = () => {
    console.log(history);
    localStorage.clear();
    history.push({ pathname: "/auth/login-page" });
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
              <Link onClick={onClickBell} className="nav-link">
                <NotificationsNoneIcon></NotificationsNoneIcon>
              </Link>
              <Modal
                isOpen={openNotification}
                onCancel={onClickBell}
                toggle={onClickBell}
                style={{
                  position: 'absolute',
                  top: 30,
                  right: 150,
                  zIndex: 999999,
                }}
              >
                {/* <div className={styles.notification}>
                  <a className={styles.seeAll} onClick={() => onClickSeeAll()}>
                    See All
                  </a>
                  <Notification
                    inWeek={inWeek}
                    width="100%"
                    scrollable={true}
                    setOpenNotification={setOpenNotification}
                    isHeaderNoti={true}
                  />
                </div> */}
                <ModalHeader toggle={onClickBell} style={{ width: '150%' }} >
                  Alert and notification
                </ModalHeader>
                <ModalBody style={{ overflowY: 'scroll', scrollBehavior: 'smooth', height: 500}}>
                  <Notification></Notification>
                </ModalBody>
                <ModalFooter className="justify-content-center">
                  <Paper>
                    <BottomNavigation
                      showLabels
                    >
                      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                      <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
                    </BottomNavigation>
                  </Paper>
                </ModalFooter>
              </Modal>
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
                {!localStorage.getItem('name') && (
                  <DropdownItem tag="a" href="/auth/login-page">Login</DropdownItem>)}
                {localStorage.getItem('name') && (
                  <DropdownItem tag="a"
                    onClick={logOutOnClick}
                  >Logout</DropdownItem>)}
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