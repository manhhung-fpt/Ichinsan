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
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

import Select from "react-select";
import { useHistory } from "react-router-dom";
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import axios from "axios";
var selectOptions = [
  { value: "one", label: "One" },
  { value: "two", label: "Two" },
  { value: "three", label: "Three" },
  { value: "four", label: "Four" },
  { value: "five", label: "Five" },
  { value: "six", label: "Six" },
];
function AdminAccount() {
  let history = useHistory();
  const [singleSelect, setSingleSelect] = React.useState(null);
  const [multipleSelect, setMultipleSelect] = React.useState(null);
  const onClickView = () => {
    history.push("/admin/wizard")
  }

  // useState 
  const [users, setUsers] = useState([]);

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
  console.log(users);
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
                    Paging:
                  </Col>
                </Row>
                <Row>

                  <Col xs={12} md={3} size="sm">
                    <Select
                      className="react-select warning"
                      classNamePrefix="react-select"
                      isMulti
                      closeMenuOnSelect={false}
                      placeholder="Sort "
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
                      <th>Full Name</th>
                      <th>Roles</th>

                      <th className="text-right">Status</th>
                      <th className="text-right">View</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => 
                       (
                        <tr>
                          <td className="text-center">{index+1}</td>
                          <td>{user.email}</td>
                          <td>{user.balance}</td>

                          <td className="text-right">
                            <Switch defaultValue={false} />


                          </td>
                          <td className="text-right btns-mr-5">
                            <a href="/admin/wizard"></a>
                            <Button onClick={onClickView} color="primary" className="btn-round">
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
        </Row>
      
      </div>
    </>
  );
}

export default AdminAccount;