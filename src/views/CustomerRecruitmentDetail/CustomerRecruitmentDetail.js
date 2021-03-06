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
import { Pagination } from "@mui/material";
import Rating from '@mui/material/Rating';

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
import { storage } from "Firebase";
import { ref, uploadBytes, getDownloadURL, getBytes } from "firebase/storage";
import NotificationAlert from "react-notification-alert";



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
    const articleId = props.location.search.split("=")[1];
    const notificationAlert = React.useRef();
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
    const uId = localStorage.getItem('userId')
    const alertSuccesfully = () => {
        var options = {};
        options = {
            place: "tr",
            message: "Choosed Translator Successfully",
            type: "info",
            icon: "now-ui-icons ui-1_bell-53",
            autoDismiss: 7,
        };
        notificationAlert.current.notificationAlert(options);
    }
    const alertPostponed = () => {
        var options = {};
        options = {
            place: "tr",
            message: "Postponed Successfully",
            type: "info",
            icon: "now-ui-icons ui-1_bell-53",
            autoDismiss: 7,
        };
        notificationAlert.current.notificationAlert(options);
    }
    const alertFalied = (message) => {
        var options = {};
        options = {
            place: "tr",
            message: message,
            type: "info",
            icon: "now-ui-icons ui-1_bell-53",
            autoDismiss: 7,
        };
        notificationAlert.current.notificationAlert(options);
    }
    const reFresData = () => {
        axios
            .get(`https://api-dotnet-test.herokuapp.com/api/articles/application/${articleId}`)
            .then(res => {

                setProjectId(res.data[0].projectId);
                setTranslators(res.data[0].applicationDetail)

            })
            .catch(err => { console.log(err) })
    }
    const reFresArticles = () => {
        axios
            .get(`https://api-dotnet-test.herokuapp.com/api/articles/${articleId}`)
            .then(res => {
                setArticle(res.data);
                //Get URL froom firebase
                const fileRef = ref(storage, `originalArticles/${res.data.originalContent}`)
                getDownloadURL(fileRef).then((response) => {
                    setOriginalContentUrl(response)
                })
            })
            .catch(err => { console.log(err) })
    }
    const location = useLocation();
    const chooseTransaltor = (translator) => {
        var axios = require('axios');
        var data = JSON.stringify({
            "id": translator.id,
            "appliedBy": translator.appliedBy,
            "isApproved": true,
            "approvedBy": uId,
            "status": 1
        });

        var config = {
            method: 'put',
            url: `https://api-dotnet-test.herokuapp.com/api/applications/${translator.id}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                alertSuccesfully();
                /// update Status of an articles after add a transolator
                upDateStatus();
                reFresArticles();
                reFresData();

            })
            .catch(function (error) {
                alertFalied(error.message)
                console.log(error);
            });


    }

    const [projectId, setProjectId] = React.useState('')
    const Edit = "edit";
    const singleFileRef = React.useRef();

    const [rating, setRating] = React.useState(2);


    const [modalNotice, setModalNotice] = React.useState(false);
    const [modalEdit, setModalEdit] = React.useState(false);
    const [page, setPage] = React.useState(1);
    const [originalContentUrL, setOriginalContentUrl] = React.useState('');
    const [translatedContentUrl, setFileURL] = React.useState('');
    const [translators, setTranslators] = useState([]);




    const toggleModalClassic = () => {
        setModalClassic(!modalClassic);
    };
    const toggleModalNotice = () => {
        setModalNotice(!modalNotice);
    };

    const [feedbacks, setFeedbacks] = useState([]);
    React.useEffect(() => {
        axios
            .get(`https://api-dotnet-test.herokuapp.com/api/articles/feedbacks/${articleId}`)
            .then((res) => {
                setFeedbacks(res.data[0].feedbackList)
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);


    const [article, setArticle] = React.useState([]);
    React.useEffect(() => {
        axios
            .get(`https://api-dotnet-test.herokuapp.com/api/articles/application/${articleId}`)
            .then(res => {

                setProjectId(res.data[0].projectId);
                setTranslators(res.data[0].applicationDetail)

            })
            .catch(err => { console.log(err) })
    }, [])
    React.useEffect(() => {
        axios
            .get(`https://api-dotnet-test.herokuapp.com/api/articles/${articleId}`)
            .then(res => {
                setArticle(res.data);
                //Get URL froom firebase
                const fileRef = ref(storage, `originalArticles/${res.data.originalContent}`)
                getDownloadURL(fileRef).then((response) => {
                    setOriginalContentUrl(response)
                })
                const fileRef2 = ref(storage, `translationArticles/${res.data.translatedContent}`)
                uploadBytes(fileRef2, singleFile).then((res) => {
                    getDownloadURL(res.ref).then((response) => {
                        setFileURL(response)
                    })
                })
            })
            .catch(err => { console.log(err) })
    }, [])
    const upDateStatus = () => {
        var axios = require('axios');
        var data = JSON.stringify({
            "name": article.name,
            "languageFrom": article.languageFrom,
            "languageTo": article.languageTo,
            "description": article.description,
            "originalContent": article.originalContent,
            "deadline": article.deadline,
            "numberOfWords": article.numberOfWords,
            "auditorId": article.auditorId,
            "fee": article.fee,
            "status": 2
        });
        var config = {
            method: 'put',
            url: `https://api-dotnet-test.herokuapp.com/api/articles/${articleId}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
            });
    }
    console.log(translators);
    console.log(article);


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
        history.push("/admin/customer-progress-article")
    };

    const onClickAdd = () => {
        history.push(`customer-create-feedback?id=${articleId}&projectId=${projectId}`)
    };
    const onClickPostpose = () => {
        var axios = require('axios');
        var data = JSON.stringify({
            "name": article.name,
            "languageFrom": article.languageFrom,
            "languageTo": article.languageTo,
            "description": article.description,
            "deadline": article.deadline,
            "numberOfWords": article.numberOfWords,
            "auditorId": article.auditorId,
            "fee": article.fee,
            "status": 5
        });
        var config = {
            method: 'put',
            url: `https://api-dotnet-test.herokuapp.com/api/articles/${articleId}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                alertPostponed();
                setTimeout(() => {
                    history.push(`customer-arti-detail?id=${projectId}`);
                }, 2000);
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
            });
    };

    // const onClickEditArti = () => {
    //     history.push("/admin/customer-edit-article ")
    // };


    return (
        <>
            <NotificationAlert ref={notificationAlert} />
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

                        <Breadcrumbs separator="???" aria-label="breadcrumb" style={{ padding: '20px' }}>
                            <Link underline="hover" color="inherit" href="/admin/translator-progress">
                                Translator Progress
                            </Link>

                            <Typography color="text.primary">Article Details</Typography>
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
                                <CardTitle id="card1" tag="h4">Article Detail :</CardTitle>

                                <Row>

                                    <Col xs={12} lg={8}>
                                        <Card>
                                            {/* <a style={{ all: "unset", cursor: "pointer" }} href={`customer-recruitment-detail?id=${article.id}`}> */}
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
                                                <CardActions disableSpacing>

                                                    <Col md={1}>
                                                        <a style={{ all: "unset", cursor: "pointer" }} href={`customer-edit-article?id=${articleId}`}>
                                                            <Button className="btn-info" color="primary" style={
                                                                {

                                                                    fontSize: "10px",

                                                                }
                                                            }>
                                                                Edit
                                                            </Button>
                                                        </a>
                                                    </Col>

                                                    <Col md={1}>
                                                        <Button onClick={onClickPostpose} className="btn-danger" color="primary" style={
                                                            {

                                                                fontSize: "10px",

                                                            }
                                                        }>
                                                            Postponed
                                                        </Button>
                                                    </Col>
                                                    <Col md={10}>

                                                    </Col>
                                                </CardActions>
                                                <div class="go-corner" href="#" style={{
                                                    backgroundColor: "#2CA8FF",
                                                }}>
                                                    <div class="go-arrow">
                                                        <ArrowRightIcon></ArrowRightIcon>
                                                    </div>
                                                </div>
                                            {/* </a> */}

                                        </Card>
                                    </Col>

                                </Row>

                                <CardTitle id="card2" tag="h4"

                                >Translation :</CardTitle>

                                <Row>

                                    <Col xs={12} lg={8}>
                                        <Card>
                                            <a style={{ all: "unset", cursor: "pointer" }} href={`customer-recruitment-detail?id=${article.id}`}>
                                                <CardHeader>
                                                    <Row>
                                                        <Col xs={12} md={4}>
                                                            <CardTitle style={{
                                                                color: "black",
                                                                fontSize: "20px",
                                                                fontWeight: "bold",
                                                            }}>
                                                                <CropOriginalIcon style={{
                                                                    marginRight: "10px",
                                                                }}></CropOriginalIcon>
                                                                Original Article :
                                                            </CardTitle>
                                                        </Col>
                                                        <Col xs={12} md={1}>
                                                            <CardTitle style={{
                                                                color: "#2CA8FF",
                                                                fontSize: "20px",
                                                                fontWeight: "bold",
                                                            }}>
                                                                <a href={originalContentUrL}>
                                                                    <DownloadIcon></DownloadIcon>
                                                                </a>
                                                            </CardTitle>
                                                        </Col>
                                                        <Col xs={12} md={7}>
                                                            <CardTitle style={{
                                                                color: "#2CA8FF",
                                                                fontSize: "20px",
                                                                fontWeight: "bold",
                                                            }}>
                                                                {article.originalContent}
                                                            </CardTitle>
                                                        </Col>
                                                    </Row>
                                                </CardHeader>

                                                <CardHeader>
                                                    <Row>
                                                        <Col xs={12} md={4}>
                                                            <CardTitle style={{
                                                                color: "black",
                                                                fontSize: "20px",
                                                                fontWeight: "bold",
                                                            }}>
                                                                <TranslateIcon
                                                                    style={{
                                                                        marginRight: "10px",
                                                                    }}
                                                                ></TranslateIcon>
                                                                Translation Article :
                                                            </CardTitle>
                                                        </Col>
                                                        <Col xs={12} md={1}>
                                                            <CardTitle style={{
                                                                color: "#2CA8FF",
                                                                fontSize: "20px",
                                                                fontWeight: "bold",
                                                            }}>
                                                                <a href={translatedContentUrl}>
                                                                <UploadIcon></UploadIcon>
                                                                </a>
                                                            </CardTitle>
                                                        </Col>
                                                        <Col xs={12} md={7}>
                                                            <CardTitle style={{
                                                                color: "#2CA8FF",
                                                                fontSize: "20px",
                                                                fontWeight: "bold",

                                                            }}>
                                                                {article.translatedContent}
                                                            </CardTitle>
                                                        </Col>
                                                    </Row>
                                                </CardHeader>
                                                <CardBody style={{
                                                    marginTop: "-20px",
                                                }}>
                                                    <Row>
                                                        <Col xs={12} md={5}>
                                                            <CardTitle style={{
                                                                color: "black",
                                                                fontSize: "20px",
                                                                fontWeight: "bold",
                                                            }}>
                                                                <AccountCircleIcon
                                                                    style={{
                                                                        marginRight: "10px",
                                                                    }}
                                                                ></AccountCircleIcon>
                                                                Translator Name :
                                                            </CardTitle>
                                                        </Col>
                                                        <Col xs={12} md={7}
                                                            style={{
                                                                color: "#2CA8FF",
                                                                fontSize: "20px",
                                                                fontWeight: "bold",
                                                            }}
                                                        >
                                                            {article.translatorName}
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col xs={12} md={5}>
                                                            <CardTitle style={{
                                                                color: "black",
                                                                fontSize: "20px",
                                                                fontWeight: "bold",
                                                            }}>
                                                                <AccountCircleIcon
                                                                    style={{
                                                                        marginRight: "10px",
                                                                    }}
                                                                ></AccountCircleIcon>
                                                                Auditor Name :
                                                            </CardTitle>
                                                        </Col>
                                                        <Col xs={12} md={7}
                                                            style={{
                                                                color: "#2CA8FF",
                                                                fontSize: "20px",
                                                                fontWeight: "bold",
                                                            }}
                                                        >
                                                            {article.auditorName}
                                                        </Col>
                                                    </Row>

                                                </CardBody>

                                            </a>
                                        </Card>
                                    </Col>

                                </Row>
                                <CardTitle id="card2" tag="h4"

                                >Recruitments Table :</CardTitle>

                                <Row>
                                    <Col xs={12} >
                                        <Card>

                                            <CardHeader>

                                            </CardHeader>
                                            <CardBody style={{
                                                marginTop: "-20px",
                                            }}>
                                                <Table responsive>
                                                    <thead className="text-primary">
                                                        <tr>
                                                            <th >#</th>
                                                            <th>Translator Name</th>
                                                            <th>Apply Date</th>
                                                            <th>Status</th>
                                                            <th>Choose</th>


                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {translators?.map((translator, index) => {
                                                            return (<tr>
                                                                <td >{index + 1}</td>
                                                                <td>{translator.appliedName}</td>
                                                                <td>
                                                                    {moment(new Date()).format("DD/MM/YYYY")}
                                                                </td>
                                                                <td >
                                                                    {translator.isApproved !== true ? (
                                                                        <Button style={{
                                                                            backgroundColor: "orange",
                                                                        }}>{translator.statusName}</Button>
                                                                    ) : (<Button style={{
                                                                        backgroundColor: "green",
                                                                    }}>Approved</Button>)

                                                                    }
                                                                </td>
                                                                <td>
                                                                    {translator.isApproved !== true ? (<Button onClick={() => { chooseTransaltor(translator) }} color="info" className="btn-right" style={
                                                                        {

                                                                            fontSize: "10px",

                                                                        }
                                                                    }>

                                                                        Choose
                                                                    </Button>) : (<Button disabled onClick={() => { chooseTransaltor(translator) }} color="info" className="btn-right" style={
                                                                        {

                                                                            fontSize: "10px",

                                                                        }
                                                                    }>

                                                                        Choose
                                                                    </Button>)}
                                                                </td>

                                                            </tr>);
                                                        })
                                                        }


                                                    </tbody>
                                                </Table>
                                            </CardBody>


                                        </Card>
                                    </Col>

                                </Row>

                                <CardTitle id="card3" tag="h4" >Article Feedback :</CardTitle>
                                <Col md={2}>
                                    <Button onClick={onClickAdd} className="btn-info" color="default" style={
                                        {

                                            fontSize: "10px",
                                            backgroundColor: "#ffca00",
                                        }
                                    }>
                                        Add an Feedback +
                                    </Button>
                                </Col>
                                <Row>

                                    <Col xs={12} lg={10}>
                                        {feedbacks
                                            .filter(a => a.articleId === articleId)
                                            .map((feedback, index) => {
                                                return (
                                                    <Card
                                                        style={{
                                                            marginBottom: "10px",
                                                        }}
                                                    >
                                                        <a style={{ all: "unset", cursor: "pointer" }} href={`customer-recruitment-detail?id=${article.id}`}>
                                                            <CardHeader>
                                                                <Row>
                                                                    <Col xs={12} md={8}>
                                                                        <CardTitle style={{
                                                                            color: "#2CA8FF",
                                                                            fontSize: "20px",
                                                                            fontWeight: "bold",
                                                                        }}>

                                                                            {feedback.content}</CardTitle>
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
                                                                    <Rating
                                                                        name="simple-controlled"
                                                                        value={feedback.rating}

                                                                    />
                                                                </CardTitle>
                                                            </CardBody>
                                                            <CardFooter style={{
                                                                fontSize: "16px",
                                                                marginTop: "-20px",
                                                                color: "red",
                                                            }}>
                                                                {moment(new Date(feedback.createdOn)).format("DD/MM/YYYY, h:mm:ss A")}
                                                            </CardFooter>
                                                            <CardActions disableSpacing>
                                                                <Col md={1}>
                                                                    <Button className="btn-info" color="primary" style={
                                                                        {

                                                                            fontSize: "10px",

                                                                        }
                                                                    }>
                                                                        Edit
                                                                    </Button>
                                                                </Col>
                                                                <Col md={1}>
                                                                    <Button onClick={onClickPostpose} className="btn-right" color="primary" style={
                                                                        {
                                                                            backgroundColor: "red",
                                                                            fontSize: "10px",

                                                                        }
                                                                    }>

                                                                        Postponed
                                                                    </Button>
                                                                </Col>


                                                            </CardActions>
                                                        </a>

                                                    </Card>
                                                );
                                            })
                                        }
                                    </Col>

                                </Row>
                                <Button color="primary" onClick={toggleModalClassic}>
                                    See More
                                </Button>
                                <Modal
                                    isOpen={modalClassic}
                                    toggle={toggleModalClassic}
                                    className="text-center"
                                >
                                    <ModalHeader
                                        className="justify-content-center uppercase title"
                                        toggle={toggleModalClassic}
                                        tag="h4"
                                    >
                                        {article.originalContent}
                                    </ModalHeader>
                                    <ModalBody>
                                        {article.description}
                                    </ModalBody>
                                    <ModalFooter>

                                        <Button color="danger" onClick={toggleModalClassic}>
                                            Close
                                        </Button>
                                    </ModalFooter>
                                </Modal>



                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default TranslatorProgressArticle;
