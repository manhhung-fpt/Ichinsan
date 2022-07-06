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
import Datetime from "react-datetime";
import { useEffect, useState } from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";
import Switch from "react-bootstrap-switch";
import axios from 'axios';
import StarRateIcon from '@mui/icons-material/StarRate';
import { Fab, Action } from 'react-tiny-fab';

// reactstrap components
import {
    Table,
    CardBody,
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
import { useHistory } from "react-router-dom";

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Select from "react-select";
import Card from '@mui/material/Card';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SignalWifiStatusbar4BarIcon from '@mui/icons-material/SignalWifiStatusbar4Bar';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CategoryIcon from '@mui/icons-material/Category';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import TranslateIcon from '@mui/icons-material/Translate';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import DownloadIcon from '@mui/icons-material/Download';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import ReactCountryFlag from "react-country-flag"


import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';


import { table_data } from "variables/general.js";
var selectOptions = [
    { value: "one", label: "One" },
    { value: "two", label: "Two" },
    { value: "three", label: "Three" },
    { value: "four", label: "Four" },
    { value: "five", label: "Five" },
    { value: "six", label: "Six" },
];
function CustomerProgressArticle(props) {
    const articleId = props.location.search.split("=")[1];
    const [singleSelect, setSingleSelect] = React.useState(null);
    const [singleFileName, setSingleFileName] = React.useState("");
    const [singleFile, setSingleFile] = React.useState(null);
    const [openedCollapses, setOpenCollapses] = React.useState(["collapseOne"]);
    const [hTabs, sethTabs] = React.useState("ht1");
    const [vTabs, setvTabs] = React.useState("vt1");
    const [vTabsIcons, setvTabsIcons] = React.useState("vti1");
    const [pageSubcategories, setpageSubcategories] = React.useState("ps1");
    const singleFileRef = React.useRef();

    const [fakeData, setFakeData] = React.useState([]);
    const handleSingleFileInput = (e) => {
        singleFileRef.current.click(e);
    };
    React.useEffect(() => {
        axios
            .get('https://reqres.in/api/users')
            .then(res => {
                setFakeData(res.data.data);
            })
            .catch(err => { console.log(err) })
    }, [])
    console.log(fakeData);
    const [count, setCount] = React.useState(0);
    const addSingleFile = (e, type) => {
        let fileNames = "";
        let files = e.target.files;
        for (let i = 0; i < e.target.files.length; i++) {
            fileNames = fileNames + e.target.files[i].name;
        }
        setSingleFile(files);
        setSingleFileName(fileNames);
    };


    const [customers, setCustomers] = useState([]);
    React.useEffect(() => {
        axios
            .get("https://api-dotnet-test.herokuapp.com/api/applications/customers?pageNumber=1&pageSize=5")
            .then((res) => {
                const data = res.data;
                setCustomers(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);



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

    const onClickBack = () => {
        history.push("/admin/customer-arti-detail")
    };


   
    const [article, setArticle] = React.useState({});
    


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
                            <span className="btn-label">
                                <i className="now-ui-icons arrows-1_minimal-left" />
                            </span>
                            Back
                        </Button>
                    </Col>
                </Row>




                <Breadcrumbs separator="›" aria-label="breadcrumb" style={{ padding: '20px' }}>
                    <Link underline="hover" color="inherit" href="/admin/customer-home">
                        Customer Home
                    </Link>
                    <Link underline="hover" color="inherit" href="/admin/customer-arti-detail">
                        Project Details
                    </Link>
                    <Typography color="text.primary">Project Recruitment</Typography>
                </Breadcrumbs>

                <CardTitle id="card2" tag="h4" >Project Recruitment</CardTitle>




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
                                            <th>Article Name</th>
                                            <th>Applicants</th>
                                            <th>Dealine</th>
                                            <th>Status</th>
                                            <th >View</th>


                                        </tr>
                                    </thead>
                                    <tbody>
                                        {customers.map((customer, index) => {
                                            return (<tr>
                                                <td >{index + 1}</td>
                                                <td>{customer.articleName}</td>
                                                <td>{customer.totalApplicants}</td>
                                                <td>{customer.deadlineApply}</td>
                                                <td >
                                                    {/* <Switch defaultValue={false} /> */}
                                                    <Button style={{
                                                        backgroundColor: "orange",
                                                    }}>{customer.status}</Button>

                                                </td>
                                                <td>
                                                <a style={{ all: "unset", cursor: "pointer" }} href={`customer-recruitment-detail?id=${customer.articleId}`}>
                                                    <Button  color="info" className="btn-right" style={
                                                        {

                                                            fontSize: "10px",

                                                        }
                                                    }>

                                                        View
                                                    </Button>
                                                    </a>
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
            </div>


        </>
    );
}

export default CustomerProgressArticle;
