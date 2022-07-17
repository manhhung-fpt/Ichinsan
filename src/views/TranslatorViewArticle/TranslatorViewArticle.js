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
function TranslatorViewArticle(props) {
    const notificationAlert = React.useRef();
    const [modalClassic, setModalClassic] = React.useState(false);
    const articleId = props.location.search.split("=")[1];
    console.log(articleId);

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
    const [articlesId, setArticleId] = React.useState('')
    const [projectId, setProjectId] = React.useState('')
    const uId = localStorage.getItem("userId")



    const [modalNotice, setModalNotice] = React.useState(false);
    const [modalEdit, setModalEdit] = React.useState(false);

    const toggleModalClassic = () => {
        setModalClassic(!modalClassic);
    };
    const toggleModalNotice = () => {
        setModalNotice(!modalNotice);
    };

    const [feedbacks, setFeedbacks] = useState([]);
    React.useEffect(() => {
        axios
            .get("https://api-dotnet-test.herokuapp.com/api/feedbacks?pageNumber=1&pageSize=30")
            .then((res) => {
                const data = res.data;
                setFeedbacks(data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);
    const [article, setArticle] = React.useState({});
    React.useEffect(() => {
        axios
            .get(`https://api-dotnet-test.herokuapp.com/api/articles/${articleId}`)
            .then(res => {
                //setFakeData(res.data.data);
                setArticle(res.data);
                setArticleId(res.data.id)
                setProjectId(res.data.projectId)
                
            })
            .catch(err => { console.log(err) })
    }, [])
    console.log(article)


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
    const alertSuccesfully = () => {
        var options = {};
        options = {
            place: "tr",
            message: "Aplly Successfully",
            type: "info",
            icon: "now-ui-icons ui-1_bell-53",
            autoDismiss: 7,
        };
        notificationAlert.current.notificationAlert(options);
    }

    const apllyArticle = () => {
        console.log('project:', projectId);
        console.log('articles:', articleId);

        console.log('user:', uId);
        var axios = require('axios');
        var data = JSON.stringify({
            "projectId": projectId,
            "articleId": articleId,
            "appliedBy": uId
        });

        var config = {
            method: 'post',
            url: 'https://api-dotnet-test.herokuapp.com/api/applications',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                alertSuccesfully()
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    let history = useHistory();
    const onClick = () => {
        history.push("/admin/admin-projec/admin-project-details")
    };
    const onClickBack = () => {
        history.push("/admin/translator-progress")
    };
    const onClickView = () => {
        history.push("/admin/customer-progress-article")
    };
    const onClickFeedback = () => {
        history.push("/admin/customer-create-feedback")
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

                        <Breadcrumbs separator="›" aria-label="breadcrumb" style={{ padding: '20px' }}>
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
                                <CardTitle id="card1" tag="h4">Article Detail :

                                </CardTitle>


                                <Row>

                                    <Col xs={12} lg={8}>
                                        <Card>
                                            <a style={{ all: "unset", cursor: "pointer" }} href={`translator-progress-article?id=${article.id}`}>
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
                                            <div className="pull-right">
                                                <Button color="info" onClick={apllyArticle} style={
                                                    {
                                                        marginRight: "10px",
                                                        fontSize: "14px",

                                                    }
                                                }>
                                                    Apply
                                                </Button>
                                            </div>
                                        </Card>
                                    </Col>

                                </Row>
                                

                                <CardTitle id="card2" tag="h4"

                                >Translation :</CardTitle>

                                <Row>

                                    <Col xs={12} lg={8}>
                                        <Card>
                                            <a style={{ all: "unset", cursor: "pointer" }} href={`translator-progress-article?id=${article.id}`}>
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
                                                                <DownloadIcon></DownloadIcon>
                                                            </CardTitle>
                                                        </Col>
                                                        <Col xs={12} md={7}>
                                                            <CardTitle style={{
                                                                color: "#2CA8FF",
                                                                fontSize: "20px",
                                                                fontWeight: "bold",
                                                            }}>


                                                                {/* 
                                                <input
                                                    type="file"
                                                    className="inputFileHidden"
                                                    style={{ zIndex: -1 }}
                                                    ref={singleFileRef}
                                                    onChange={(e) => addSingleFile(e)}
                                                /> */}

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
                                                                <UploadIcon></UploadIcon>
                                                            </CardTitle>
                                                        </Col>
                                                        <Col xs={12} md={7}>
                                                            <CardTitle style={{
                                                                color: "#2CA8FF",
                                                                fontSize: "20px",
                                                                fontWeight: "bold",
                                                            }}>

                                                                <Input
                                                                    type="text"
                                                                    className="inputFileVisible"
                                                                    placeholder="Dowdload File..."
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

                                                            </CardTitle>
                                                            {singleFile !== null && singleFileName !== "" ? (
                                                                <Row>
                                                                    <Col xs={12} md={5} size="sm"  >
                                                                        <Button onClick={onClickPostpose} className="btn-danger" color="primary" style={
                                                                            {

                                                                                fontSize: "10px",

                                                                            }
                                                                        }>
                                                                            Edit
                                                                        </Button>
                                                                    </Col>
                                                                    <Col xs={12} md={5} size="sm"  >
                                                                        <Button onClick={onClickPostpose} className="btn-info" color="primary" style={
                                                                            {

                                                                                fontSize: "10px",

                                                                            }
                                                                        }>
                                                                            Remove
                                                                        </Button>
                                                                    </Col>
                                                                </Row>

                                                            ) : (
                                                                <Button hidden onClick={onClickAdd} className="btn-info" color="default" style={
                                                                    {

                                                                        fontSize: "10px",

                                                                    }
                                                                }>
                                                                    Add an Article
                                                                </Button>
                                                            )}
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
                                                            {article.translator}
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
                                                            {article.auditor}
                                                        </Col>
                                                    </Row>

                                                </CardBody>

                                            </a>
                                        </Card>
                                    </Col>

                                </Row>
                                <CardTitle id="card3" tag="h4" >Article Feedback :</CardTitle>

                                <Row>

                                    <Col xs={12} lg={6}>
                                        <Card>
                                            <a style={{ all: "unset", cursor: "pointer" }} href={`translator-progress-article?id=${article.id}`}>
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
                                                        {article.originalContent}
                                                    </CardTitle>
                                                    <CardTitle style={{
                                                        color: "#ea108f",
                                                        fontSize: "24px",
                                                        fontWeight: "bold",
                                                    }}>
                                                        <StarRateIcon></StarRateIcon>
                                                        <StarRateIcon></StarRateIcon>
                                                        <StarRateIcon></StarRateIcon>
                                                        <StarRateIcon></StarRateIcon>
                                                        <StarRateIcon></StarRateIcon>
                                                    </CardTitle>
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

export default TranslatorViewArticle;
