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
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import { useHistory } from "react-router-dom";

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
import ReactCountryFlag from "react-country-flag";

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
function CustomerProgressProject() {

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

    React.useEffect(() => {
        axios
            .get('https://reqres.in/api/users')
            .then(res => {
                setFakeData(res.data.data);
            })
            .catch(err => { console.log(err) })
    }, [])
    console.log(fakeData);
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
        history.push("/admin/customer-home")
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
        history.push("/admin/customer-home")
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



                    <Col lg={12} md={12} xs={12}>
                        <Card>
                            <CardHeader>
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
                            </CardHeader>

                            <CardBody>

                                <CardTitle tag="h4" >Progress</CardTitle>
                                <Breadcrumbs separator="›" aria-label="breadcrumb" style={{ padding: '20px' }}>
                                    <Link underline="hover" color="inherit" href="/admin/customer-home">
                                        Customer Home
                                    </Link>
                                    <Link underline="hover" color="inherit" href="/admin/customer-arti-detail">
                                        Project Article Deatails
                                    </Link>
                                    <Typography color="text.primary">Project Progress</Typography>
                                </Breadcrumbs>

                                <Nav pills className="nav-pills-info"

                                >
                                    <NavItem>
                                        <NavLink
                                            className={hTabs === "ht1" ? "active" : ""}
                                            onClick={() => sethTabs("ht1")}

                                        >
                                            My Projects
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={hTabs === "ht2" ? "active" : ""}
                                            onClick={() => sethTabs("ht2")}
                                        >
                                            Recruitments
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={hTabs === "ht3" ? "active" : ""}
                                            onClick={() => sethTabs("ht3")}
                                        >
                                            Feedbacks
                                        </NavLink>
                                    </NavItem>

                                </Nav>




                                <TabContent activeTab={hTabs} className="tab-space">

                                    <TabPane tabId="ht1">
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
                                                    className="react-select warning"
                                                    classNamePrefix="react-select"
                                                    isMulti
                                                    closeMenuOnSelect={false}
                                                    placeholder="Sort "
                                                    name="multipleSelect"
                                                    value={singleSelect}
                                                    options={selectOptions}
                                                    onChange={(value) => setSingleSelect(value)}
                                                />
                                            </Col>
                                            <Col xs={12} md={3} size="sm">
                                                Number of Recruitments : 6
                                            </Col>
                                            <Col xs={12} md={3} size="sm">

                                            </Col>
                                            <Col xs={12} md={3} size="sm">

                                            </Col>
                                        </Row>



                                        <Row style={{
                                            marginTop: "40px",
                                        }}>
                                            <Col xs={12} md={12}>


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
                                                            color: "black",
                                                        }}>
                                                            <AccountCircleIcon></AccountCircleIcon>
                                                            Tran Manh Hung</CardTitle>
                                                        <CardTitle style={{
                                                            marginLeft: "",
                                                            color: "black",
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


                                                        <CardTitle style={{
                                                            marginLeft: "",
                                                            color: "black",
                                                        }}>
                                                            <CalendarMonthIcon></CalendarMonthIcon>
                                                            06/08/2022 12:00 AM</CardTitle>

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

                                                </Card>

                                            </Col>

                                        </Row>







                                        <CardActions disableSpacing>
                                            <Col md={8}>

                                            </Col>
                                            <Col md={1}>
                                                <Button onClick={onClickEdit} className="btn-info" color="primary" style={
                                                    {

                                                        fontSize: "10px",

                                                    }
                                                }>
                                                    Edit
                                                </Button>
                                            </Col>
                                            <Col md={2}>
                                                <Button onClick={onClickAdd} className="btn-info" color="default" style={
                                                    {

                                                        fontSize: "10px",

                                                    }
                                                }>
                                                    Add an Article
                                                </Button>
                                            </Col>
                                            <Col md={1}>
                                                <Button onClick={onClickPostpose} className="btn-danger" color="primary" style={
                                                    {

                                                        fontSize: "10px",

                                                    }
                                                }>
                                                    Postpose
                                                </Button>
                                            </Col>
                                        </CardActions>

                                    </TabPane>

                                    <TabPane tabId="ht2">
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
                                                    className="react-select warning"
                                                    classNamePrefix="react-select"
                                                    isMulti
                                                    closeMenuOnSelect={false}
                                                    placeholder="Sort "
                                                    name="multipleSelect"
                                                    value={singleSelect}
                                                    options={selectOptions}
                                                    onChange={(value) => setSingleSelect(value)}
                                                />
                                            </Col>
                                            <Col xs={12} md={3} size="sm">
                                                Number of Recruitments : 5
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
                                                        <th>Article Name</th>
                                                        <th>Applicants</th>
                                                        <th>Deadline</th>
                                                        <th className="text-right">View</th>
                                                        <th className="text-right">Status</th>

                                                    </tr>
                                                </thead>
                                                <tbody>


                                                    {
                                                        fakeData.map((item, index) => {
                                                            return (<tr>
                                                                <td className="text-center">{index + 1}</td>
                                                                <td>{item.first_name}</td>
                                                                <td>{item.last_name}</td>
                                                                <td>{item.email}</td>
                                                                <td className="text-right btns-mr-5">

                                                                    <Button onClick={onClickView} style={
                                                                        {

                                                                            fontSize: "10px",

                                                                        }
                                                                    }>

                                                                        View
                                                                    </Button>

                                                                </td>
                                                                <td className="text-right">
                                                                    <Switch defaultValue={false} />


                                                                </td>

                                                            </tr>);
                                                        })
                                                    }


                                                </tbody>
                                            </Table>
                                        </CardBody>
                                    </TabPane>
                                    <TabPane tabId="ht3">
                                        <Row style={{
                                            marginTop: "40px",
                                        }}>
                                            <Col xs={12} md={3}>

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
                                                            <GTranslateIcon></GTranslateIcon>
                                                            Translator : 2/10</CardTitle>

                                                        <CardTitle style={{
                                                            marginLeft: "",
                                                            color: "black",
                                                        }}>
                                                            <SpellcheckIcon></SpellcheckIcon>
                                                            Auditor : 2/10</CardTitle>
                                                        <Button onClick={onClickFeedback} className="btn-info" color="default" style={
                                                            {

                                                                fontSize: "10px",

                                                            }
                                                        }>
                                                            Add Feedback
                                                        </Button>
                                                    </CardHeader>



                                                </Card>

                                            </Col>
                                            <Col xs={12} md={3}>

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
                                                            <GTranslateIcon></GTranslateIcon>
                                                            Translator : 2/10</CardTitle>

                                                        <CardTitle style={{
                                                            marginLeft: "",
                                                            color: "black",
                                                        }}>
                                                            <SpellcheckIcon></SpellcheckIcon>
                                                            Auditor : 2/10</CardTitle>
                                                        <Button onClick={onClickFeedback} className="btn-info" color="default" style={
                                                            {

                                                                fontSize: "10px",

                                                            }
                                                        }>
                                                            Add Feedback
                                                        </Button>
                                                    </CardHeader>



                                                </Card>

                                            </Col>
                                            <Col xs={12} md={3}>

                                            </Col>
                                            <Col xs={12} md={3}>

                                            </Col>
                                        </Row>

                                    </TabPane>
                                </TabContent>
                            </CardBody>
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
                        </Card>
                    </Col>
                </Row>

            </div>
        </>
    );
}

export default CustomerProgressProject;
