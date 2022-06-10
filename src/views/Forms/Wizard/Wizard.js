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
// react plugin used to create a form with multiple steps
import ReactWizard from "react-bootstrap-wizard";

// reactstrap components
import { Col } from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import Step1 from "./Step1.js";

var steps = [
  {
    stepName: "About",
    stepIcon: "now-ui-icons users_circle-08",
    component: Step1,
  },
];

function Wizard() {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Col xs={12} md={10} className="mr-auto ml-auto">
          <ReactWizard
            steps={steps}
            navSteps
            validate
            title="Your Profile"
            description="This information will let us know more about you."
            headerTextCenter
            color="blue"
            // finishButtonClasses="btn-wd"
            // nextButtonClasses="btn-wd"
            // previousButtonClasses="btn-wd"
          />
        </Col>
      </div>
    </>
  );
}

export default Wizard;
