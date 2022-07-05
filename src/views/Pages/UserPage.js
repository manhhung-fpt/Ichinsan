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
import Datetime from "react-datetime";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  Label,
  CardBody,
  CardFooter,
  Row,
  Col,
  Form,
  Input,
  FormGroup,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

function User() {
  var token = localStorage.getItem("token");
  var userprofile = jwt_decode(token);
  const [profiles, setProfiles] = useState({});
  const [profilesDetail, setProfilesDetail] = useState({})
  const [dob, setDob] = useState('');
  const [name, setName] = useState(profilesDetail.fullName);
  const [phoneNumber, setPhoneNumber] = useState(profilesDetail.phoneNumber);
  const [website, setWebsite] = useState(profilesDetail.website);
  const [gender, setGender] = useState(profilesDetail.gender);
  const [aboutMe, setAboutMe] = useState(profilesDetail.aboutMe);


  useEffect(() => {
    axios
      // .get(`https://62a586f2b9b74f766a3afda9.mockapi.io/api/projectDetails/Users/1`)
      .get(`${process.env.REACT_APP_API_URL}/users/${localStorage.userId}`)
      .then((res) => {
        const data = res.data;
        console.log(data);
        let profileId = data.profileId
        getProfileDetail(profileId)
        setProfiles(data);
      })

      .catch((err) => {
        console.log(err);
      })
  }, []);

  const getProfileDetail = (id) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/profiles/${id}`)
      .then((res) => {
        const data = res.data[0];
        console.log(data);
        setProfilesDetail(data)
      })
      .catch((err) => {
        console.log(err);
      })
  }
  const editProfile = () =>{
    var axios = require('axios');
  
    var data = JSON.stringify({
      "fullName":  `${name}`,
      "phoneNumber":`${phoneNumber}` ,
      "dob": `${dob}`,
      "gender": `${gender}`,
      "website": `${website}`,
      "aboutMe": `${aboutMe}`
    });

    var config = {
      method: 'post',
      url: `https://api-dotnet-test.herokuapp.com/api/profiles/${localStorage.profileId}`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {

      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>



      <PanelHeader size="sm" />
      <div className="content">

        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Edit Profile</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Company</label>
                        <Input
                          defaultValue="Ichisan FPT"
                          disabled
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="3">
                      <FormGroup>
                        <label>Username </label>

                        <Input
                          // defaultValue={localStorage.getItem("name")}
                          defaultValue={profilesDetail.fullName}
                          placeholder="Username"
                          type="text"
                          onChange={(e) => setName(e)}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label >
                          Email address
                        </label>
                        <Input
                          disabled
                          defaultValue={localStorage.getItem("email")}
                          placeholder="Email" type="email" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Gender</label>
                        <Input
                          defaultValue={profilesDetail.gender}
                          onChange={(e) => setGender()}
                          // placeholder="Male"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Phone number</label>
                        <Input
                          defaultValue={profilesDetail.phoneNumber}
                          // placeholder="Phone number"
                          type="text"
                          onChange={(e) => setPhoneNumber(e)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>Role</label>
                        <Input
                          disabled
                          defaultValue={profiles.role}
                          placeholder="Role"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label>Balance</label>
                        <Input
                          disabled
                          defaultValue={profilesDetail.balance}
                          placeholder="Balance"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>Date of Birth</label>
                        <Datetime
                          onChange={(e) => setDob(e)}
                          inputProps={{ placeholder: "Your Day of Birth" }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Website</label>
                        <Input
                          defaultValue={profilesDetail.website}
                          placeholder="Website"
                          type="text"
                          onChange={(e) => setWebsite(e)}
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
                          defaultValue={profilesDetail.aboutMe}
                          placeholder="Here can be your description"
                          rows="4"
                          type="textarea"
                          onChange={(e) => setAboutMe(e)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter className="text-right">
                <FormGroup check className="pull-left">
                  <Label check>

                  </Label>
                </FormGroup>
                <Button color="primary" onClick={editProfile} >
                  Edit
                </Button>
              </CardFooter>
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
                  <p className="description">{profilesDetail.fullName}</p>
                </div>
                <p className="description text-center">
                  {'"'}{profilesDetail.aboutMe}{'"'}
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

export default User;
