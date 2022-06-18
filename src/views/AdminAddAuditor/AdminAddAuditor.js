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
  Table,
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
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useHistory, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
var selectOptions = [
  { value: "One", label: "One" },
  { value: "two", label: "Two" },
  { value: "three", label: "Three" },
  { value: "four", label: "Four" },
  { value: "five", label: "Five" },
  { value: "six", label: "Six" },
];
function AdminAddAuditor() {
  let history = useHistory();
  const location = useLocation();
  const Edit ="edit";
  debugger
  const [singleSelect, setSingleSelect] = React.useState(null);
  const [multipleSelect, setMultipleSelect] = React.useState(null);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get("https://62a586f2b9b74f766a3afda9.mockapi.io/api/projectDetails/articles")
      .then((res) => {
        const data = res.data;
        setProjects(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);
  const onClickBack = () => {
    history.push("/admin/admin-projec/admin-project-details");
  }
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md="12" >
            <Card>
              <CardHeader>

                <Button onClick={onClickBack} style={
                  {

                    fontSize: "10px",

                  }
                }>
                  <span className="btn-label">
                    <i className="now-ui-icons arrows-1_minimal-left" />
                  </span>
                  Back
                </Button>
              </CardHeader>
              <CardHeader>
                <CardTitle tag="h4">Add Auditor</CardTitle>
              </CardHeader>
              <Breadcrumbs separator="›" aria-label="breadcrumb" style={{ padding: '20px' }}>
                <Link underline="hover" color="inherit" href="/admin/admin-project">
                  Admin Project
                </Link>
                <Link underline="hover" color="inherit" href="/admin/admin-projec/admin-project-details">
                  Project Details
                </Link>
                <Typography color="text.primary">Add Auditor</Typography>
              </Breadcrumbs>
              <CardBody>
                <Row>
                  <Col xs={12} md={10} size="sm">

                  </Col>
                  { location.state !== undefined && location.state.actionType === Edit ? (
                    <Col xs={12} md={2} size="sm">
                      <Button color="danger" style={
                        {
                          
                          fontSize: "10px",

                        }
                      }>
                        <span className="btn-label">
                          <i className="now-ui-icons ui-1_simple-add" />
                        </span>
                        Change Auditor
                      </Button>
                    </Col>
                  ) : (
                    <Col xs={12} md={2} size="sm">
                      <Button color="info" style={
                        {

                          fontSize: "10px",

                        }
                      }>
                        <span className="btn-label">
                          <i className="now-ui-icons ui-1_simple-add" />
                        </span>
                        Add Auditor
                      </Button>
                    </Col>

                  )}

                </Row>
              </CardBody>
              <CardBody>
                <Row>
                  <Col xs={12} md={4}>
                    <Card>
                      <CardHeader>
                        <CardTitle tag="h4">Languages</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <FormGroup>
                          <Col xs={12} md={12}>
                            <Select
                              className="react-select warning"
                              classNamePrefix="react-select"
                              isMulti
                              closeMenuOnSelect={false}
                              placeholder="Sort Multiple Select"
                              name="multipleSelect"
                              value={multipleSelect}
                              options={selectOptions}
                              onChange={(value) => setMultipleSelect(value)}
                            />
                          </Col>
                        </FormGroup>
                      </CardBody>
                      <CardHeader>
                        <CardTitle tag="h4">Level</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <FormGroup>
                          <Col xs={12} md={12} size="sm">
                            <Select
                              className="react-select primary"
                              classNamePrefix="react-select"
                              placeholder="Result of Page"
                              name="singleSelect"
                              value={singleSelect}
                              options={selectOptions}
                              onChange={(value) => setSingleSelect(value)}
                            />
                          </Col>
                        </FormGroup>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xs={12} md={8}>

                    <Table responsive>
                      <thead className="text-primary">
                        <tr>
                          <th className="text-center">#</th>
                          <th>Auditor</th>
                          <th>Languages</th>
                          <th>Level</th>

                          <th className="text-center">Choose</th>
                        </tr>
                      </thead>
                      <tbody>
                        {projects.map((project, index) => (
                          <tr>
                            <td className="text-center">{index + 1}</td>
                            <td>{project.auditorName}</td>
                            <td>{project.language}</td>
                            <td>{project.level}</td>
                            <td className="text-center">
                              <FormGroup check>
                                <Label check>
                                  <Input defaultChecked type="checkbox" />
                                  <span className="form-check-sign" />
                                </Label>
                              </FormGroup>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
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

export default AdminAddAuditor;