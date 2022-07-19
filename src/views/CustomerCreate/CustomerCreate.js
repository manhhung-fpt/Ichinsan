
import React from "react";
import { useEffect } from "react";

// reactstrap components
import {
  FormGroup,
  Input,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Button,
} from "reactstrap";
import axios from "axios";

import Select from '@mui/material/Select';
import { MenuItem } from "@mui/material";
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import { useHistory } from "react-router-dom";
import CardActions from '@mui/material/CardActions';
import NotificationAlert from "react-notification-alert";
function CustomerCreate() {
  const [singleSelect, setSingleSelect] = React.useState("");
  const [projectName, setProjectName] = React.useState("");
  const [summary, setSummary] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [category, setCategory] = React.useState([]);
  let history = useHistory();
  const notificationAlert = React.useRef();
  const [count, setCount] = React.useState(0);
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  const alertSuccesfully = () => {
    var options = {};
    options = {
      place: "tr",
      message: "Create sucessfully",
      type: "info",
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 7,
    };
    notificationAlert.current.notificationAlert(options);
  }
  const alertError = (e) => {
    var options = {};
    options = {
      place: "tr",
      message: e,
      type: "danger",
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 7,
    };
    notificationAlert.current.notificationAlert(options);
  }
  const userName = localStorage.getItem('name');
  const uId = localStorage.getItem('userId')
  const imageUrl = localStorage.getItem('profilePic')
  const sumbitForm = () => {
    var axios = require('axios');
    var data = JSON.stringify({
      "notiName": "Add Project",
      "notiContent": `${userName} has created a project : ${projectName}`,
      "userId": uId,
      "projectName": projectName,
      "projectCategoryId": singleSelect,
      "customerId": uId,
      "projectDescription": description,
      "image": imageUrl
    });

    var config = {
      method: 'post',
      url: 'https://api-dotnet-test.herokuapp.com/api/projects/pushnoti',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        alertSuccesfully()
        setTimeout(() => {
          history.push('/admin/customer-home');
        }, 2000);
      })
      .catch(function (error) {
        alertError(error.message);
      });

  }

  const onClickBack = () => {
    history.push("/admin/customer-home")
  }
  /// service for category
  useEffect(() => {
    var axios = require('axios');
    var data = '';
    var config = {
      method: 'get',
      url: 'https://api-dotnet-test.herokuapp.com/api/projectcategories',
      headers: {},
      data: data
    };
    axios(config)
      .then(function (response) {
        setCategory(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleChange = (event) => {
    setSingleSelect(event.target.value);
  };
  console.log(singleSelect);
  const onChangeProjectName = (e) => {
    setProjectName(e.target.value)
    setCount(e.target.value.length)
  }
  const onChangeSummary = (e) => {
    setSummary(e.target.value)
    setCount1(e.target.value.length)

  }
  const onChangeDescription = (e) => {
    setDescription(e.target.value)
    setCount2(e.target.value.length)

  }

  return (
    <>
      <NotificationAlert ref={notificationAlert} />
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

              <CardBody>

                <Row>
                  <Col xs={12} md={2} size="sm"  >
                    Project Name
                  </Col>
                  <Col xs={12} md={5} size="sm"  >
                    <FormGroup>
                      <Input
                        cols="80"
                        placeholder="What is your project name going to be ?"
                        rows="4"
                        type="textarea"
                        onChange={onChangeProjectName}
                      />
                    </FormGroup>
                    {count}/500
                  </Col>
                  <Col xs={12} md={5} size="sm"  ></Col>
                </Row>

              </CardBody>
              <CardBody>

                <Row>
                  <Col xs={12} md={2} size="sm"  >
                    Category
                  </Col>
                  <Col xs={12} md={5} size="sm"  >
                    <Select

                      sx={{ m: 1, minWidth: 500 }}
                      placeholder="Single Select"
                      name="Choose Category"
                      value={singleSelect}
                      displayEmpty
                      onChange={handleChange}
                    >
                      {category.map((c, index) => (
                        <MenuItem
                          key={c.name}
                          value={c.id}
                        >
                          {c.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </Col>
                  <Col xs={12} md={5} size="sm"  ></Col>
                </Row>
              </CardBody>

              <CardBody>

                <Row>
                  <Col xs={12} md={2} size="sm"  >
                    Description
                  </Col>
                  <Col xs={12} md={5} size="sm"  >
                    <FormGroup>
                      <Input
                        cols="80"
                        placeholder="Here can be your description"
                        rows="4"
                        type="textarea"
                        onChange={onChangeDescription}
                      />
                    </FormGroup>
                    {count2}/500
                  </Col>
                  <Col xs={12} md={5} size="sm"  ></Col>
                </Row>

              </CardBody>
              <CardActions disableSpacing>
                <Col md={5}>

                </Col>
                <Col md={1}>
                  <Button color="primary" className="btn-info" style={
                    {

                      fontSize: "10px",

                    }
                  }>
                    Cancel
                  </Button>
                </Col>
                <Col md={6}>
                  <Button onClick={sumbitForm} color="primary" className="btn-right" style={
                    {

                      fontSize: "10px",

                    }
                  }>

                    Done
                  </Button>
                </Col>
              </CardActions>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default CustomerCreate;