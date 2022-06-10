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
// react plugin used to create datetimepicker
import Datetime from "react-datetime";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";
// react plugin that creates an input with badges
import TagsInput from "react-tagsinput";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormGroup,
  Input,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col,
  Progress,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import ImageUpload from "components/CustomUpload/ImageUpload.js";

var selectOptions = [
  { value: "one", label: "One" },
  { value: "two", label: "Two" },
  { value: "three", label: "Three" },
  { value: "four", label: "Four" },
  { value: "five", label: "Five" },
  { value: "six", label: "Six" },
];

function ExtendedForms() {
  const [singleSelect, setSingleSelect] = React.useState(null);
  const [multipleSelect, setMultipleSelect] = React.useState(null);
  const [singleFileName, setSingleFileName] = React.useState("");
  const [multipleFileName, setMultipleFileName] = React.useState("");
  // eslint-disable-next-line
  const [singleFile, setSingleFile] = React.useState(null);
  // eslint-disable-next-line
  const [multipleFile, setMultipleFile] = React.useState(null);
  const [regularTags, setRegularTags] = React.useState([
    "pizza",
    "pasta",
    "parmesan",
  ]);
  const slider1 = React.useRef();
  const slider2 = React.useRef();
  const singleFileRef = React.useRef();
  const multipleFileRef = React.useRef();
  React.useEffect(() => {
    Slider.create(slider1.current, {
      start: [40],
      connect: [true, false],
      step: 1,
      range: { min: 0, max: 100 },
    });
    Slider.create(slider2.current, {
      start: [20, 60],
      connect: [false, true, false],
      step: 1,
      range: { min: 0, max: 100 },
    });
  }, []);
  // // // to understand the bellow functions please take a look at the end of the document as well
  // this handles the onFocus event over the normal / visible Inputs (reactstrap components)
  // that will trigger the on click of the non-visible inputs (normal html component)
  const handleSingleFileInput = (e) => {
    singleFileRef.current.click(e);
  };
  const handleMultipleFileInput = (e) => {
    multipleFileRef.current.click(e);
  };
  // this is the function triggered for the file type input
  // it will store inside the components state the names of the files and the files
  // after that, if you want to save the files you need to add a special on submit function for that
  // we haven't since we do not need to save the files - everything in our product is only front-end
  const addSingleFile = (e, type) => {
    let fileNames = "";
    let files = e.target.files;
    for (let i = 0; i < e.target.files.length; i++) {
      fileNames = fileNames + e.target.files[i].name;
    }
    setSingleFile(files);
    setSingleFileName(fileNames);
  };
  const addMultipleFile = (e, type) => {
    let fileNames = "";
    let files = e.target.files;
    for (let i = 0; i < e.target.files.length; i++) {
      fileNames = fileNames + e.target.files[i].name;
      if (i !== e.target.files.length - 1) {
        fileNames = fileNames + ", ";
      }
    }
    setMultipleFile(files);
    setMultipleFileName(fileNames);
  };
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col xs={12} md={4}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Datetime Picker</CardTitle>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Datetime
                    inputProps={{ placeholder: "Datetime Picker Here" }}
                  />
                </FormGroup>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Date Picker</CardTitle>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Datetime
                    timeFormat={false}
                    inputProps={{ placeholder: "Datetime Picker Here" }}
                  />
                </FormGroup>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Time Picker</CardTitle>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Datetime
                    dateFormat={false}
                    inputProps={{ placeholder: "Datetime Picker Here" }}
                  />
                </FormGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={12} xs={12}>
            <Card>
              <CardBody>
                <Row>
                  <Col xs={12} md={6}>
                    <CardTitle tag="h4">Toggle Buttons</CardTitle>
                    <Row>
                      <Col xs={12} md={4}>
                        <p className="category">Default</p>
                        <Switch defaultValue={false} /> <Switch />
                      </Col>
                      <Col xs={12} md={4}>
                        <p className="category">Plain</p>
                        <Switch
                          onText=""
                          offText=""
                          defaultValue={false}
                        />{" "}
                        <Switch onText="" offText="" />
                      </Col>
                      <Col xs={12} md={4}>
                        <p className="category">With Icons</p>
                        <Switch
                          onText={<i className="now-ui-icons ui-1_check" />}
                          offText={
                            <i className="now-ui-icons ui-1_simple-remove" />
                          }
                          defaultValue={false}
                        />{" "}
                        <Switch
                          onText={<i className="now-ui-icons ui-1_check" />}
                          offText={
                            <i className="now-ui-icons ui-1_simple-remove" />
                          }
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} md={6}>
                    <CardTitle tag="h4">Customisable Select</CardTitle>
                    <Row>
                      <Col xs={12} md={6}>
                        <Select
                          className="react-select primary"
                          classNamePrefix="react-select"
                          placeholder="Single Select"
                          name="singleSelect"
                          value={singleSelect}
                          options={selectOptions}
                          onChange={(value) => setSingleSelect(value)}
                        />
                      </Col>
                      <Col xs={12} md={6}>
                        <Select
                          className="react-select warning"
                          classNamePrefix="react-select"
                          isMulti
                          closeMenuOnSelect={false}
                          placeholder="Multiple Select"
                          name="multipleSelect"
                          value={multipleSelect}
                          options={selectOptions}
                          onChange={(value) => setMultipleSelect(value)}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6}>
                    <CardTitle tag="h4">Tags</CardTitle>
                    <TagsInput
                      value={regularTags}
                      onChange={setRegularTags}
                      tagProps={{ className: "react-tagsinput-tag info" }}
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <CardTitle tag="h4">Dropdown & Dropup</CardTitle>
                    <Row>
                      <Col xs={12} md={6} sm={3} lg={4}>
                        <UncontrolledDropdown>
                          <DropdownToggle
                            color="info"
                            className="btn-round btn-block"
                            caret
                          >
                            Dropdown
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem disabled>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Another Action</DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </Col>
                      <Col xs={12} md={6} sm={3} lg={4}>
                        <UncontrolledDropdown direction="up">
                          <DropdownToggle
                            color="primary"
                            className="btn-round btn-block"
                            caret
                          >
                            Dropup
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem disabled>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Another Action</DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6}>
                    <CardTitle tag="h4">Progress Bars</CardTitle>
                    <div className="progress-container">
                      <span className="progress-badge">Default</span>
                      <Progress max="100" value="25">
                        <span className="progress-value">25%</span>
                      </Progress>
                    </div>
                    <div className="progress-container progress-primary">
                      <span className="progress-badge">Primary</span>
                      <Progress max="100" value="60">
                        <span className="progress-value">60%</span>
                      </Progress>
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                    <CardTitle tag="h4">Sliders</CardTitle>
                    <div className="slider" ref={slider1} />
                    <br />
                    <div className="slider slider-primary" ref={slider2} />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6}>
                    <Row>
                      <Col xs={12} sm={6} md={6}>
                        <CardTitle tag="h4">Regular Image</CardTitle>
                        <ImageUpload />
                      </Col>
                      <Col xs={12} sm={6} md={6}>
                        <CardTitle tag="h4">Avatar</CardTitle>
                        <ImageUpload avatar />
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} md={4}>
                    <CardTitle tag="h4">Single File</CardTitle>
                    <FormGroup className="form-file-upload form-file-simple">
                      <Input
                        type="text"
                        className="inputFileVisible"
                        placeholder="Simple chooser..."
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
                    <CardTitle tag="h4">Multiple File</CardTitle>
                    <FormGroup className="form-file-upload form-file-simple">
                      <Input
                        type="text"
                        className="inputFileVisible"
                        placeholder="Multiple chooser..."
                        onClick={(e) => handleMultipleFileInput(e)}
                        defaultValue={multipleFileName}
                      />
                      <input
                        multiple
                        type="file"
                        className="inputFileHidden"
                        style={{ zIndex: -1 }}
                        ref={multipleFileRef}
                        onChange={(e) => addMultipleFile(e)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ExtendedForms;
