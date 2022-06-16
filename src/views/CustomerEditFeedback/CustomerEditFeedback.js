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
import React from "react";
import Switch from "react-bootstrap-switch";
import Datetime from "react-datetime";
import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
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
  Form,
} from "reactstrap";

import Select from "react-select";
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import { useHistory } from "react-router-dom";
import CardActions from '@mui/material/CardActions';
var selectOptions = [
  { value: "Category1", label: "Category1" },
  { value: "Category2", label: "Category2" },
  { value: "Category3", label: "Category3" },
  { value: "Category4", label: "Category4" },
  { value: "Category5", label: "Category5" },
  { value: "Category6", label: "Category6" },
];
function CustomerEditFeedback() {
  const [singleSelect, setSingleSelect] = React.useState(null);
  const [singleFileName, setSingleFileName] = React.useState("");
  const [singleFile, setSingleFile] = React.useState(null);
  const [openedCollapses, setOpenCollapses] = React.useState(["collapseOne"]);
  const [hTabs, sethTabs] = React.useState("ht1");
  const [vTabs, setvTabs] = React.useState("vt1");
  const [vTabsIcons, setvTabsIcons] = React.useState("vti1");
  const [pageSubcategories, setpageSubcategories] = React.useState("ps1");
  const singleFileRef = React.useRef();

  let history = useHistory();
  const addSingleFile = (e, type) => {
    let fileNames = "";
    let files = e.target.files;
    for (let i = 0; i < e.target.files.length; i++) {
      fileNames = fileNames + e.target.files[i].name;
    }
    setSingleFile(files);
    setSingleFileName(fileNames);
  };
  const [count, setCount] = React.useState(0);
  const onclickProject = () => {
    history.push("/admin/admin-projec-category");
  }
  const onclickFeedBack = () => {
    history.push("/admin/admin-feedback-category");
  }
  const onClickBack = () => {
    history.push("/admin/customer-progress-project")
  }
  const onClickEdit = () => {
    history.push("/admin/customer-progress-article")
  }
  const onClickCancel = () => {
    history.push("/admin/customer-progress-article")
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

              <CardBody>

                <Row>
                  <Col xs={12} md={2} size="sm"  >
                    Tittle
                  </Col>
                  <Col xs={12} md={5} size="sm"  >
                    <FormGroup>
                      <Input
                        cols="80"
                        defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in
                            that two seat Lambo."
                        placeholder="Here can be your description"
                        rows="4"
                        type="textarea"
                        onChange={e => setCount(e.target.value.length)}
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
                  <Col xs={12} md={5} size="sm" style={{
                    color: "#ec00f9"
                  }}>
                    <StarRateIcon></StarRateIcon>
                    <StarRateIcon></StarRateIcon>
                    <StarRateIcon></StarRateIcon>
                    <StarRateIcon></StarRateIcon>
                    <StarOutlineIcon></StarOutlineIcon>
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
                        defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in
                            that two seat Lambo."
                        placeholder="Here can be your description"
                        rows="4"
                        type="textarea"
                        onChange={e => setCount(e.target.value.length)}
                      />
                    </FormGroup>
                    {count}/500
                  </Col>
                  <Col xs={12} md={5} size="sm"  ></Col>
                </Row>

              </CardBody>
              <CardActions disableSpacing>
                <Col md={5}>

                </Col>
                <Col md={1}>
                  <Button  onClick={onClickCancel} className="btn-info" color="primary" style={
                    {

                      fontSize: "10px",

                    }
                  }>
                    Cancel
                  </Button>
                </Col>
                <Col md={6}>
                  <Button  onClick={onClickEdit} className="btn-right" color="primary" style={
                    {

                      fontSize: "10px",

                    }
                  }>

                    Edit
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

export default CustomerEditFeedback;