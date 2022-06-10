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
// used for making the prop types of this component
import PropTypes from "prop-types";

function PanelHeader(props) {
  return (
    <div
      className={
        "panel-header " +
        (props.size !== undefined ? "panel-header-" + props.size : "")
      }
    >
      {props.content}
    </div>
  );
}

PanelHeader.defaultProps = {
  size: undefined,
  content: null,
};

PanelHeader.propTypes = {
  // size of the panel header
  size: PropTypes.oneOf(["sm", "lg", undefined]),
  // content
  content: PropTypes.node,
};

export default PanelHeader;
