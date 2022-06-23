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
function CustomerRecruitmentDetail() {

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
        history.push("/admin/customer-progress-article")
    };
    const onClickFeedback = () => {
        history.push("/admin/customer-create=feedback")
    };
    const onClickCard = () => {
        history.push("/admin/customer-arti-detail")
    };
    const onClickAdd = () => {
        history.push("/admin/customer-create=feedback")
    };
    const onClickPostpose = () => {
        history.push("/admin/customer-arti-detail")
    };
    const onClickEdit = () => {
        history.push("/admin/customer-edit-feedback")
    };
    const onClickEditArti = () => {
        history.push("/admin/customer-edit-article")
    };
    const onClickDelete = () => {
        history.push("/admin/customer-progress-article")
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
                    <Link underline="hover" color="inherit" href="/admin/customer-progress-article">
                        Project Recruitment
                    </Link>

                    <Typography color="text.primary">Recruitment Article Detail</Typography>
                </Breadcrumbs>

                <CardTitle id="card2" tag="h4" >Recruitment Article Detail :</CardTitle>
                <CardActions disableSpacing>

                    <Col md={1}>
                        <Button onClick={onClickEditArti} className="btn-info" color="primary" style={
                            {

                                fontSize: "10px",

                            }
                        }>
                            Edit
                        </Button>
                    </Col>

                    <Col md={1}>
                        <Button onClick={onClickPostpose} className="btn-danger" color="primary" style={
                            {

                                fontSize: "10px",

                            }
                        }>
                            Delete
                        </Button>
                    </Col>
                    <Col md={10}>

                    </Col>
                </CardActions>


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



                <Fab
                    icon={"+"}
                    mainButtonStyles={{ backgroundColor: '#e74c3c' }}
                    alwaysShowTitle={false}
                // onClick={someFunctionForTheMainButton}
                >

                    <Action

                        text="Project Detail"
                        onClick={() => window.location.href = "#card2"}
                    >
                    </Action>
                    <Action
                        text="Project Article"
                        onClick={() => window.location.href = "#card3"}
                    >
                        <i className="fa fa-help" />
                    </Action>



                </Fab>



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

                        </Card>

                    </Col>

                </Row>








                <CardTitle id="card2" tag="h4" >Translations : </CardTitle>

                <Row>
                    <Col xs={12} md={12}>

                        <Card>
                            <CardBody>

                                <Row>
                                    <Col xs={12} md={2} size="sm" style={{
                                        color: "orange",
                                    }} >
                                        <SignalWifiStatusbar4BarIcon></SignalWifiStatusbar4BarIcon>
                                        Pending

                                    </Col>
                                    <Col xs={12} md={5} size="sm"  >

                                    </Col>
                                    <Col xs={12} md={5} size="sm"  >

                                    </Col>
                                </Row>

                            </CardBody>





                            <CardBody>

                                <Row>
                                    <Col xs={12} md={2} size="sm"  >
                                        <CropOriginalIcon></CropOriginalIcon>
                                        Original Article
                                    </Col>
                                    <Col xs={12} md={5} size="sm"  >
                                        <FormGroup className="form-file-upload form-file-simple">
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
                                        </FormGroup>
                                    </Col>
                                    <Col xs={12} md={5} size="sm"  >
                                        <DownloadIcon></DownloadIcon>
                                    </Col>
                                </Row>

                            </CardBody>
                            <CardBody>
                                <Row>
                                    <Col xs={12} md={2} size="sm"  >
                                        <TranslateIcon></TranslateIcon>
                                        Translation Article
                                    </Col>
                                    <Col xs={12} md={5} size="sm"  >
                                        <FormGroup className="form-file-upload form-file-simple">
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
                                        </FormGroup>
                                    </Col>
                                    <Col xs={12} md={5} size="sm"  >
                                        <DownloadIcon></DownloadIcon>
                                    </Col>
                                </Row>


                            </CardBody>

                            <CardBody>

                                <Row>
                                    <Col xs={12} md={2} size="sm"  >
                                        <AccountCircleIcon></AccountCircleIcon>
                                        Translator
                                    </Col>
                                    <Col xs={12} md={5} size="sm"  >

                                        Vo Khac Trieu
                                    </Col>
                                    <Col xs={12} md={5} size="sm"  >

                                    </Col>
                                </Row>

                            </CardBody>
                            <CardBody>

                                <Row>
                                    <Col xs={12} md={2} size="sm"  >
                                        <AccountCircleIcon></AccountCircleIcon>
                                        Auditor
                                    </Col>
                                    <Col xs={12} md={5} size="sm"  >
                                        Tran Manh Hung
                                    </Col>
                                    <Col xs={12} md={5} size="sm"  >
                                    </Col>
                                </Row>

                            </CardBody>

                        </Card>
                    </Col>

                </Row>

                <CardTitle id="card2" tag="h4" >Recruitments : </CardTitle>
                <CardBody>
                    <Table responsive>
                        <thead className="text-primary">
                            <tr>
                                <th className="text-center">#</th>
                                <th>Translation Name</th>
                                <th>Level</th>
                                <th>Apply Date</th>
                                <th>Status</th>
                                <th>Choose</th>

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
                                        <td >
                                            {/* <Switch defaultValue={false} /> */}
                                            <Button>Applied</Button>

                                        </td>
                                        <td>
                                            <Button color="info" className="btn-right" style={
                                                {

                                                    fontSize: "10px",

                                                }
                                            }>

                                                Choose
                                            </Button>
                                        </td>

                                    </tr>);
                                })
                            }


                        </tbody>
                    </Table>

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

                <CardTitle id="card2" tag="h4" >Feedback : </CardTitle>
                <CardActions disableSpacing>
                    <Col md={1}>
                        <Button onClick={onClickEdit} className="btn-info" color="primary" style={
                            {

                                fontSize: "10px",

                            }
                        }>
                            Edit
                        </Button>
                    </Col>
                    <Col md={1}>
                        <Button onClick={onClickDelete} className="btn-right" color="primary" style={
                            {
                                backgroundColor: "red",
                                fontSize: "10px",

                            }
                        }>
                            
                            Delete
                        </Button>
                    </Col>
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

                </CardActions>
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
                                <CardTitle style={{
                                    marginLeft: "",
                                    color: "#ec00f9",
                                }}>
                                    <StarRateIcon></StarRateIcon>
                                    <StarRateIcon></StarRateIcon>
                                    <StarRateIcon></StarRateIcon>
                                    <StarRateIcon></StarRateIcon>
                                    <StarRateIcon></StarRateIcon>
                                </CardTitle>
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







            </div>


        </>
    );
}

export default CustomerRecruitmentDetail;
