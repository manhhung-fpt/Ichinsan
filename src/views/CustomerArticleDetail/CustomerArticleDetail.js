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
import { useState, useEffect } from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";
import Switch from "react-bootstrap-switch";
import axios from 'axios';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import moment from "moment";

// reactstrap components
import {
  Card,
  Table,
  CardBody,
  CardText,
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
  Button,
  CardTitle,
  CardHeader,
  ButtonToolbar,
  ButtonGroup,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import { useHistory, useLocation } from "react-router-dom";
import { Fab, Action } from 'react-tiny-fab';

import Select from "react-select";

import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CategoryIcon from '@mui/icons-material/Category';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ReactCountryFlag from "react-country-flag"
import SignalWifiStatusbar4BarIcon from '@mui/icons-material/SignalWifiStatusbar4Bar';
import TranslateIcon from '@mui/icons-material/Translate';
import DownloadIcon from '@mui/icons-material/Download';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import StarRateIcon from '@mui/icons-material/StarRate';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import UploadIcon from '@mui/icons-material/Upload';



import { table_data } from "variables/general.js";

var selectOptions = [
  { value: "one", label: "One" },
  { value: "two", label: "Two" },
  { value: "three", label: "Three" },
  { value: "four", label: "Four" },
  { value: "five", label: "Five" },
  { value: "six", label: "Six" },
];
function TranslatorProgressArticle(props) {
  const [modalClassic, setModalClassic] = React.useState(false);
  const projectId = props.location.search.split("=")[1];
  console.log(projectId);

  const [singleSelect, setSingleSelect] = React.useState(null);
  const [singleFileName, setSingleFileName] = React.useState("");
  const [multipleFileName, setMultipleFileName] = React.useState("");
  // eslint-disable-next-line
  const [singleFile, setSingleFile] = React.useState(null);
  const [openedCollapses, setOpenCollapses] = React.useState(["collapseOne"]);
  const [hTabs, sethTabs] = React.useState("ht1");
  const [vTabs, setvTabs] = React.useState("vt1");
  const [vTabsIcons, setvTabsIcons] = React.useState("vti1");
  const [pageSubcategories, setpageSubcategories] = React.useState("ps1");

  const location = useLocation();
  const [fakeData, setFakeData] = React.useState([]);
  const Edit = "edit";
  const singleFileRef = React.useRef();
  const statusOptions = [
    { value: 1, content: 'ps1', label: "Pending" },
    { value: 2, content: 'ps2', label: "In Progress" },
    { value: 3, content: 'ps3', label: "Review" },
    { value: 4, content: 'ps4', label: "Done" },
    { value: 5, content: 'ps5', label: "Postponed" },
  ]


  const [modalNotice, setModalNotice] = React.useState(false);
  const [modalEdit, setModalEdit] = React.useState(false);

  const toggleModalClassic = () => {
    setModalClassic(!modalClassic);
  };
  const toggleModalNotice = () => {
    setModalNotice(!modalNotice);
  };
  const [articles, setArticles] = useState([]);
  React.useEffect(() => {
    axios
      .get("https://api-dotnet-test.herokuapp.com/api/articles?pageNumber=1&pageSize=3")
      .then((res) => {
        const data = res.data;
        setArticles(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  const [project, setProject] = React.useState({});
  React.useEffect(() => {
    axios
      .get(`https://api-dotnet-test.herokuapp.com/api/projects/${projectId}`)
      .then(res => {
        //setFakeData(res.data.data);
        setProject(res.data);
      })
      .catch(err => { console.log(err) })
  }, [])
  console.log(project)


  const handleSingleFileInput = (e) => {
    singleFileRef.current.click(e);
  };
  const addSingleFile = (e, type) => {
    let fileNames = "";
    let files = e.target.files;
    for (let i = 0; i < e.target.files.length; i++) {
      fileNames = fileNames + e.target.files[i].name;
    }
    setSingleFile(files);
    setSingleFileName(fileNames);
  };

  let history = useHistory();
  const onClick = () => {
    history.push("/admin/admin-projec/admin-project-details")
  };
  const onClickBack = () => {
    history.push("/admin/customer-home")
  };
  const onClickView = () => {
    history.push("/admin/customer-progress-article")
  };
  const onClickFeedback = () => {
    history.push("/admin/customer-create=feedback")
  };
  const onClickAdd = () => {
    history.push("/admin/customer-add-article")
  };
  const onClickPostpose = () => {
    history.push("/admin/translator-progress")
  };
  const onClickEdit = () => {
    history.push("/admin/customer-edit-project")
  };


  return (
    <>
      <PanelHeader
        size="sm" />

      <div className="content">

        <Row>
          <Col xs={12}>
            <Button onClick={onClickBack} style={
              {

                fontSize: "10px",

              }
            }>
              <span className="btn-label" >
                <i className="now-ui-icons arrows-1_minimal-left" />
              </span>
              Back
            </Button>

            <Breadcrumbs separator="›" aria-label="breadcrumb" style={{ padding: '20px' }}>
              <Link underline="hover" color="inherit" href="/admin/customer-home">
                Customer Home
              </Link>

              <Typography color="text.primary">Project Details</Typography>
            </Breadcrumbs>
            <TabContent
              className="tab-space tab-subcategories">
              <TabPane>
                <Fab
                  icon={"+"}
                  mainButtonStyles={{ backgroundColor: '#e74c3c' }}
                  alwaysShowTitle={false}
                // onClick={someFunctionForTheMainButton}
                >

                  <Action

                    text="Article Detail"
                    onClick={() => window.location.href = "#card1"}
                  >
                  </Action>
                  <Action

                    text="Translations"
                    onClick={() => window.location.href = "#card2"}
                  >
                  </Action>
                  <Action

                    text="Feedback"
                    onClick={() => window.location.href = "#card3"}
                  >
                  </Action>
                </Fab>
                <CardTitle id="card1" tag="h4">Project Detail :</CardTitle>
                <a style={{ all: "unset", cursor: "pointer" }} href={`customer-add-article?id=${projectId}`}>
                  <Button color="info" className="btn-right" style={
                    {
                      marginTop: "10px",
                      float: "right",
                      fontSize: "12px",
                      backgroundColor: "#08becf",

                    }
                  }>

                    Create Article +
                  </Button>
                </a>
                <Row>

                  <Col xs={12} lg={6}>
                    <Card>
                      <a style={{ all: "unset", cursor: "pointer" }} href={`customer-arti-detail?id=${project.id}`}>
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
                            {project.name}
                          </CardTitle>
                          <CardText style={{
                            color: "black",
                            fontSize: "16px",
                          }}>
                            {project.customerName}
                          </CardText>
                          <CardText style={{
                            color: "black",
                            fontSize: "16px",
                          }}>
                            {project.status}
                          </CardText>
                        </CardBody>
                        <CardFooter style={{
                          fontSize: "16px",
                          marginTop: "-20px",
                          color: "red",
                        }}>
                          {moment(new Date(project.createdOn)).format("DD/MM/YYYY, h:mm:ss A")}
                        </CardFooter>
                      </a>
                    </Card>
                  </Col>

                </Row>

                <CardTitle id="card2" tag="h4"

                >Project Article :</CardTitle>

                <Row>

                  <Col xs={12} >
                    <Card>
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
                                    <Col xs={12} >

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
                                          {articles
                                            .filter(a => a.status === statusOption.label)
                                            .map((article, index) => {
                                              return (<tr>
                                                <td className="text-center">{index + 1}</td>
                                                <td>{article.name}</td>
                                                <td>{article.categoryName}</td>
                                                <td>{article.fee}</td>
                                                <td>
                                                  <ReactCountryFlag
                                                    countryCode={article.languageFrom}
                                                    svg
                                                    style={{
                                                      width: '2em',
                                                      height: '2em',
                                                    }}
                                                    title={article.languageFrom}
                                                  />
                                                  <ArrowRightAltIcon></ArrowRightAltIcon>
                                                  <ReactCountryFlag
                                                    countryCode={article.languageTo}
                                                    svg
                                                    style={{
                                                      width: '2em',
                                                      height: '2em',
                                                    }}
                                                    title={article.languageTo}
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

                                    </Col>

                                  </Row>
                                </TabPane>
                              }
                              )
                            }


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
                    </Card>

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

export default TranslatorProgressArticle;
