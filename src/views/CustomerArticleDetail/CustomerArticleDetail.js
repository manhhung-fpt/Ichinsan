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
import React, { useRef } from "react";
import axios from 'axios';
import ReactCountryFlag from "react-country-flag"
import { Fab, Action } from 'react-tiny-fab';

// reactstrap components
import {
  Table,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

import Select from "react-select";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import { useHistory } from "react-router-dom";
import CardContent from '@mui/material/CardContent';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import CategoryIcon from '@mui/icons-material/Category';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SignalWifiStatusbar4BarIcon from '@mui/icons-material/SignalWifiStatusbar4Bar';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import 'react-tiny-fab/dist/styles.css';
import Scrollbar from 'smooth-scrollbar';
import { red } from '@mui/material/colors';

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

            {/* <Button onClick={onClickBack} style={
              {

                fontSize: "10px",

              }
            }>
              <span className="btn-label">
                <i className="now-ui-icons arrows-1_minimal-left" />
              </span>
              Back
            </Button> */}
            <Card>

              <Swiper

                style={
                  {
                    height: "300px",
                    width: "50%",
                  }
                }
              >
                <SwiperSlide>
                  <img src="https://as1.ftcdn.net/v2/jpg/04/72/19/88/1000_F_472198810_bvrfLv3QhdQKQYjJXWTCCVFmvBARuoJy.jpg"></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://as1.ftcdn.net/v2/jpg/04/72/19/88/1000_F_472198810_bvrfLv3QhdQKQYjJXWTCCVFmvBARuoJy.jpg"></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://as1.ftcdn.net/v2/jpg/04/72/19/88/1000_F_472198810_bvrfLv3QhdQKQYjJXWTCCVFmvBARuoJy.jpg"></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://as1.ftcdn.net/v2/jpg/04/72/19/88/1000_F_472198810_bvrfLv3QhdQKQYjJXWTCCVFmvBARuoJy.jpg"></img>
                </SwiperSlide>
              </Swiper>
            </Card>


            <Breadcrumbs separator="›" aria-label="breadcrumb" style={{ padding: '20px' }}>
              <Link underline="hover" color="inherit" href="/admin/customer-home">
                Customer Home
              </Link>
              <Typography color="text.primary"> Project Article Details</Typography>
            </Breadcrumbs>

            <CardTitle id="card" tag="h4">Project Detail
              <span class="fi fi-AU"></span> <span class="fi fi-gr fis"></span>
            </CardTitle>



            <Nav pills className="nav-pills-info"

            >
              <NavItem>

                <NavLink
                  className={hTabs === "ht1" ? "active" : ""}
                  onClick={() => sethTabs("ht1")}

                >

                  Detail

                </NavLink>
              </NavItem>
            </Nav>
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
                      {/* <CardTitle style={{
                            marginLeft: "",
                            color: "red",
                          }}>
                            <AttachMoneyIcon></AttachMoneyIcon>
                            5000</CardTitle> */}
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


            <CardTitle id="card1" tag="h4">Project Article
              <span class="fi fi-AU"></span> <span class="fi fi-gr fis"></span>
            </CardTitle>

            <Fab
              icon={"+"}
              mainButtonStyles={{ backgroundColor: '#e74c3c' }}
              alwaysShowTitle={false}
            // onClick={someFunctionForTheMainButton}
            >

              <Action

                text="Project Detail"
                onClick={() => window.location.href = "#card"}
              >
              </Action>
              <Action
                text="Project Article"
                onClick={() => window.location.href = "#card1"}
              >
                <i className="fa fa-help" />
              </Action>



            </Fab>



            {/* <Nav pills className="nav-pills-primary">
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

            </Nav> */}




            <TabContent id="email" activeTab={hTabs} className="tab-space">
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
                        <CardTitle style={{
                          marginLeft: "",
                          color: "orange",
                        }}>
                          <SignalWifiStatusbar4BarIcon></SignalWifiStatusbar4BarIcon>
                          Pending</CardTitle>
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
                                  <ReactCountryFlag
                                    countryCode="US"
                                    svg
                                    style={{
                                      width: '2em',
                                      height: '2em',
                                    }}
                                    title="US"
                                  />
                                  <ArrowRightAltIcon></ArrowRightAltIcon>
                                  <ReactCountryFlag
                                    countryCode="VN"
                                    svg
                                    style={{
                                      width: '2em',
                                      height: '2em',
                                    }}
                                    title="US"
                                  />

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
                        <CardTitle style={{
                          marginLeft: "",
                          color: "blue",
                        }}>
                          <SignalWifiStatusbar4BarIcon></SignalWifiStatusbar4BarIcon>
                          In-process</CardTitle>
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
                                  <ReactCountryFlag
                                    countryCode="US"
                                    svg
                                    style={{
                                      width: '2em',
                                      height: '2em',
                                    }}
                                    title="US"
                                  />
                                  <ArrowRightAltIcon></ArrowRightAltIcon>
                                  <ReactCountryFlag
                                    countryCode="VN"
                                    svg
                                    style={{
                                      width: '2em',
                                      height: '2em',
                                    }}
                                    title="US"
                                  />

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
                        <CardTitle style={{
                          marginLeft: "",
                          color: "green",
                        }}>
                          <SignalWifiStatusbar4BarIcon></SignalWifiStatusbar4BarIcon>
                          Done</CardTitle>
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
                                  <ReactCountryFlag
                                    countryCode="US"
                                    svg
                                    style={{
                                      width: '2em',
                                      height: '2em',
                                    }}
                                    title="US"
                                  />
                                  <ArrowRightAltIcon></ArrowRightAltIcon>
                                  <ReactCountryFlag
                                    countryCode="VN"
                                    svg
                                    style={{
                                      width: '2em',
                                      height: '2em',
                                    }}
                                    title="US"
                                  />

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
                        <CardTitle style={{
                          marginLeft: "",
                          color: "red",
                        }}>
                          <SignalWifiStatusbar4BarIcon></SignalWifiStatusbar4BarIcon>
                          Postponed</CardTitle>
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
                                  <ReactCountryFlag
                                    countryCode="US"
                                    svg
                                    style={{
                                      width: '2em',
                                      height: '2em',
                                    }}
                                    title="US"
                                  />
                                  <ArrowRightAltIcon></ArrowRightAltIcon>
                                  <ReactCountryFlag
                                    countryCode="VN"
                                    svg
                                    style={{
                                      width: '2em',
                                      height: '2em',
                                    }}
                                    title="US"
                                  />

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



              </TabPane>

            </TabContent>

          </Col>
        </Row>

      </div>
    </>

  );
}

export default CustomerArticleDetail;