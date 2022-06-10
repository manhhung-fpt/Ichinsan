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
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useHistory } from "react-router-dom";
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
  const [singleSelect, setSingleSelect] = React.useState(null);
  const [multipleSelect, setMultipleSelect] = React.useState(null);
  const onClickBack = () =>{
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

                <Button onClick={onClickBack}>
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
                  <Col xs={12} md={6} size="sm">

                  </Col>
                  <Col xs={12} md={6} size="sm">
                    <Button color="info">
                      <span className="btn-label">
                        <i className="now-ui-icons ui-1_simple-add" />
                      </span>
                      Add Auditor
                    </Button>
                  </Col>
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
                        <tr>
                          <td className="text-center">1</td>
                          <td>Andrew Mike</td>
                          <td>English</td>
                          <td>Professional</td>

                          <td className="text-center">
                            <FormGroup check>
                              <Label check>
                                <Input defaultChecked type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">2</td>
                          <td>John Doe</td>
                          <td>English</td>
                          <td>Immediate</td>

                          <td className="text-center">
                            <FormGroup check>
                              <Label check>
                                <Input defaultChecked type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">3</td>
                          <td>Alex Mike</td>
                          <td>English</td>
                          <td>Immediate</td>

                          <td className="text-center">
                            <FormGroup check>
                              <Label check>
                                <Input defaultChecked type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">4</td>
                          <td>Mike Monday</td>
                          <td>Chinese</td>
                          <td>Immediate</td>

                          <td className="text-center">
                            <FormGroup check>
                              <Label check>
                                <Input defaultChecked type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">5</td>
                          <td>Paul Dickens</td>
                          <td>Japanese</td>
                          <td>Immediate</td>

                          <td className="text-center">
                            <FormGroup check>
                              <Label check>
                                <Input defaultChecked type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                        </tr>

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