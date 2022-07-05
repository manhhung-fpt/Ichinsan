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

import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  FormGroup,
  Input,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Collapse,
} from "reactstrap";

const Step2 = React.forwardRef((props, ref) => {
  const [activeChoices, setActiveChoices] = React.useState([]);
  const [Website, setWebsite] = React.useState("");
  React.useImperativeHandle(ref, () => ({
    isValidated: undefined,
    state: {
      activeChoices,
      Website
    },
  }));
  const choiceChange = (number) => {
    console.log(number);
    setActiveChoices([]);
    if(number === 1){
      setpageSubcategories("ps1")
    } else if(number === 2){
      setpageSubcategories("ps2")
    }else if(number === 3){
      setpageSubcategories("ps3")
    }
    setActiveChoices([number]);
  };
  const [vTabs, setvTabs] = React.useState("vt1");
  const [vTabsIcons, setvTabsIcons] = React.useState("vti1");
  const [pageSubcategories, setpageSubcategories] = React.useState("ps1");
  return (
    <>
      <h5 className="info-text"> What are you doing ? </h5>
      <Row className="justify-content-center">
        <Col xs={12} lg={10}>
          <Row>
            <Col xs={3} style={{ marginLeft :45}}></Col>
                <Nav
                  pills
                  className="nav-pills-primary nav-pills-icons justify-content-center"
                >
                  <NavItem>
                    <NavLink
                      className={pageSubcategories === "ps1" ? "active" : ""}
                      
                    onClick={() => choiceChange(1)}
                    >
                      <i className="now-ui-icons design-2_ruler-pencil" />
                      <div
                        className={classnames("choice", {
                          active: activeChoices.includes(1),
                        })}
                        data-toggle="wizard-checkbox"
                        
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
                        <h6>Translator</h6>
                      </div>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={pageSubcategories === "ps2" ? "active" : ""}
                    
                      onClick={() => choiceChange(2)}
                    >
                      <i className="now-ui-icons business_bulb-63" />
                      <div
                        className={classnames("choice", {
                          active: activeChoices.includes(2),
                        })}
                        data-toggle="wizard-checkbox"
                        
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
                        <h6>Auditor</h6>
                      </div>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={pageSubcategories === "ps3" ? "active" : ""}
                      
                      onClick={() => choiceChange(3)}
                    >
                      <i className="now-ui-icons tech_tv" />
                      <div
                        className={classnames("choice", {
                          active: activeChoices.includes(3),
                        })}
                        data-toggle="wizard-checkbox"
                        
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
                        <h6>Customer</h6>
                      </div>
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent
                  className="tab-space tab-subcategories"
                  activeTab={pageSubcategories}
                  style={{ width: 850 }}
                >
                  <TabPane tabId="ps1">
                  With a translator role, you can find any article that are suitable for your skills or interests.
                    <br />
                    Futhermore, you can receive auditor's feedback to imporve and your traslation skill.
                    <br />
                    <br/>
                    Let's get started,But firstly, add at least one skill bellow.
                    
  
                  </TabPane>
                  <TabPane tabId="ps2">
                    With an auditor role, you will review translator's traslation article
                    <br />
                    You will be assigned by adminstrations
                    <br />
                    Let's get started,But first, choose your technique for auditor role and at lease one skill
                  </TabPane>
                  <TabPane tabId="ps3">
                    With customer role, you can create project for your translator to apply.
                    <br />
                    <br />
                    Futhermore, your articles will be checked carefully by auditor gruop that Admin assign.
                    <br />
                    <br />
                    <br />
                    <br />
                    <FormGroup>
                        <label >
                          Website (Optional)
                        </label>
                        <Input style={{ width: 250 }}    
                          placeholder="ichisan.com.." type="email" 
                          onChange={(e) => setWebsite(e.target.value)}
                          />
                          
                      </FormGroup>
                  </TabPane>
                </TabContent>
              
          </Row>
        </Col>

      </Row>
    </>
  );
});

export default Step2;