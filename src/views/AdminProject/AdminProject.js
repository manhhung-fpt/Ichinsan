
import React from "react";
import Switch from "react-bootstrap-switch";
import axios from 'axios';

// reactstrap components
import {
  Table,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import { useHistory } from "react-router-dom";

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
  // fake API Data
  const [fakeData, setFakeData] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('https://reqres.in/api/users')
      .then(res => {
        setFakeData(res.data.data);
      })
      .catch(err => { console.log(err) })
  }, [])
  console.log(fakeData);


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
                <CardTitle tag="h4">Account Project</CardTitle>
                <Row>
                  <Col xs={12} md={3} size="sm">
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
                      <th className="text-right">Status</th>
                      <th className="text-right">View</th>
                    </tr>
                  </thead>
                  <tbody>


                    {
                      fakeData.map((item, index) => {
                        return (<tr>
                          <td className="text-center">{index + 1}</td>
                          <td>{item.first_name}</td>
                          <td>{item.last_name}</td>
                          <td>{item.email}</td>
                          <td className="text-right">
                            <Switch defaultValue={false} />


                          </td>
                          <td className="text-right btns-mr-5">

                            <Button onClick={onClick} color="primary" className="btn-round" style={
                              {

                                fontSize: "10px",

                              }
                            }>
                              <i className="now-ui-icons users_single-02" /> View
                            </Button>

                          </td>
                        </tr>);
                      })
                    }


                  </tbody>
                </Table>
              </CardBody>
            </Card>
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
        </Row>
      </div>
    </>
  );
}

export default AdminProject;