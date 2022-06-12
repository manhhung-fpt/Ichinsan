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

// reactstrap components
import {
  Table,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button,
  FormGroup,
  Label,
  Input,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useHistory } from "react-router-dom";
import Select from "react-select";
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
var selectOptions = [
  { value: "No", label: "No" },
  { value: "two", label: "Two" },
  { value: "three", label: "Three" },
  { value: "four", label: "Four" },
  { value: "five", label: "Five" },
  { value: "six", label: "Six" },
];
function AdminProjectDetails() {
  let history = useHistory();
  const [singleSelect, setSingleSelect] = React.useState(null);
  const [multipleSelect, setMultipleSelect] = React.useState(null);
  const [modalNotice, setModalNotice] = React.useState(false);
  const [modalView, setModalView] = React.useState(false);
  const toggleModalNotice = () => {
    setModalNotice(!modalNotice);
  };
  const toggleModalView = () => {
    setModalView(!modalView);
  };

  const onClickBack = () => {
    history.push("/admin/admin-project")
  }
  const addAuditor = () => {
    history.push("/admin/admin-add-auditor");
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
                <CardTitle tag="h4">Project Details</CardTitle>
                <Breadcrumbs aria-label="breadcrumb" style={{ padding: '20px' }}>
                  <Link underline="hover" color="inherit" href="/admin/admin-project">
                    Admin Project
                  </Link>
                  <Typography color="text.primary">Project Details</Typography>
                </Breadcrumbs>
                <Row>
                  <Col xs={12} md={8} size="sm"  >
                    Sort :
                  </Col>
                  <Col Col xs={12} md={4} size="sm" >

                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={4} size="sm">
                    <Select
                      className="react-select warning"
                      classNamePrefix="react-select"
                      closeMenuOnSelect={false}
                      placeholder="Sort "
                      name="multipleSelect"
                      value={multipleSelect}
                      options={selectOptions}
                      onChange={(value) => setMultipleSelect(value)}
                    />
                  </Col>
                  <Col xs={12} md={1} size="sm"></Col>
                  <Col xs={12} md={3} size="sm">

                  </Col>
                  <Col xs={12} md={4} size="sm">

                  </Col>
                </Row>
              </CardHeader>

              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th className="text-center">#</th>
                      <th>Auditor</th>
                      <th>Article Name</th>
                      <th>Language</th>
                      <th>Deadline</th>
                      <th className="text-right">Status</th>
                      <th className="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">1</td>
                      <td>Andrew Mike</td>
                      <td>Develop</td>
                      <td>Chinese to Korean</td>
                      <td>06/08/2022 12:00 AM</td>
                      <td className="text-right">
                        In-Progress
                      </td>
                      <td className="text-right btns-mr-5">

                        <Button color="primary" className="btn-round" style={
                          {

                            fontSize: "10px",

                          }
                        }>
                          <i className="now-ui-icons users_single-02" /> View
                        </Button>

                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">2</td>
                      <td>John Doe</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="text-right">
                        New
                      </td>
                      <td className="text-right btns-mr-5">

                        <Button onClick={toggleModalNotice} color="primary" className="btn-info" style={
                          {

                            fontSize: "10px",

                          }
                        }>
                          <i className="now-ui-icons ui-2_settings-90" /> Assign
                        </Button>
                        <Modal
                          isOpen={modalNotice}
                          toggle={toggleModalNotice}
                          className="modal-notice text-center"
                        >
                          <ModalHeader style={{ width: '150%' }} toggle={toggleModalNotice}>
                            Assign Auditor
                          </ModalHeader>
                          <ModalBody>
                            <div className="content" >
                              <Row>
                                <Col md="12" >
                                  <Card>
                                    <CardHeader>
                                      <CardTitle tag="h4">Auditor's Name : John Doe</CardTitle>
                                      <Row>
                                        <Col xs={12} md={4} size="sm">
                                        </Col>
                                        <Col xs={12} md={1} size="sm"></Col>
                                        <Col xs={12} md={3} size="sm">
                                        </Col>
                                        <Col xs={12} md={4} size="sm">
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
                                      </Row>
                                    </CardHeader>
                                    <CardBody>
                                      <Table responsive>
                                        <thead className="text-primary">
                                          <tr>
                                            <th className="text-center">#</th>

                                            <th>Article Name</th>
                                            <th>Language</th>
                                            <th>Deadline</th>
                                            <th className="text-right">Status</th>
                                            <th className="text-right"></th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td className="text-center">1</td>

                                            <td>Develop</td>
                                            <td>English</td>
                                            <td>06/08/2022 12:00 AM</td>
                                            <td className="text-right">
                                              Pending
                                            </td>
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

                                            <td>Marketing</td>
                                            <td>English</td>
                                            <td>06/08/2022 12:00 AM</td>
                                            <td className="text-right">
                                              Pending
                                            </td>
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

                                            <td>Design</td>
                                            <td>English</td>
                                            <td>06/08/2022 12:00 AM</td>
                                            <td className="text-right">
                                              <Switch defaultValue={false} />


                                            </td>
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

                                            <td>Communication</td>
                                            <td>Japanese</td>
                                            <td>06/08/2022 12:00 AM</td>
                                            <td className="text-right">
                                              <Switch defaultValue={false} />


                                            </td>
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

                                            <td>Marketing</td>
                                            <td>Japanese</td>
                                            <td>06/08/2022 12:00 AM</td>
                                            <td className="text-right">
                                              <Switch defaultValue={false} />


                                            </td>
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
                                    </CardBody>
                                  </Card>
                                </Col>
                              </Row>
                            </div>
                          </ModalBody>
                          <ModalFooter className="justify-content-center">
                            <Button
                              color="info"
                              className="btn-round"
                              onClick={toggleModalNotice}
                              style={
                                {

                                  fontSize: "10px",

                                }
                              }>
                              Assign !!
                            </Button>
                          </ModalFooter>
                        </Modal>

                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">3</td>
                      <td>Alex Mike</td>
                      <td>Design</td>
                      <td>English to VietNamese</td>
                      <td>06/08/2022 12:00 AM</td>
                      <td className="text-right">
                        In-Progress
                      </td>
                      <td className="text-right btns-mr-5">

                        <Button color="primary" className="btn-round" style={
                          {

                            fontSize: "10px",

                          }
                        }>
                          <i className="now-ui-icons users_single-02" /> View
                        </Button>

                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">4</td>
                      <td>Mike Monday</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="text-right">
                        Pending Approver
                      </td>
                      <td className="text-right btns-mr-5">

                        <Button color="primary" className="btn-info" style={
                          {

                            fontSize: "10px",

                          }
                        }>
                          <i className="now-ui-icons ui-2_settings-90" /> Assign
                        </Button>

                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">5</td>
                      <td>Paul Dickens</td>
                      <td>Communication</td>
                      <td>Japanese to VietNamese</td>
                      <td>06/08/2022 12:00 AM</td>
                      <td className="text-right">
                        Done
                      </td>
                      <td className="text-right btns-mr-5">

                        <Button color="primary" className="btn-round" style={
                          {

                            fontSize: "10px",

                          }
                        }>
                          <i className="now-ui-icons users_single-02" /> View
                        </Button>

                      </td>
                    </tr>

                  </tbody>
                </Table>
              </CardBody>
              <CardHeader>
                <Row>
                  <Col xs={12} md={5} size="sm">

                  </Col>
                  <Col xs={12} md={5} size="sm"></Col>
                  <Col xs={12} md={2} size="sm">
                    <Button onClick={addAuditor} color="info" style={
                      {

                        fontSize: "10px",

                      }
                    }>
                      Add Auditor
                      <span className="btn-label">
                        <i className="now-ui-icons arrows-1_minimal-right" />
                      </span>

                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardHeader>
                <Row>
                  <Col xs={12} md={4} size="sm">

                  </Col>
                  <Col xs={12} md={1} size="sm"></Col>
                  <Col xs={12} md={3} size="sm">
                    <Pagination>
                      <PaginationItem>
                        <PaginationLink href="#">
                          <span aria-hidden="true">
                            <i
                              className="fa fa-angle-double-left"
                              aria-hidden="true"
                            />
                          </span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem active>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">
                          <span aria-hidden="true">
                            <i
                              className="fa fa-angle-double-right"
                              aria-hidden="true"
                            />
                          </span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </Col>
                  <Col xs={12} md={4} size="sm">

                  </Col>
                </Row>
              </CardHeader>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default AdminProjectDetails;