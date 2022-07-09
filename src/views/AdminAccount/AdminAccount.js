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
import React, { useEffect, useState } from "react";
import Switch from "react-bootstrap-switch";

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
  CardFooter,
} from "reactstrap";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Select from "react-select";
import { useHistory } from "react-router-dom";
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import axios from "axios";
var rolesOptions = [
  { value: "Translator", label: "Translator" },
  { value: "Admin", label: "Admin" },
  { value: "Customer", label: "Customer" },
];
function AdminAccount() {
  let history = useHistory();
  const [singleRoleSelect, setSingleRoleSelect] = React.useState(null);
  const [multipleSelect, setMultipleSelect] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [roles, setRoles] = React.useState([]);
  const onClickView = () => {
    history.push("/admin/admin-view-info")
  }

  // useState 

  const [sortField, setSortField] = useState("");

  const selectFilterHandler = (e) => {
    alert(e.value)
    setSingleRoleSelect(() => e.value);
  }
  const [users, setUsers] = useState([]);
  const onclickPage = (e, page) => {
    setUsers([]);;
    setPage(page);
    axios
      .get(`https://api-dotnet-test.herokuapp.com/api/users?pageNumber=${page}&pageSize=5`)
      .then(res => {
        const data = res.data;
        setUsers(data);
      })
      .catch(err => { console.log(err) })
  }

  useEffect(() => {
    axios
      .get(`https://api-dotnet-test.herokuapp.com/api/users?pageNumber=1&pageSize=5`)
      .then((res) => {
        const data = res.data;
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);




  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md="12" >
            <Card>

              <CardHeader>
                <CardTitle tag="h4">Accounts</CardTitle>
                <Row>
                  <Col xs={12} md={9} size="sm"  >
                    Sort :
                  </Col>
                  <Col Col xs={12} md={3} size="sm" >

                  </Col>
                </Row>
                <Row>

                  <Col xs={12} md={3} size="sm">
                    <Select
                      className="react-select primary"
                      classNamePrefix="react-select"
                      placeholder="Select a role"
                      name="singleSelect"
                      value={singleRoleSelect}
                      options={rolesOptions}
                      onChange={selectFilterHandler}
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
                      <th>Email</th>
                      <th>Balance</th>
                      <th>Role</th>

                      <th className="text-right">Status</th>
                      <th className="text-right">View</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) =>
                    (
                      <tr>
                        <td className="text-center">{index + 1}</td>
                        <td>{user.email}</td>
                        <td>{user.balance}</td>
                        <td>{user.role}</td>

                        <td className="text-right">
                          <Switch defaultValue={user.status} />


                        </td>
                        <td className="text-right btns-mr-5">
                          <a style={{ all: "unset", cursor: "pointer" }} href={`admin-view-info?id=${user.profileId}`}>
                            <Button onClick={onClickView} color="primary" className="btn-round" style={
                              {

                                fontSize: "10px",

                              }
                            }>
                              <i className="now-ui-icons users_single-02" /> View
                            </Button>
                          </a>
                        </td>
                      </tr>
                    )
                    )}

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

export default AdminAccount;