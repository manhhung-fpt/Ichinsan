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
/*eslint-disable*/
import React from "react";
import { Container } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

function Footer(props) {
  return (
    <footer className={"footer" + (props.default ? " footer-default" : "")}>
      <Container fluid={props.fluid}>
        <div className="copyright">
          &copy; {1900 + new Date().getYear()}, Designed by{" "}
          <a href="https://www.invisionapp.com" target="_blank">
            Ichinsan
          </a>
          . Coded by{" "}
          <a
            href="https://www.creative-tim.com?ref=nudr-footer"
            target="_blank"
          >
            FPT Students
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

Footer.defaultProps = {
  default: false,
  fluid: false,
};

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Footer;