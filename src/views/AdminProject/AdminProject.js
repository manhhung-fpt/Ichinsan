

import Switch from "react-bootstrap-switch";
import axios from 'axios';
import React, { useEffect, useState } from "react";

// reactstrap components
import {
  Table,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardFooter,
  Row,
  Col,
  Button,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import { useHistory } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

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
function AdminProject() {
  let history = useHistory();
  const [singleSelect, setSingleSelect] = React.useState(null);
  const [multipleSelect, setMultipleSelect] = React.useState(null);
  const [page, setPage] = React.useState(1);


  const [projects, setProjects] = useState([]);
  React.useEffect(() => {
    axios
      .get("https://api-dotnet-test.herokuapp.com/api/projects/admins?pageNumber=1&pageSize=6")
      .then((res) => {
        const data = res.data;
        setProjects(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);


  const onclickPage = (e, page) => {
    setProjects([]);;
    setPage(page);
    axios
      .get(`https://api-dotnet-test.herokuapp.com/api/projects/admins?pageNumber=1&pageSize=6`)
      .then(res => {
        const data = res.data;
        setProjects(data);
      })
      .catch(err => { console.log(err) })
  }

  const onClick = () => {
    history.push("/admin/admin-projec/admin-project-details")
  };
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md="12" >
            <Card>

              <CardHeader>
                <CardTitle tag="h4">Projects</CardTitle>
                <Row>
                  <Col xs={12} md={3} size="sm">

                  </Col>
                  <Col xs={12} md={3} size="sm">

                  </Col>
                  <Col xs={12} md={3} size="sm">

                  </Col>
                  <Col xs={12} md={3} size="sm">

                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th className="text-center">#</th>
                      <th>Project Name</th>
                      <th>Customer</th>
                      <th>Auditor</th>
                      <th >Status</th>
                      <th className="text-right">View</th>
                    </tr>
                  </thead>
                  <tbody>


                    {
                      projects.map((project, index) => {
                        return (<tr>
                          <td className="text-center">{index + 1}</td>
                          <td>{project.name}</td>
                          <td>{project.customerName}</td>
                          <td>{project.totaltAuditor}</td>
                          <td >
                            {project.status}
                          </td>
                          <td className="text-right">
                          <a style={{ all: "unset", cursor: "pointer" }} href={`admin-project-details?id=${project.id}`}>
                            <Button onClick={onClick} color="primary" className="btn-round" style={
                              {

                                fontSize: "10px",

                              }
                            }>
                              <i className="now-ui-icons users_single-02" /> View
                            </Button>
                            </a>

                          </td>
                        </tr>);
                      })
                    }


                  </tbody>
                </Table>
              </CardBody>
              <CardFooter style={{ alignItems: 'center' }} >
                <Stack spacing={2}>
                  <Pagination
                    count={5}
                    page={page}
                    onChange={onclickPage}
                    variant="outlined" color="primary" />
                </Stack>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default AdminProject;