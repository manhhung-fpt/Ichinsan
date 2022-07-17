
import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import ReactCountryFlag from "react-country-flag"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import "./Card.css";
// reactstrap components
import {

  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardFooter,
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
  CardText,
} from "reactstrap";

import Select from "react-select";
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import { Link, useHistory } from "react-router-dom";
import TranslateIcon from '@mui/icons-material/Translate';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import CardContent from '@mui/material/CardContent';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/scrollbar/scrollbar.scss'; // Scrollbar module
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module
import 'swiper/modules/effect-fade/effect-fade.scss'; // Pagination module
import { Button } from 'react-bootstrap';
import CircularProgress from '@mui/material/CircularProgress';
import CategoryIcon from '@mui/icons-material/Category';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SignalWifiStatusbar4BarIcon from '@mui/icons-material/SignalWifiStatusbar4Bar';
import moment from "moment";

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
function TranslatorProgress() {

  const [singleSelect, setSingleSelect] = React.useState(null);
  const [singleFileName, setSingleFileName] = React.useState("");
  const [singleFile, setSingleFile] = React.useState(null);
  const [openedCollapses, setOpenCollapses] = React.useState(["collapseOne"]);
  const [hTabs, sethTabs] = React.useState("ht1");
  const [fakeData, setFakeData] = React.useState([]);
  const [vTabs, setvTabs] = React.useState("vt1");
  const [vTabsIcons, setvTabsIcons] = React.useState("vti1");

  const statusOptions = [
    { value: 1, content: 'ps1', label: "Inprogress" },
    { value: 2, content: 'ps2', label: "Done" },
    { value: 3, content: 'ps3', label: "Postponed" },
    // { value: 4, content: 'ps4', label: "Postponed" },
    // { value: 5, content: 'ps5', label: "Postponed" },
  ]
  const [pageSubcategories, setpageSubcategories] = React.useState(statusOptions[0].content);
  const singleFileRef = React.useRef();
  const [projects, setProjects] = useState([]);
  const uId = localStorage.getItem("userId");
  React.useEffect(() => {
    axios
      .get("https://api-dotnet-test.herokuapp.com/api/users/ABBAC12E-27B6-4492-ACBB-034EC881BFFF")
      .then((res) => {
        const data = res.data.projectList;
        console.log(data);
        setProjects(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);


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
  const onClickCreate = () => {
    history.push("/admin/customer-create-project")
  };
  console.log(projects);

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

            <CardTitle tag="h4" style={{
              fontWeight: "bold",
            }}> Progress :
              <Button onClick={onClickCreate} color="info" className="btn-right" style={
                {
                  marginTop: "10px",
                  float: "right",
                  fontSize: "12px",
                  backgroundColor: "#08becf",

                }
              }>

                Create Project +
              </Button>
            </CardTitle>




            <TabContent activeTab={hTabs} className="tab-space">
              <TabPane tabId="ht1">
                <Nav
                  pills
                  className="nav-pills-info nav-pills-icons justify-content-center"
                >
                  {statusOptions.map((status, index) => (
                    <NavItem
                      style={{

                      }}
                    >
                      <NavLink
                        className={pageSubcategories === `${status.content}` ? "active" : ""}
                        onClick={() => setpageSubcategories(status.content)}
                      >

                        {status.label}
                      </NavLink>
                    </NavItem>
                  ))
                  }
                </Nav>
                <TabContent
                  className="tab-space tab-subcategories"
                  activeTab={pageSubcategories}
                  style={{}}
                >

                  {
                    statusOptions.map((statusOption, index) => {
                      return <TabPane tabId={statusOption.content}>
                        {projects !== null ? (
                        <Row>
                          {projects
                            .filter(a => a.status === statusOption.label)
                            .map((project, index) => {
                              return <Col xs={12} lg={4}>
                                <Card
                                  style={{
                                    marginTop: "10px",
                                  }}>
                                  <a style={{ all: "unset", cursor: "pointer" }} href={`customer-arti-detail?id=${project.projectId}`}>
                                    <CardHeader>
                                      <Row>
                                        <Col xs={12} md={8}>
                                          <CardTitle style={{
                                            color: "#2CA8FF",
                                            fontSize: "20px",
                                            fontWeight: "bold",
                                          }}>

                                            {project.projectCategoryName}</CardTitle>
                                        </Col>
                                        <Col xs={12} md={4}>

                                        </Col>
                                      </Row>
                                    </CardHeader>
                                    <CardBody style={{
                                      marginTop: "-20px",
                                    }}>
                                      <CardTitle style={{
                                        color: "black",
                                        fontSize: "24px",
                                        fontWeight: "bold",
                                      }}>
                                        {project.projectName}
                                      </CardTitle>
                                      <CardText style={{
                                        color: "black",
                                        fontSize: "16px",
                                        // fontWeight: "bold",
                                      }}>Current Translator :
                                        {project.currentTranslatorNumber}
                                      </CardText>
                                      <CardText style={{
                                        color: "red",
                                        fontSize: "16px",
                                        // fontWeight: "bold",
                                      }}>Total Translator :
                                        {project.totalTranslator}
                                      </CardText>
                                    </CardBody>

                                    <div class="go-corner" href="#" style={{
                                      backgroundColor: "#2CA8FF",
                                    }}>
                                      <div class="go-arrow">
                                        <ArrowRightIcon></ArrowRightIcon>
                                      </div>
                                    </div>
                                  </a>
                                </Card>
                              </Col>
                            })}
                            
                        </Row>
                        ) : (
                          <CircularProgress/>
                        )}
                        
                      </TabPane>
                    }
                    )
                  }


                </TabContent>
                <Row>
                  <Col xs={12} md={5} size="sm">

                  </Col>
                  <Col xs={12} md={3} size="sm">
                  
                  </Col>
                  <Col xs={12} md={4} size="sm">
                  </Col>
                </Row>


              </TabPane>


            </TabContent>

          </Col>
        </Row>
      </div >
    </>
  );
}

export default TranslatorProgress;