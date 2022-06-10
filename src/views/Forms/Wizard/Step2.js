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
import classnames from "classnames";
// reactstrap components
import { Row, Col } from "reactstrap";

const Step2 = React.forwardRef((props, ref) => {
  const [activeChoices, setActiveChoices] = React.useState([]);
  React.useImperativeHandle(ref, () => ({
    isValidated: undefined,
    state: {
      activeChoices,
    },
  }));
  const choiceChange = (number) => {
    let newState = activeChoices;
    if (newState.includes(number)) {
      newState = newState.filter((prop) => prop !== number);
    } else {
      newState = newState.concat([number]);
    }
    setActiveChoices(newState);
  };
  return (
    <>
      <h5 className="info-text"> What are you doing? (checkboxes) </h5>
      <Row className="justify-content-center">
        <Col xs={12} lg={10}>
          <Row>
            <Col sm="4">
              <div
                className={classnames("choice", {
                  active: activeChoices.includes(1),
                })}
                data-toggle="wizard-checkbox"
                onClick={() => choiceChange(1)}
              >
                <input
                  defaultValue="Design"
                  name="jobb"
                  type="checkbox"
                  onChange={() => choiceChange(1)}
                  checked={classnames({
                    active: activeChoices.includes(1),
                  })}
                />
                <div className="icon">
                  <i className="now-ui-icons design-2_ruler-pencil" />
                </div>
                <h6>Design</h6>
              </div>
            </Col>
            <Col sm="4">
              <div
                className={classnames("choice", {
                  active: activeChoices.includes(2),
                })}
                data-toggle="wizard-checkbox"
                onClick={() => choiceChange(2)}
              >
                <input
                  defaultValue="Code"
                  name="jobb"
                  type="checkbox"
                  onChange={() => choiceChange(2)}
                  checked={classnames({
                    active: activeChoices.includes(2),
                  })}
                />
                <div className="icon">
                  <i className="now-ui-icons business_bulb-63" />
                </div>
                <h6>Code</h6>
              </div>
            </Col>
            <Col sm="4">
              <div
                className={classnames("choice", {
                  active: activeChoices.includes(3),
                })}
                data-toggle="wizard-checkbox"
                onClick={() => choiceChange(3)}
              >
                <input
                  defaultValue="Develop"
                  name="jobb"
                  type="checkbox"
                  onChange={() => choiceChange(3)}
                  checked={classnames({
                    active: activeChoices.includes(3),
                  })}
                />
                <div className="icon">
                  <i className="now-ui-icons tech_tv" />
                </div>
                <h6>Develop</h6>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
});

export default Step2;
