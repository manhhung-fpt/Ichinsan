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
  TabContent,
  TabPane,
  ButtonToolbar,
} from "reactstrap";

import Select from "react-select";
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import { useHistory } from "react-router-dom";
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import icons from '../../variables/icons';
import { useState } from "react";



var selectOptions = [
  { value: "Category1", label: "Category1" },
  { value: "Category2", label: "Category2" },
  { value: "Category3", label: "Category3" },
  { value: "Category4", label: "Category4" },
  { value: "Category5", label: "Category5" },
  { value: "Category6", label: "Category6" },
];
function CustomeArticle() {
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
    history.push("/admin/admin-project")
  }
  const onClick = () => {
    history.push("/admin/admin-projec/admin-project-details")
  };

  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md="12" >
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

            <CardTitle tag="h4">Lastest Project</CardTitle>
            <Card>

              <CardBody>
                <Row>
                  <Col xs={12} md={12}>



                    <CardHeader>
                      <CardTitle tag="h4" >Project Name</CardTitle>
                    </CardHeader>

                    <Button onClick={onClick} color="primary" className="btn-round" style={
                      {

                        fontSize: "10px",
                        marginLeft: "20px",

                      }
                    }>
                      <i className="now-ui-icons users_single-02" /> Vo Khac Trieu
                    </Button>


                    <Row>
                      <Col xs={12} md={12}>

                        <ButtonToolbar>
                          <ButtonGroup>
                            <Button className="btn-round" color="success" style={
                              {
                                marginLeft: "20px",
                                fontSize: "10px",

                              }
                            }>
                              Complete
                            </Button>

                          </ButtonGroup>
                        </ButtonToolbar>
                      </Col>
                      <Col xs={12} md={12}>
                        <CardHeader>
                          <CardTitle className="text-primary" >Created Date : 06/08/2022 12:00 AM</CardTitle>
                        </CardHeader>
                      </Col>
                    </Row>

                    <Row>
                      <Col xs={12} md={12}>
                        <CardHeader>
                          <CardTitle >Category :</CardTitle>
                        </CardHeader>
                        <CardBody>
                          <div className="btns-mr-5">
                            <Button>Default</Button>
                            <Button color="primary">Category 1</Button>
                            <Button color="danger">Category 2</Button>

                            <Button color="success">Category 3</Button>
                            <Button color="warning">Category 4</Button>
                            <Button color="info">+ More</Button>
                          </div>
                        </CardBody>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} md={12}>
                        <CardHeader>
                          <CardTitle >Translators : 03/10</CardTitle>
                        </CardHeader>

                      </Col>
                    </Row>








                    <Row>
                      <Col xs={12} md={12}>
                        <CardHeader>
                          <CardTitle >Summary</CardTitle>
                        </CardHeader>
                        <CardBody>
                          <TabContent activeTab={hTabs} className="tab-space">
                            <TabPane tabId="ht1">
                              <Card sx={{ maxWidth: 1500, borderStyle: 'groove', borderRadius: 8 }}>

                                <CardContent>
                                  <Typography variant="body2" color="text.secondary">
                                    This impressive paella is a perfect party dish and a fun meal to cook
                                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                                    if you like.
                                  </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                  <Col md={11}>

                                  </Col>
                                  <Col md={1}>

                                  </Col>
                                </CardActions>
                              </Card>
                            </TabPane>
                          </TabContent>
                        </CardBody>
                      </Col>
                    </Row>

                  </Col>
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
                    Edit
                  </Button>
                </Col>
                <Col md={6}>
                  <Button color="primary" className="btn-right" style={
                    {

                      fontSize: "10px",

                    }
                  }>

                    Delete
                  </Button>
                </Col>
              </CardActions>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md="12" >
            <CardTitle tag="h4">Add article</CardTitle>
            <Row>

              <Col xs={12} md={10} size="sm">
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
                      placeholder="Single Select"
                      name="singleSelect"
                      value={singleSelect}
                      options={selectOptions}
                      onChange={(value) => setSingleSelect(value)}
                    />
                  </Col>
                  <Col xs={12} md={3} size="sm">
                    Number of Projects : 5
                  </Col>
                  <Col xs={12} md={3} size="sm">

                  </Col>
                  <Col xs={12} md={3} size="sm">

                  </Col>
                </Row>


              </Col>

              <Col xs={12} md={1} size="sm">
              </Col>
              <Col xs={12} md={1} size="sm">
                <Button color="info" style={
                  {

                    fontSize: "10px",

                  }
                }>
                  Add an article
                  <span className="btn-label">
                    <i className="now-ui-icons arrows-1_minimal-right" />
                  </span>

                </Button>

              </Col>
            </Row>
            <Card>

              <CardBody>
                <Row>
                  <Col xs={12} md={12}>



                    <CardHeader>
                      <CardTitle tag="h4" >Project Name</CardTitle>
                    </CardHeader>
                    <Row>
                      <Col xs={12} md={11}>
                        <Button onClick={onClick} color="primary" className="btn-round" style={
                          {

                            fontSize: "10px",
                            marginLeft: "20px",

                          }
                        }>
                          <i className="now-ui-icons users_single-02" /> Vo Khac Trieu
                        </Button>
                      </Col>
                      <Col xs={12} md={1}>
                      <span style={
                        {
                          color: "red",
                        }
                      }> 
                          $ 5000
                      </span>
                      </Col>
                    </Row>



                    <Row>
                      <Col xs={12} md={12}>
                        <CardHeader>
                          <CardTitle >Summary</CardTitle>
                        </CardHeader>
                        <CardBody>
                          <TabContent activeTab={hTabs} className="tab-space">
                            <TabPane tabId="ht1">
                              <Card sx={{ maxWidth: 1500, borderStyle: 'groove', borderRadius: 8 }}>

                                <CardContent>
                                  <Typography variant="body2" color="text.secondary">
                                    This impressive paella is a perfect party dish and a fun meal to cook
                                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                                    if you like.
                                  </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                  <Col md={11}>

                                  </Col>
                                  <Col md={1}>

                                  </Col>
                                </CardActions>
                              </Card>
                            </TabPane>
                          </TabContent>
                        </CardBody>
                      </Col>
                    </Row>

                  </Col>
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
                    Edit
                  </Button>
                </Col>
                <Col md={6}>
                  <Button color="primary" className="btn-right" style={
                    {

                      fontSize: "10px",

                    }
                  }>

                  Postpose
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

export default CustomeArticle;