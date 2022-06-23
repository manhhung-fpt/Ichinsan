
import React, { useEffect, useState } from "react";
import Switch from "react-bootstrap-switch";
import moment from 'moment';

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
import axios from "axios";
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
  const [projects, setProjects] = useState([]);
  const Change = 'actionType 1';
  const Assign = 'actionType 2';
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
  const editAuditor = () => {
    history.push({
      pathname: '/admin/admin-add-auditor',
      state: { actionType: 'edit' }
    });
  }

  const onClickAdd = () => {
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
                  <Col xs={12} md={3} size="sm"  >
                    Customer :  Alexander The III
                  </Col>
                  <Col xs={12} md={9} size="sm"  >
                    Auditor: XX/10
                  </Col>

                </Row>
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
                  <Button onClick={onClickAdd} color="primary" className="btn-info" style={
                      {

                        fontSize: "10px",

                      }
                    }>
                      <i className="now-ui-icons ui-2_settings-90" /> Add Auditor
                    </Button>
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
                      <th>Article Name</th>
                      <th>Language</th>
                      <th>Deadline</th>
                      <th className="text-right">Status</th>
                      <th className="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((project, index) => (
                     
                      <tr>

                        <td className="text-center">{index + 1}</td>
                        <td>{project.articelName}</td>
                        <td>{project.language}</td>
                        <td>{moment(project.deadline).format('DD/MM/YYYY')}</td>
                        <td className="text-right">
                          {project.status}
                        </td>
                        {project.actionType === Change && (
                          <td className="text-right btns-mr-5">
                            <Button onClick={editAuditor} color="primary" className="btn-round" style={
                              {

                                fontSize: "10px",

                              }
                            }>
                              <i className="now-ui-icons users_single-02" /> Edit
                            </Button>

                          </td>
                        )}
                        {project.actionType === Assign && (
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
                        )}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
              <CardHeader>
                <Row>
                  <Col xs={12} md={3} size="sm">

                  </Col>
                  <Col xs={12} md={2} size="sm">

                  </Col>
                  <Col xs={12} md={3} size="sm">

                   
                  </Col>
                  <Col xs={12} md={4} size="sm">

                  </Col>
                </Row>
              </CardHeader>

            </Card>
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
          </Col>
        </Row>
      </div>
    </>
  );
}

export default AdminProjectDetails;