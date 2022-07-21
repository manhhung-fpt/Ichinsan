
import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import ReactCountryFlag from "react-country-flag"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
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
  CardText,
} from "reactstrap";

import Select from "react-select";
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import { Pagination } from "@mui/material";
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
    { value: 1, content: 'ps1', label: "Pending" },
    { value: 2, content: 'ps2', label: "Approved" },
    { value: 3, content: 'ps3', label: "Rejected" },
    // { value: 4, content: 'ps4', label: "Postponed" },
    // { value: 5, content: 'ps5', label: "Postponed" },
  ]
  const [pageSubcategories, setpageSubcategories] = React.useState(statusOptions[0].content);




  const singleFileRef = React.useRef();
  const [page, setPage] = React.useState(1);

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    axios
      .get("https://api-dotnet-test.herokuapp.com/api/articles?pageNumber=1&pageSize=20")
      .then((res) => {
        const data = res.data;
        setArticles(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);
  const onClickPage = (e, page) => {
    setPage(page);
    var pages = page ? page : '1'
    axios
      .get(`https://api-dotnet-test.herokuapp.com/api/articles?pageNumber=${pages}&pageSize=20`)
      .then((res) => {
        const data = res.data;
        setArticles(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }



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
            }}> Recruitment : </CardTitle>




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
                        <Row>
                        {isLoading && <p>Loading...</p>}
                          {articles
                            .filter(a => a.status === statusOption.label)
                            .map((article, index) => {
                              return <Col xs={12} lg={4}>
                                <Card>
                                  <a style={{ all: "unset", cursor: "pointer" }} href={`recruitment-view-article?id=${article.id}`}>
                                    <CardHeader>
                                      <Row>
                                        <Col xs={12} md={8}>
                                          <CardTitle style={{
                                            color: "#2CA8FF",
                                            fontSize: "20px",
                                            fontWeight: "bold",
                                          }}>

                                            {article.categoryName}</CardTitle>
                                        </Col>
                                        <Col xs={12} md={4}>
                                          <CardTitle style={{
                                            color: "#2CA8FF",
                                            fontSize: "20px",
                                            fontWeight: "bold",
                                          }}>
                                            <AttachMoneyIcon style={{
                                              color: "black",
                                            }}></AttachMoneyIcon>
                                            {article.fee}</CardTitle>
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
                                        {article.name}
                                      </CardTitle>
                                      <CardText style={{
                                        color: "black",
                                        fontSize: "16px",
                                      }}>
                                        {article.description}
                                      </CardText>
                                      <CardTitle style={{
                                        color: "black",
                                        fontSize: "24px",
                                        fontWeight: "bold",
                                      }}>
                                        <ReactCountryFlag
                                          countryCode={article.languageFrom}
                                          svg
                                          style={{
                                            width: '2em',
                                            height: '2em',
                                          }}

                                        />
                                        <ArrowRightIcon style={{
                                          fontSize: "40px",
                                          marginLeft: "10px",
                                          marginRight: "10px",
                                        }}></ArrowRightIcon>
                                        <ReactCountryFlag
                                          countryCode={article.languageTo}
                                          svg
                                          style={{
                                            width: '2em',
                                            height: '2em',
                                          }}

                                        />
                                      </CardTitle>
                                    </CardBody>

                                    <CardFooter style={{
                                      fontSize: "16px",
                                      marginTop: "-20px",
                                      color: "red",


                                    }}>
                                      {moment(new Date(article.deadline)).format("DD/MM/YYYY, h:mm:ss A")}
                                    </CardFooter>
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
                      </TabPane>
                    }
                    )
                  }


                </TabContent>
                <Row>
                  <Col xs={12} md={4} size="sm">

                  </Col>
                  <Col xs={12} md={5} size="sm">
                    <Pagination
                      count={10}
                      page={page}
                      onChange={onClickPage}
                      variant="outlined" color="primary" />
                  </Col>
                  <Col xs={12} md={3} size="sm">
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