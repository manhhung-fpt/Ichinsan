
import React from "react";
import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
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
var selectOptions = [
  { value: "Category1", label: "Category1" },
  { value: "Category2", label: "Category2" },
  { value: "Category3", label: "Category3" },
  { value: "Category4", label: "Category4" },
  { value: "Category5", label: "Category5" },
  { value: "Category6", label: "Category6" },
];
function CustomerCreateFeedback() {
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
              <Breadcrumbs separator="›" aria-label="breadcrumb" style={{ padding: '20px' }}>
                <Link underline="hover" color="inherit" href="/admin/customer-home">
                  Customer Home
                </Link>
                <Link underline="hover" color="inherit" href="/admin/customer-arti-detail">
                  Project Article Deatails
                </Link>
                <Link underline="hover" color="inherit" href="/admin/customer-progress-project">
                  Project Progress
                </Link>
                <Typography color="text.primary">Create Feddback</Typography>
              </Breadcrumbs>
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
                  <Button color="primary" className="btn-info" style={
                    {

                      fontSize: "10px",

                    }
                  }>
                    Cancel
                  </Button>
                </Col>
                <Col md={6}>
                  <Button color="primary" className="btn-right" style={
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