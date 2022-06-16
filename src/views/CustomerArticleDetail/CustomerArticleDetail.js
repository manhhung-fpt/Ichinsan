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
import axios from 'axios';
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
  Nav,
  NavItem,
  NavLink,
  Pagination,
  PaginationItem,
  PaginationLink,
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
import TranslateIcon from '@mui/icons-material/Translate';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import CategoryIcon from '@mui/icons-material/Category';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SignalWifiStatusbar4BarIcon from '@mui/icons-material/SignalWifiStatusbar4Bar';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

var selectOptions = [
  { value: "Category1", label: "Category1" },
  { value: "Category2", label: "Category2" },
  { value: "Category3", label: "Category3" },
  { value: "Category4", label: "Category4" },
  { value: "Category5", label: "Category5" },
  { value: "Category6", label: "Category6" },
];
function CustomerArticleDetail() {

  const [singleSelect, setSingleSelect] = React.useState(null);
  const [singleFileName, setSingleFileName] = React.useState("");
  const [singleFile, setSingleFile] = React.useState(null);
  const [openedCollapses, setOpenCollapses] = React.useState(["collapseOne"]);
  const [hTabs, sethTabs] = React.useState("ht1");
  const [fakeData, setFakeData] = React.useState([]);
  const [vTabs, setvTabs] = React.useState("vt1");
  const [vTabsIcons, setvTabsIcons] = React.useState("vti1");
  const [pageSubcategories, setpageSubcategories] = React.useState("ps1");
  const singleFileRef = React.useRef();
  React.useEffect(() => {
    axios
      .get('https://reqres.in/api/users')
      .then(res => {
        setFakeData(res.data.data);
      })
      .catch(err => { console.log(err) })
  }, [])
  console.log(fakeData);
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
    history.push("/admin/customer-home")
  }
  const onClick = () => {
    history.push("/admin/customer-add-article")
  };
  const onClickCard = () => {
    history.push("/admin/customer-progress-project")
  };
  const onClickView = () => {
    history.push("/admin/customer-progress-article")
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

            <CardTitle tag="h4"> Project</CardTitle>



            <Nav pills className="nav-pills-primary">
              <NavItem>
                <NavLink
                  className={hTabs === "ht1" ? "active" : ""}
                  onClick={() => sethTabs("ht1")}

                >
                  Articles


                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={hTabs === "ht2" ? "active" : ""}
                  onClick={() => sethTabs("ht2")}
                >
                  Details
                </NavLink>
              </NavItem>

            </Nav>



            <TabContent activeTab={hTabs} className="tab-space">
              <TabPane tabId="ht1">



                <Nav
                  pills
                  className="nav-pills-info nav-pills-icons justify-content-center"
                >
                  <NavItem>
                    <NavLink
                      className={pageSubcategories === "ps1" ? "active" : ""}
                      onClick={() => setpageSubcategories("ps1")}
                    >

                      Pending
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={pageSubcategories === "ps2" ? "active" : ""}
                      onClick={() => setpageSubcategories("ps2")}
                    >

                      In-Progress
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={pageSubcategories === "ps3" ? "active" : ""}
                      onClick={() => setpageSubcategories("ps3")}
                    >

                      Done
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={pageSubcategories === "ps4" ? "active" : ""}
                      onClick={() => setpageSubcategories("ps4")}
                    >

                      Postponed
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent
                  className="tab-space tab-subcategories"
                  activeTab={pageSubcategories}
                >
                  <TabPane tabId="ps1">
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

                      </Col>
                      <Col xs={12} md={3} size="sm">

                      </Col>
                      <Col xs={12} md={3} size="sm">

                      </Col>
                    </Row>
                    <CardBody>
                      <Table responsive>
                        <thead className="text-primary">
                          <tr>
                            <th className="text-center">#</th>
                            <th>Article Tittle</th>
                            <th>Category Name</th>
                            <th>Salary</th>
                            <th>Language</th>
                            <th className="text-right">View</th>


                          </tr>
                        </thead>
                        <tbody>


                          {
                            fakeData.map((item, index) => {
                              return (<tr>
                                <td className="text-center">{index + 1}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>$5000</td>
                                <td>
                                  <TranslateIcon></TranslateIcon>
                                  <ArrowRightAltIcon></ArrowRightAltIcon>
                                  <TranslateIcon></TranslateIcon>

                                </td>
                                <td className="text-right btns-mr-5">

                                  <Button onClick={onClickView} style={
                                    {

                                      fontSize: "10px",

                                    }
                                  }>

                                    View
                                  </Button>

                                </td>


                              </tr>);
                            })
                          }


                        </tbody>
                      </Table>
                    </CardBody>
                  </TabPane>
                  <TabPane tabId="ps2">
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

                      </Col>
                      <Col xs={12} md={3} size="sm">

                      </Col>
                      <Col xs={12} md={3} size="sm">

                      </Col>
                    </Row>
                    <CardBody>
                      <Table responsive>
                        <thead className="text-primary">
                          <tr>
                            <th className="text-center">#</th>
                            <th>Article Tittle</th>
                            <th>Category Name</th>
                            <th>Salary</th>
                            <th>Language</th>
                            <th className="text-right">View</th>


                          </tr>
                        </thead>
                        <tbody>


                          {
                            fakeData.map((item, index) => {
                              return (<tr>
                                <td className="text-center">{index + 1}</td>
                                <td>{item.first_name}</td>
                                <td>Computer Science</td>
                                <td>$5000</td>
                                <td>
                                  <TranslateIcon></TranslateIcon>
                                  <ArrowRightAltIcon></ArrowRightAltIcon>
                                  <TranslateIcon></TranslateIcon>

                                </td>
                                <td className="text-right btns-mr-5">

                                  <Button onClick={onClickView} style={
                                    {

                                      fontSize: "10px",

                                    }
                                  }>

                                    View
                                  </Button>

                                </td>


                              </tr>);
                            })
                          }


                        </tbody>
                      </Table>
                    </CardBody>
                  </TabPane>
                  <TabPane tabId="ps3">
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

                      </Col>
                      <Col xs={12} md={3} size="sm">

                      </Col>
                      <Col xs={12} md={3} size="sm">

                      </Col>
                    </Row>
                    <CardBody>
                      <Table responsive>
                        <thead className="text-primary">
                          <tr>
                            <th className="text-center">#</th>
                            <th>Article Tittle</th>
                            <th>Category Name</th>
                            <th>Salary</th>
                            <th>Language</th>
                            <th className="text-right">View</th>


                          </tr>
                        </thead>
                        <tbody>


                          {
                            fakeData.map((item, index) => {
                              return (<tr>
                                <td className="text-center">{index + 1}</td>
                                <td>{item.first_name}</td>
                                <td>Computer Vision</td>
                                <td>$1000</td>
                                <td>
                                  <TranslateIcon></TranslateIcon>
                                  <ArrowRightAltIcon></ArrowRightAltIcon>
                                  <TranslateIcon></TranslateIcon>

                                </td>
                                <td className="text-right btns-mr-5">

                                  <Button onClick={onClickView} style={
                                    {

                                      fontSize: "10px",

                                    }
                                  }>

                                    View
                                  </Button>

                                </td>


                              </tr>);
                            })
                          }


                        </tbody>
                      </Table>
                    </CardBody>
                  </TabPane>
                  <TabPane tabId="ps4">
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

                      </Col>
                      <Col xs={12} md={3} size="sm">

                      </Col>
                      <Col xs={12} md={3} size="sm">

                      </Col>
                    </Row>
                    <CardBody>
                      <Table responsive>
                        <thead className="text-primary">
                          <tr>
                            <th className="text-center">#</th>
                            <th>Article Tittle</th>
                            <th>Category Name</th>
                            <th>Salary</th>
                            <th>Language</th>
                            <th className="text-right">View</th>


                          </tr>
                        </thead>
                        <tbody>


                          {
                            fakeData.map((item, index) => {
                              return (<tr>
                                <td className="text-center">{index + 1}</td>
                                <td>{item.first_name}</td>
                                <td>Healthy Vegetable</td>
                                <td>$50</td>
                                <td>
                                  <TranslateIcon></TranslateIcon>
                                  <ArrowRightAltIcon></ArrowRightAltIcon>
                                  <TranslateIcon></TranslateIcon>

                                </td>
                                <td className="text-right btns-mr-5">

                                  <Button onClick={onClickView} style={
                                    {

                                      fontSize: "10px",

                                    }
                                  }>

                                    View
                                  </Button>

                                </td>


                              </tr>);
                            })
                          }


                        </tbody>
                      </Table>
                    </CardBody>
                  </TabPane>
                </TabContent>
                <Row>
                  <Col xs={12} md={5} size="sm">

                  </Col>
                  <Col xs={12} md={3} size="sm">
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
                  </Col>
                  <Col xs={12} md={4} size="sm">
                  </Col>
                </Row>


              </TabPane>
              <TabPane tabId="ht2">
                <Row style={{
                  marginTop: "40px",
                }}>
                  <Col xs={12} md={6}>

                    <a classname="card" href="" onClick={onClickCard}>
                      <Card>

                        <CardHeader>
                          <CardTitle style={{
                            marginLeft: "",
                            color: "green",
                          }}>
                            <CategoryIcon></CategoryIcon>
                            Computer Science</CardTitle>
                        </CardHeader>

                        <CardHeader>
                          <CardTitle tag="h4" style={{
                            color: "green",
                            marginTop: "-10px",
                          }}>Computer Vision AI</CardTitle>
                          <CardTitle style={{
                            marginLeft: "",
                            color: "red",
                          }}>
                            <AttachMoneyIcon></AttachMoneyIcon>
                            5000</CardTitle>
                          <CardTitle style={{
                            marginLeft: "",
                            color: "black",
                          }}>
                            <AccountCircleIcon></AccountCircleIcon>
                            Tran Manh Hung</CardTitle>
                          <CardTitle style={{
                            marginLeft: "",
                            color: "black",
                          }}>
                            <GTranslateIcon></GTranslateIcon>
                            Translator : 2/10</CardTitle>

                          <CardTitle style={{
                            marginLeft: "",
                            color: "black",
                          }}>
                            <CalendarMonthIcon></CalendarMonthIcon>
                            06/08/2022 12:00 AM</CardTitle>
                          <CardTitle style={{
                            marginLeft: "",
                            color: "orange",
                          }}>
                            <SignalWifiStatusbar4BarIcon></SignalWifiStatusbar4BarIcon>
                            Pending</CardTitle>
                          <CardTitle style={{
                            marginLeft: "",
                            color: "black",
                          }}>
                            <DescriptionIcon></DescriptionIcon>
                            Description :


                            <CardContent>
                              <div className="card-description">
                                <p>This impressive paella is a perfect party dish and
                                  a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.</p>
                              </div>

                            </CardContent>


                          </CardTitle>
                        </CardHeader>

                        <div class="go-corner" href="#">
                          <div class="go-arrow">
                            →
                          </div>
                        </div>

                      </Card>
                    </a>
                  </Col>

                </Row>


              </TabPane>

            </TabContent>

          </Col>
        </Row>
      </div>
    </>
  );
}

export default CustomerArticleDetail;