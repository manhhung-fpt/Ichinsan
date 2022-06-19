
import React from "react";
import Switch from "react-bootstrap-switch";
import Datetime from "react-datetime";

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
  { value: "English", label: "English" },
]; var selectOptions1 = [

  { value: "Japanese", label: "Japanese" },
];

function CustomerEditArticle() {
  const [singleSelect, setSingleSelect] = React.useState(null);
  const [singleSelect1, setSingleSelect1] = React.useState(null);
  const [singleFileName, setSingleFileName] = React.useState("");
  const [singleFileName1, setSingleFileName1] = React.useState("");

  const [singleFile, setSingleFile] = React.useState(null);
  const [singleFile1, setSingleFile1] = React.useState(null);
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
  const addSingleFile1 = (e, type) => {
    let fileNames = "";
    let files = e.target.files;
    for (let i = 0; i < e.target.files.length; i++) {
      fileNames = fileNames + e.target.files[i].name;
    }
    setSingleFile1(files);
    setSingleFileName1(fileNames);
  };
  const [count, setCount] = React.useState(0);
  const onclickProject = () => {
    history.push("/admin/admin-projec-category");
  }
  const onclickFeedBack = () => {
    history.push("/admin/admin-feedback-category");
  }
  const onClickBack = () => {
    history.push("/admin/customer-progress-article");
  }
  const onClickDone = () => {
    history.push("/admin/customer-progress-article");
  }
  const onClickCancel = () => {
    history.push("/admin/customer-progress-article");
  }
  const handleSingleFileInput = (e) => {
    singleFileRef.current.click(e);
  };

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
                        placeholder="Here can be your tittle"
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
                    Language from
                  </Col>
                  <Col xs={12} md={5} size="sm"  >
                    <Select
                      className="react-select primary"
                      classNamePrefix="react-select"
                      placeholder="Choose Language"
                      name="Choose Category"
                      value={singleSelect1}
                      options={selectOptions1}
                      onChange={(value) => setSingleSelect1(value)}
                    />
                  </Col>
                  <Col xs={12} md={5} size="sm"  ></Col>
                </Row>
              </CardBody>
              <CardBody>

                <Row>
                  <Col xs={12} md={2} size="sm"  >
                    Language to
                  </Col>
                  <Col xs={12} md={5} size="sm"  >
                    <Select
                      className="react-select primary"
                      classNamePrefix="react-select"
                      placeholder="Choose Language"
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
              <CardBody>

                <Row>
                  <Col xs={12} md={2} size="sm"  >
                    File - allow only file types: docx, pdf
                  </Col>
                  <Col xs={12} md={5} size="sm"  >
                    <FormGroup className="form-file-upload form-file-simple">
                      <Input
                        type="text"
                        className="inputFileVisible"
                        placeholder="Upload File..."
                        onClick={(e) => handleSingleFileInput(e)}
                        defaultValue={singleFileName}
                      />
                      <input
                        type="file"
                        className="inputFileHidden"
                        style={{ zIndex: -1 }}
                        ref={singleFileRef}
                        onChange={(e) => addSingleFile(e)}
                      />
                    </FormGroup>
                  </Col>
                  <Col xs={12} md={5} size="sm"  >

                  </Col>
                </Row>

              </CardBody>
              <CardBody>

                <Row>
                  <Col xs={12} md={2} size="sm"  >
                    Deadline Apply
                  </Col>
                  <Col xs={12} md={5} size="sm"  >
                    <FormGroup>
                      <Datetime
                        inputProps={{ placeholder: "Datetime Picker Here" }}
                      />
                    </FormGroup>
                  </Col>
                  <Col xs={12} md={5} size="sm"  >

                  </Col>
                </Row>

              </CardBody>
              <CardBody>

                <Row>
                  <Col xs={12} md={2} size="sm"  >
                    Due Date
                  </Col>
                  <Col xs={12} md={4} size="sm"  >
                    <FormGroup>
                      <Datetime
                        timeFormat={false}
                        inputProps={{ placeholder: "Datetime Picker Here" }}
                      />
                    </FormGroup>
                  </Col>
                  <Col xs={12} md={2} size="sm"  >
                    Due Time
                  </Col>
                  <Col xs={12} md={4} size="sm"  >
                    <FormGroup>
                      <Datetime
                        dateFormat={false}
                        inputProps={{ placeholder: "Datetime Picker Here" }}
                      />
                    </FormGroup>
                  </Col>
                </Row>

              </CardBody>
              <CardBody>

                <Row>
                  <Col xs={12} md={2} size="sm"  >
                    Word Count
                  </Col>
                  <Col xs={12} md={5} size="sm"  >
                    {count}/500
                  </Col>
                  <Col xs={12} md={5} size="sm"  >

                  </Col>
                </Row>

              </CardBody>
              <CardBody>

                <Row>
                  <Col xs={12} md={2} size="sm"  >
                    Total Paid
                  </Col>
                  <Col xs={12} md={5} size="sm"  >
                    <span style={
                      {
                        color: "red",
                      }
                    }>
                      $ 5000
                    </span>
                  </Col>
                  <Col xs={12} md={5} size="sm"  >

                  </Col>
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
                  <Button   onClick={onClickDone} className="btn-right" color="primary" style={
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

export default CustomerEditArticle;