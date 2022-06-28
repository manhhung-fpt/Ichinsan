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

// react plugin used to create charts
import { Line } from "react-chartjs-2";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";
import Switch from "react-bootstrap-switch";
import axios from 'axios';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

// reactstrap components
import {
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
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import { useHistory, useLocation } from "react-router-dom";

import {
    dashboardPanelChart,
    dashboardActiveUsersChart,
    dashboardSummerChart,
    dashboardActiveCountriesCard,
} from "variables/charts.js";
import Select from "react-select";
import Card from '@mui/material/Card';
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
    const articleId = props.location.search.split("=")[1];
    console.log(articleId);

    const [singleSelect, setSingleSelect] = React.useState(null);
    const [singleFileName, setSingleFileName] = React.useState("");
    const [singleFile, setSingleFile] = React.useState(null);
    const [openedCollapses, setOpenCollapses] = React.useState(["collapseOne"]);
    const [hTabs, sethTabs] = React.useState("ht1");
    const [vTabs, setvTabs] = React.useState("vt1");
    const [vTabsIcons, setvTabsIcons] = React.useState("vti1");
    const [pageSubcategories, setpageSubcategories] = React.useState("ps1");
    const singleFileRef = React.useRef();
    const location = useLocation();
    const [fakeData, setFakeData] = React.useState([]);
    const Edit = "edit";


    const [article, setArticle] = React.useState({});
    React.useEffect(() => {
        axios
            .get(`https://api-dotnet-test.herokuapp.com/api/articles/${articleId}`)
            .then(res => {
                //setFakeData(res.data.data);
                setArticle(res.data);
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
    const createTableData = () => {
        var tableRows = [];
        for (var i = 0; i < table_data.length; i++) {
            tableRows.push(
                <tr key={i}>
                    <td>
                        <div className="flag">
                            <img src={table_data[i].flag} alt="us_flag" />
                        </div>
                    </td>
                    <td>{table_data[i].country}</td>
                    <td className="text-right">{table_data[i].count}</td>
                    <td className="text-right">{table_data[i].percentage}</td>
                </tr>
            );
        }
        return tableRows;
    };
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
                    </Col>
                </Row>
                <Breadcrumbs separator="›" aria-label="breadcrumb" style={{ padding: '20px' }}>
                    <Link underline="hover" color="inherit" href="/admin/translator-progress">
                        Translator Progress
                    </Link>

                    <Typography color="text.primary">Article Details</Typography>
                </Breadcrumbs>

                <CardTitle id="card1" tag="h4" >Article Detail :</CardTitle>

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
                                                Null
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
                                        {article.originalContent}
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
                                    {article.deadline}
                                </CardFooter>
                            </a>
                        </Card>
                    </Col>

                </Row>

                <CardTitle id="card1" tag="h4" >Translation :</CardTitle>

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
                                                Null
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
                                        {article.originalContent}
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
                                    {article.deadline}
                                </CardFooter>
                            </a>
                        </Card>
                    </Col>

                </Row>




            </div>
        </>
    );
}

export default TranslatorProgressArticle;
