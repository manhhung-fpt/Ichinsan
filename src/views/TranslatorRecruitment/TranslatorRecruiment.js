
import React from "react";
import axios from 'axios';
import ReactCountryFlag from "react-country-flag"
// reactstrap components
import {

  Card,
  CardHeader,

  CardTitle,
  Row,
  Col,

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
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import { useHistory } from "react-router-dom";
import TranslateIcon from '@mui/icons-material/Translate';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/scrollbar/scrollbar.scss'; // Scrollbar module
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module
import 'swiper/modules/effect-fade/effect-fade.scss'; // Pagination module

import CategoryIcon from '@mui/icons-material/Category';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SignalWifiStatusbar4BarIcon from '@mui/icons-material/SignalWifiStatusbar4Bar';

var selectOptions = [
  { value: "Category1", label: "Category1" },
  { value: "Category2", label: "Category2" },
  { value: "Category3", label: "Category3" },
  { value: "Category4", label: "Category4" },
  { value: "Category5", label: "Category5" },
  { value: "Category6", label: "Category6" },
];
var rolesOptions = [
  { value: "Option1", label: "Option1" },
  { value: "Option2", label: "Option2" },
  { value: "Option3", label: "Option3" },
];
function TranslatorRecruiment() {

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
  const [singleRoleSelect, setSingleRoleSelect] = React.useState(null);
  const selectFilterHandler = (e) => {
    alert(e.value)
    setSingleRoleSelect(() => e.value);
  }
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
    history.push("/admin/translator-progress-article")
  };

  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md="12" >
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
            <CardTitle tag="h4"> Progress</CardTitle>
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

                      Aprroved
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={pageSubcategories === "ps3" ? "active" : ""}
                      onClick={() => setpageSubcategories("ps3")}
                    >

                      Rejected
                    </NavLink>
                  </NavItem>

                </Nav>
                <TabContent
                  className="tab-space tab-subcategories"
                  activeTab={pageSubcategories}
                >
                  <TabPane tabId="ps1">
                    <Row style={{
                      marginTop: "40px",
                    }}>
                      <Col xs={12} md={3}>
                        <a classname="card" href="" onClick={onClickView}>
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
                                color: "orange",
                              }}>
                                <SignalWifiStatusbar4BarIcon></SignalWifiStatusbar4BarIcon>
                                    Pending</CardTitle>
                              <CardTitle style={{
                                marginLeft: "",
                                color: "red",
                              }}>
                                <AttachMoneyIcon></AttachMoneyIcon>
                                5000</CardTitle>
                              <CardTitle style={{
                                marginLeft: "",
                                color: "red",
                              }}>
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
                      <Col xs={12} md={3}>
                        <a classname="card" href="" onClick={onClickView}>
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
                                color: "orange",
                              }}>
                                <SignalWifiStatusbar4BarIcon></SignalWifiStatusbar4BarIcon>
                                    Pending</CardTitle>
                              <CardTitle style={{
                                marginLeft: "",
                                color: "red",
                              }}>
                                <AttachMoneyIcon></AttachMoneyIcon>
                                5000</CardTitle>
                              <CardTitle style={{
                                marginLeft: "",
                                color: "red",
                              }}>
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
                      <Col xs={12} md={3}>

                      </Col>
                      <Col xs={12} md={3}>

                      </Col>
                    </Row>



                  </TabPane>
                  <TabPane tabId="ps2">
                    <Row style={{
                      marginTop: "40px",
                    }}>
                      <Col xs={12} md={3}>
                        <a classname="card" href="" onClick={onClickView}>
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
                                color: "green",
                              }}>
                                <SignalWifiStatusbar4BarIcon></SignalWifiStatusbar4BarIcon>
                                    Approved</CardTitle>
                              <CardTitle style={{
                                marginLeft: "",
                                color: "red",
                              }}>
                                <AttachMoneyIcon></AttachMoneyIcon>
                                5000</CardTitle>
                              <CardTitle style={{
                                marginLeft: "",
                                color: "red",
                              }}>
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
                      <Col xs={12} md={3}>
                        <a classname="card" href="" onClick={onClickView}>
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
                                color: "green",
                              }}>
                                <SignalWifiStatusbar4BarIcon></SignalWifiStatusbar4BarIcon>
                                    Approved</CardTitle>
                              <CardTitle style={{
                                marginLeft: "",
                                color: "red",
                              }}>
                                <AttachMoneyIcon></AttachMoneyIcon>
                                5000</CardTitle>
                              <CardTitle style={{
                                marginLeft: "",
                                color: "red",
                              }}>
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
                      <Col xs={12} md={3}>

                      </Col>
                      <Col xs={12} md={3}>

                      </Col>
                    </Row>

                  </TabPane>
                  <TabPane tabId="ps3">
                    <Row style={{
                      marginTop: "40px",
                    }}>
                      <Col xs={12} md={3}>
                        <a classname="card" href="" onClick={onClickView}>
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
                                <SignalWifiStatusbar4BarIcon></SignalWifiStatusbar4BarIcon>
                                    Rejected</CardTitle>
                              <CardTitle style={{
                                marginLeft: "",
                                color: "red",
                              }}>
                                <AttachMoneyIcon></AttachMoneyIcon>
                                5000</CardTitle>
                              <CardTitle style={{
                                marginLeft: "",
                                color: "red",
                              }}>
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
                      <Col xs={12} md={3}>
                        <a classname="card" href="" onClick={onClickView}>
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
                                <SignalWifiStatusbar4BarIcon></SignalWifiStatusbar4BarIcon>
                                    Rejected</CardTitle>
                              <CardTitle style={{
                                marginLeft: "",
                                color: "red",
                              }}>
                                <AttachMoneyIcon></AttachMoneyIcon>
                                5000</CardTitle>
                              <CardTitle style={{
                                marginLeft: "",
                                color: "red",
                              }}>
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
                      <Col xs={12} md={3}>

                      </Col>
                      <Col xs={12} md={3}>

                      </Col>
                    </Row>

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
            </TabContent>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default TranslatorRecruiment;