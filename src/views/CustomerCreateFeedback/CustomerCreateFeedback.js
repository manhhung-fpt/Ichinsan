
import React from "react";
import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
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

import Select from "react-select";
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import { useHistory } from "react-router-dom";
import CardActions from '@mui/material/CardActions';
import NotificationAlert from "react-notification-alert";
var selectOptions = [
  { value: 1, label: "Accuracy" },
  { value: 2, label: "Spelling" },
  { value: 3, label: "Punctuation" },
  { value: 4, label: "Style" },
  { value: 5, label: "Layout" },
  { value: 6, label: "Client’s requirements" },
];
function CustomerCreateFeedback(props) {
  const queryParams = new URLSearchParams(props.location.search);

  const articleId = queryParams.get("id");

  const projectId = queryParams.get("projectId");
  const notificationAlert = React.useRef();
  const [singleSelect, setSingleSelect] = React.useState(null);
  const [singleFileName, setSingleFileName] = React.useState("");
  const [singleFile, setSingleFile] = React.useState(null);
  const [openedCollapses, setOpenCollapses] = React.useState(["collapseOne"]);
  const [hTabs, sethTabs] = React.useState("ht1");
  const [vTabs, setvTabs] = React.useState("vt1");
  const [vTabsIcons, setvTabsIcons] = React.useState("vti1");
  const [pageSubcategories, setpageSubcategories] = React.useState("ps1");
  const singleFileRef = React.useRef();
  const [rating, setRating] = React.useState(2);
  const [description, setDescription] = React.useState('');
  const [count2, setCount2] = React.useState(0);

  let history = useHistory();
  const alertSuccesfully = () =>{
    var options = {};
    options = {
      place: "tr",
      message:"Submit review sucess",
      type: "info",
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 7,
    };
    notificationAlert.current.notificationAlert(options);
  }
  const alertError = (e) =>{
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
  const uId = localStorage.getItem("userId")

  const onChangeDescription = (e) => {
    setDescription(e.target.value)
    setCount2(e.target.value.length)
  }
  const submitReview = () => {
    var axios = require('axios');
    var data = JSON.stringify({
      "projectId": projectId,
      "articleId": articleId,
      "feedbackCategoryId": singleSelect? singleSelect.value : null,
      "content": description,
      "rating": rating,
      "createdBy": uId
    });

    var config = {
      method: 'post',
      url: 'https://api-dotnet-test.herokuapp.com/api/feedbacks',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        alertSuccesfully()
        
      })
      .catch(function (error) {
        alertError(error.message);
      });

  }
  const [count, setCount] = React.useState(0);
  const onclickProject = () => {
    history.push("/admin/admin-projec-category");
  }
  const onclickFeedBack = () => {
    history.push("/admin/admin-feedback-category");
  }
  const onClickBack = () => {
    history.push("/admin/customer-recruitment-detail")
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
                    Category
                  </Col>
                  <Col xs={12} md={5} size="sm"  >
                    <Select
                      className="react-select primary"
                      classNamePrefix="react-select"
                      placeholder="Single Select"
                      name="Choose Category"
                      value={singleSelect}
                      options={selectOptions}
                      onChange={(value) => setSingleSelect(value)}
                    />
                  </Col>
                  <Col xs={12} md={5} size="sm"  ></Col>
                </Row>
              </CardBody>
              <CardBody>
                <Row>
                  <Col xs={12} md={2} size="sm"  >
                    Rating
                  </Col>
                  <Col xs={12} md={5} size="sm" >
                    <Rating
                      name="simple-controlled"
                      value={rating}
                      onChange={(event, newValue) => {
                        setRating(newValue);
                      }}
                    />
                  </Col>
                  <Col xs={12} md={5} size="sm"  >

                  </Col>
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
                  <Button color="primary" onClick={submitReview} className="btn-right" style={
                    {

                      fontSize: "10px",

                    }
                  }>

                    Create
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

export default CustomerCreateFeedback;