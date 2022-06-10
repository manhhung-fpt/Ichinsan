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

// reactstrap components
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Collapse,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

function Panels() {
  const [openedCollapses, setOpenCollapses] = React.useState(["collapseOne"]);
  const [hTabs, sethTabs] = React.useState("ht1");
  const [vTabs, setvTabs] = React.useState("vt1");
  const [vTabsIcons, setvTabsIcons] = React.useState("vti1");
  const [pageSubcategories, setpageSubcategories] = React.useState("ps1");
  // with this function we create an array with the opened collapses
  // it is like a toggle function for all collapses from this page
  const collapsesToggle = (collapse) => {
    if (openedCollapses.includes(collapse)) {
      setOpenCollapses([]);
    } else {
      setOpenCollapses([collapse]);
    }
  };
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row className="justify-content-center">
          <Col lg={6} md={8} xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">
                  Navigation Pills -{" "}
                  <small className="description">Horizontal Tabs</small>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Nav pills className="nav-pills-primary">
                  <NavItem>
                    <NavLink
                      className={hTabs === "ht1" ? "active" : ""}
                      onClick={() => sethTabs("ht1")}
                    >
                      Profile
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={hTabs === "ht2" ? "active" : ""}
                      onClick={() => sethTabs("ht2")}
                    >
                      Settings
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={hTabs === "ht3" ? "active" : ""}
                      onClick={() => sethTabs("ht3")}
                    >
                      Options
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={hTabs} className="tab-space">
                  <TabPane tabId="ht1">
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits.
                    <br />
                    <br />
                    Dramatically visualize customer directed convergence without
                    revolutionary ROI.
                  </TabPane>
                  <TabPane tabId="ht2">
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br />
                    Dramatically maintain clicks-and-mortar solutions without
                    functional solutions.
                  </TabPane>
                  <TabPane tabId="ht3">
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
          <Col lg={6} md={8} xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">
                  Navigation Pills -{" "}
                  <small className="description">Vertical Tabs</small>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md={4} xs={12}>
                    <Nav pills className="nav-pills-primary flex-column">
                      <NavItem>
                        <NavLink
                          className={vTabs === "vt1" ? "active" : ""}
                          onClick={() => setvTabs("vt1")}
                        >
                          Profile
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={vTabs === "vt2" ? "active" : ""}
                          onClick={() => setvTabs("vt2")}
                        >
                          Settings
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={vTabs === "vt3" ? "active" : ""}
                          onClick={() => setvTabs("vt3")}
                        >
                          Options
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                  <Col md={8} xs={12}>
                    <TabContent activeTab={vTabs}>
                      <TabPane tabId="vt1">
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits.
                        <br />
                        <br />
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI.
                      </TabPane>
                      <TabPane tabId="vt2">
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely deliverables
                        for real-time schemas.
                        <br />
                        <br />
                        Dramatically maintain clicks-and-mortar solutions
                        without functional solutions.
                      </TabPane>
                      <TabPane tabId="vt3">
                        Completely synergize resource taxing relationships via
                        premier niche markets. Professionally cultivate
                        one-to-one customer service with robust ideas.
                        <br />
                        <br />
                        Dynamically innovate resource-leveling customer service
                        for state of the art customer service.
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={6} md={8} xs={12}>
            <Card>
              <CardBody>
                <div
                  aria-multiselectable={true}
                  className="card-collapse"
                  id="accordion"
                  role="tablist"
                >
                  <Card className="card-plain">
                    <CardHeader role="tab">
                      <a
                        aria-expanded={openedCollapses.includes("collapseOne")}
                        href="#pablo"
                        data-parent="#accordion"
                        data-toggle="collapse"
                        onClick={(e) => {
                          e.preventDefault();
                          collapsesToggle("collapseOne");
                        }}
                      >
                        Collapsible Group Item #1{" "}
                        <i className="now-ui-icons arrows-1_minimal-down" />
                      </a>
                    </CardHeader>
                    <Collapse
                      role="tabpanel"
                      isOpen={openedCollapses.includes("collapseOne")}
                    >
                      <CardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="card-plain">
                    <CardHeader role="tab">
                      <a
                        aria-expanded={openedCollapses.includes("collapseTwo")}
                        href="#pablo"
                        data-parent="#accordion"
                        data-toggle="collapse"
                        onClick={(e) => {
                          e.preventDefault();
                          collapsesToggle("collapseTwo");
                        }}
                      >
                        Collapsible Group Item #2{" "}
                        <i className="now-ui-icons arrows-1_minimal-down" />
                      </a>
                    </CardHeader>
                    <Collapse
                      role="tabpanel"
                      isOpen={openedCollapses.includes("collapseTwo")}
                    >
                      <CardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="card-plain">
                    <CardHeader role="tab">
                      <a
                        aria-expanded={openedCollapses.includes(
                          "collapseThree"
                        )}
                        href="#pablo"
                        data-parent="#accordion"
                        data-toggle="collapse"
                        onClick={(e) => {
                          e.preventDefault();
                          collapsesToggle("collapseThree");
                        }}
                      >
                        Collapsible Group Item #3{" "}
                        <i className="now-ui-icons arrows-1_minimal-down" />
                      </a>
                    </CardHeader>
                    <Collapse
                      role="tabpanel"
                      isOpen={openedCollapses.includes("collapseThree")}
                    >
                      <CardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg={6} md={8} xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">
                  Navigation Pills Icons -{" "}
                  <small className="description">Vertical Tabs</small>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs={12} md={6} lg={3}>
                    <Nav
                      pills
                      className="nav-pills-primary nav-pills-icons flex-column"
                    >
                      <NavItem>
                        <NavLink
                          className={vTabsIcons === "vti1" ? "active" : ""}
                          onClick={() => setvTabsIcons("vti1")}
                        >
                          <i className="now-ui-icons objects_umbrella-13" />
                          Home
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={vTabsIcons === "vti2" ? "active" : ""}
                          onClick={() => setvTabsIcons("vti2")}
                        >
                          <i className="now-ui-icons ui-2_settings-90" />
                          Settings
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                  <Col xs={12} md={8}>
                    <TabContent activeTab={vTabsIcons}>
                      <TabPane tabId="vti1">
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits.
                        <br />
                        <br />
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI.
                      </TabPane>
                      <TabPane tabId="vti2">
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely deliverables
                        for real-time schemas.
                        <br />
                        <br />
                        Dramatically maintain clicks-and-mortar solutions
                        without functional solutions.
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={8} xs={12} className="ml-auto mr-auto">
            <Card className="card-plain card-subcategories">
              <CardHeader>
                <CardTitle tag="h4" className="text-center">
                  Page Subcategories
                </CardTitle>
                <br />
              </CardHeader>
              <CardBody>
                <Nav
                  pills
                  className="nav-pills-primary nav-pills-icons justify-content-center"
                >
                  <NavItem>
                    <NavLink
                      className={pageSubcategories === "ps1" ? "active" : ""}
                      onClick={() => setpageSubcategories("ps1")}
                    >
                      <i className="now-ui-icons objects_umbrella-13" />
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={pageSubcategories === "ps2" ? "active" : ""}
                      onClick={() => setpageSubcategories("ps2")}
                    >
                      <i className="now-ui-icons shopping_shop" />
                      Messages
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={pageSubcategories === "ps3" ? "active" : ""}
                      onClick={() => setpageSubcategories("ps3")}
                    >
                      <i className="now-ui-icons ui-2_settings-90" />
                      Settings
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent
                  className="tab-space tab-subcategories"
                  activeTab={pageSubcategories}
                >
                  <TabPane tabId="ps1">
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits.
                    <br />
                    <br />
                    Dramatically visualize customer directed convergence without
                    revolutionary ROI.
                  </TabPane>
                  <TabPane tabId="ps2">
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br />
                    Dramatically maintain clicks-and-mortar solutions without
                    functional solutions.
                  </TabPane>
                  <TabPane tabId="ps3">
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Panels;
