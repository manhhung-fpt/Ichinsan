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
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

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
  const [roles, setRoles] = React.useState([]);
  const onClickView = () => {
    history.push("/admin/wizard")
  }

  // useState 
  const [users, setUsers] = useState([]);
  const [sortField, setSortField] = useState("");

  const selectFilterHandler = (e) => {
    alert(e.value)
    setSingleRoleSelect(() => e.value);
  }

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users?pageNumber=1&pageSize=3`)
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
                          <a href="/admin/wizard"></a>
                          <Button onClick={onClickView} color="primary" className="btn-round" style={
                            {

                              fontSize: "10px",

                            }
                          }>
                            <i className="now-ui-icons users_single-02" /> View
                          </Button>

                        </td>
                      </tr>
                    )
                    )}

                  </tbody>
                </Table>
              </CardBody>


            </Card>
          </Col>
          <Col xs={12} md={5} size="sm">

          </Col>
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

      </div>
    </>
  );
}

export default AdminAccount;