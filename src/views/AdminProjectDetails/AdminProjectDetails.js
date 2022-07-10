
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
import ReactCountryFlag from "react-country-flag"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
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
function AdminProjectDetails(props) {
  const projectId = props.location.search.split("=")[1];
  let history = useHistory();
  const [projects, setProjects] = useState([]);
  const [projectDetail, setProjectDetail] = useState({})
  const [auditorName, setAuditorName] = useState('')
  const Change = 'actionType 1';
  const Assign = 'actionType 2';
  useEffect(() => {
    axios
      .get(`https://api-dotnet-test.herokuapp.com/api/projects/admins/${projectId}`)
      .then((res) => {
        const data = res.data;
        setProjectDetail(data)
        setProjects(data.articleDetailList);
        
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
                    Customer :  {projectDetail.customerName}
                  </Col>
                  <Col xs={12} md={9} size="sm"  >
                    Auditor: XX/{projectDetail.totaltAuditor}
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
                </Row>
              </CardHeader>

              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th className="text-center">#</th>
                      <th>Article Name</th>
                      <th>Auditor Name</th>
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
                        <td>{project.name}</td>
                        <td>{project.auditorName}</td>
                        <td><ReactCountryFlag
                          countryCode={project.languageFrom}
                          svg
                          style={{
                            width: '2em',
                            height: '2em',
                          }}
                          title={project.languageFrom}
                        />
                          <ArrowRightAltIcon></ArrowRightAltIcon>
                          <ReactCountryFlag
                            countryCode={project.languageTo}
                            svg
                            style={{
                              width: '2em',
                              height: '2em',
                            }}
                            title={project.languageTo}
                          /></td>
                        <td>{moment(project.deadline).format('DD/MM/YYYY')}</td>
                        <td className="text-right">
                          {project.status}
                        </td>
                          <td className="text-right btns-mr-5">
                            {project.auditorName === null && (
                              <Button onClick={editAuditor} color="primary" className="btn-info" style={
                                {
  
                                  fontSize: "10px",
  
                                }
                              }>
                                <i className="now-ui-icons users_single-02" /> Assign
                              </Button>

                            )}
                            {project.auditorName !== null && (
                              <Button onClick={onClickAdd} color="primary" className="btn-round" style={
                                {
  
                                  fontSize: "10px",
  
                                }
                              }>
                                <i className="now-ui-icons users_single-02" /> Edit
                              </Button>
                            )}
                            

                          </td>
                        
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