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
import Switch from "react-bootstrap-switch";
import Datetime from "react-datetime";
// reactstrap components
import {
  Table,
  UncontrolledTooltip,
  ButtonGroup,
  FormGroup,
  Label,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button,
  Form,
} from "reactstrap";

import Select from "react-select";
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import { useHistory } from "react-router-dom";
var selectOptions = [
  { value: "One", label: "One" },
  { value: "two", label: "Two" },
  { value: "three", label: "Three" },
  { value: "four", label: "Four" },
  { value: "five", label: "Five" },
  { value: "six", label: "Six" },
];
function AdminCategoryHome() {
  const [singleSelect, setSingleSelect] = React.useState(null);
  const [multipleSelect, setMultipleSelect] = React.useState(null);
  let history = useHistory();
  const onclickProject = () =>{
    history.push("/admin/admin-projec-category");
  }
  const onclickFeedBack = () =>{
    history.push("/admin/admin-feedback-category");
  }
  
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md="12" >
            <Card>
              
              <CardHeader>
                <CardTitle tag="h4">Admin Category</CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs={12} md={6} size="sm">

                  </Col>
                  <Col xs={12} md={6} size="sm">
                    
                  </Col>
                </Row>
              </CardBody>


              <CardBody>
                <Row>
                  <Col xs={12} md={6}>
                    <Card>
                      <CardHeader>
                        <CardTitle tag="h4">Projects</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <Button onClick={onclickProject} color="info" style={
              {
               
                fontSize: "10px",
               
              }
            }>
                        Go to
                          <span className="btn-label">
                            <i className="now-ui-icons arrows-1_minimal-right" />
                          </span>
                         
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xs={12} md={6}>
                    <Card>
                      <CardHeader>
                        <CardTitle tag="h4">Feedbacks</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <Button onClick={onclickFeedBack} color="info" style={
              {
               
                fontSize: "10px",
               
              }
            }>
                        Go to
                          <span className="btn-label">
                            <i className="now-ui-icons arrows-1_minimal-right" />
                          </span>
                        
                        </Button>
                      </CardBody>
                    </Card>

                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default AdminCategoryHome;