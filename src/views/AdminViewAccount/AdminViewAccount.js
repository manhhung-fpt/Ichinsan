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
import axios from "axios";
import jwt_decode from "jwt-decode";
import moment from "moment";
import Datetime from "react-datetime";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Form,
  Input,
  FormGroup,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import { useHistory } from "react-router-dom";
import { CardText } from 'reactstrap';
import User from "views/Pages/UserPage";


function AdminViewAccount(props) {
  const profileId = props.location.search.split("=")[1];
  const userId = props.location.search.split("=")[1];

  // const [id, setId] = React.useState("");
  let history = useHistory();


  const [profiles, setProfiles] = React.useState({});
  React.useEffect(() => {
    axios
      .get(`https://api-dotnet-test.herokuapp.com/api/profiles/${profileId}`)
      .then(res => {
        //setFakeData(res.data.data);
        setProfiles(res.data[0]);
      })
      .catch(err => { console.log(err) })
  }, [])
  console.log(profileId)


  const [users, setUsers] = React.useState({});
  React.useEffect(() => {
    axios
      .get(`https://api-dotnet-test.herokuapp.com/api/users/${userId}`)
      .then(res => {
        //setFakeData(res.data.data);
        setUsers(res.data[0]);
      })
      .catch(err => { console.log(err) })
  }, [])




  const onClickBack = () => {
    history.push("/admin/admin-account")
  }

  return (
    <>



      <PanelHeader size="sm" />
      <div className="content">

        <Row>
          <Col md="8">
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
                <h5 className="title">User Infor</h5>
              </CardHeader>

              <CardBody>
                <Form>
                  <Row>

                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Username </label>
                        <Input
                          disabled
                          defaultValue={profiles.fullName}
                          placeholder="Username"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label >
                          Email address
                        </label>
                        <Input
                          disabled
                          defaultValue={profiles.email}
                          // defaultValue={localStorage.getItem("email")}
                          placeholder="Email" type="email" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Gender</label>
                        <Input
                          defaultValue={profiles.gender}
                          disabled
                          // placeholder="Male"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Phone number</label>
                        <Input
                          defaultValue={profiles.phoneNumber}
                          // placeholder="Phone number"
                          type="text"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>Role</label>
                        <Input
                          defaultValue={profiles.role}
                          placeholder="Role"
                          type="text"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label>Balance</label>
                        <Input
                          defaultValue={profiles.balance}
                          placeholder="Balance"
                          type="text"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>Date of Birth</label>
                        <Input
                          defaultValue= {moment(new Date(profiles.dob)).format("DD/MM/YYYY")}
                          // defaultValue={profiles.dob}
                          placeholder=""
                          type="datetime-local"
                          disabled
                        />
                        {/* <Datetime
                        inputProps={{ placeholder: "Datetime Picker Here" }}
                        defaultValue= {moment(new Date(profiles.dob)).format("DD/MM/YYYY")}
                        disabled
                      /> */}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Website</label>
                        <Input
                          defaultValue={profiles.WebSite}
                          placeholder="Website"
                          type="text"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>About Me</label>
                        <Input
                          cols="80"
                          defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in
                            that two seat Lambo."
                          placeholder="Here can be your description"
                          rows="4"
                          type="textarea"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>

            </Card>

          </Col>
          <Col md="4">
            <Card className="card-user">
              <div className="image">
                <img alt="..." src={require("assets/img/bg5.jpg").default} />
              </div>
              <CardBody>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={localStorage.getItem("profilePic")}
                    />
                    <h5 className="title">{localStorage.getItem("name")}</h5>
                  </a>
                  <p className="description">michael24</p>
                </div>
                <p className="description text-center">
                  {'"'}Lamborghini Mercy <br />
                  Your chick she so thirsty <br />
                  I'm in that two seat Lambo{'"'}
                </p>
              </CardBody>
              <hr />
              <div className="button-container">
                <Button
                  className="btn-icon btn-round"
                  color="neutral"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  <i className="fab fa-facebook-square" />
                </Button>
                <Button
                  className="btn-icon btn-round"
                  color="neutral"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  <i className="fab fa-twitter" />
                </Button>
                <Button
                  className="btn-icon btn-round"
                  color="neutral"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  <i className="fab fa-google-plus-square" />
                </Button>
              </div>
            </Card>
          </Col>
        </Row>

      </div>



    </>
  );
}

export default AdminViewAccount;
