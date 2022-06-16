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

import {
    dashboardPanelChart,
    dashboardActiveUsersChart,
    dashboardSummerChart,
    dashboardActiveCountriesCard,
} from "variables/charts.js";
import Select from "react-select";
import jacket from "assets/img/saint-laurent.jpg";
import shirt from "assets/img/balmain.jpg";
import swim from "assets/img/prada.jpg";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { table_data } from "variables/general.js";
var selectOptions = [
    { value: "one", label: "One" },
    { value: "two", label: "Two" },
    { value: "three", label: "Three" },
    { value: "four", label: "Four" },
    { value: "five", label: "Five" },
    { value: "six", label: "Six" },
];
function CustomerProgressArticle() {

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
        history.push("/admin/customer-progress-project")
    };
    const onClickFeedback = () => {
        history.push("/admin/customer-create=feedback")
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
                                    <span className="btn-label">
                                        <i className="now-ui-icons arrows-1_minimal-left" />
                                    </span>
                                    Back
                                </Button>
                            </CardHeader>


                            <CardBody>

                                <CardTitle tag="h4" >Article Tittle</CardTitle>

                                <Button color="info" style={
                                    {

                                        fontSize: "10px",

                                    }
                                }>
                                    Edit</Button>

                                <Button color="primary" style={
                                    {

                                        fontSize: "10px",

                                    }
                                }>

                                    Postpose
                                </Button>



                                <Nav pills className="nav-pills-primary">
                                    <NavItem>
                                        <NavLink
                                            className={hTabs === "ht1" ? "active" : ""}
                                            onClick={() => sethTabs("ht1")}

                                        >
                                            Details
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
                                            Translation
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={hTabs === "ht4" ? "active" : ""}
                                            onClick={() => sethTabs("ht4")}
                                        >
                                            Feedbacks
                                        </NavLink>
                                    </NavItem>


                                </Nav>




                                <TabContent activeTab={hTabs} className="tab-space">

                                    <TabPane tabId="ht1">


                                        <Card>

                                            <CardBody>
                                                <Row>
                                                    <Col xs={12} md={12}>



                                                        <CardHeader>
                                                            <CardTitle tag="h4" >Article Name</CardTitle>
                                                        </CardHeader>

                                                        <Button onClick={onClick} color="primary" className="btn-round" style={
                                                            {

                                                                fontSize: "10px",
                                                                marginLeft: "20px",

                                                            }
                                                        }>
                                                            <i className="now-ui-icons users_single-02" /> Vo Khac Trieu
                                                        </Button>


                                                        <Row>
                                                            <Col xs={12} md={12}>

                                                                <ButtonToolbar>
                                                                    <ButtonGroup>
                                                                        <Button className="btn-round" color="success" style={
                                                                            {
                                                                                marginLeft: "20px",
                                                                                fontSize: "10px",

                                                                            }
                                                                        }>
                                                                            Complete
                                                                        </Button>

                                                                    </ButtonGroup>
                                                                </ButtonToolbar>
                                                            </Col>
                                                            <Col xs={12} md={12}>
                                                                <CardHeader>
                                                                    <CardTitle className="text-primary" >Created Date : 06/08/2022 12:00 AM</CardTitle>
                                                                </CardHeader>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col xs={12} md={12}>

                                                                <CardHeader>
                                                                    <CardTitle className="text-primary" >Language From : </CardTitle>
                                                                </CardHeader>
                                                            </Col>
                                                            <Col xs={12} md={12}>
                                                                <CardHeader>
                                                                    <CardTitle className="text-primary" >Language To : </CardTitle>
                                                                </CardHeader>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col xs={12} md={12}>
                                                                <CardHeader>
                                                                    <CardTitle >Category :</CardTitle>
                                                                </CardHeader>
                                                                <CardBody>
                                                                    <div className="btns-mr-5">
                                                                        <Button>Default</Button>
                                                                        <Button color="primary">Category 1</Button>
                                                                        <Button color="danger">Category 2</Button>

                                                                        <Button color="success">Category 3</Button>
                                                                        <Button color="warning">Category 4</Button>
                                                                        <Button color="info">+ More</Button>
                                                                    </div>
                                                                </CardBody>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col xs={12} md={12}>
                                                                <CardHeader>
                                                                    <CardTitle >Translators : 03/10</CardTitle>
                                                                </CardHeader>

                                                            </Col>
                                                        </Row>








                                                        <Row>
                                                            <Col xs={12} md={12}>
                                                                <CardHeader>
                                                                    <CardTitle >Summary</CardTitle>
                                                                </CardHeader>
                                                                <CardBody>
                                                                    <TabContent activeTab={hTabs} className="tab-space">
                                                                        <TabPane tabId="ht1">
                                                                            <Card sx={{ maxWidth: 1500, borderStyle: 'groove', borderRadius: 8 }}>

                                                                                <CardContent>
                                                                                    <Typography variant="body2" color="text.secondary">
                                                                                        This impressive paella is a perfect party dish and a fun meal to cook
                                                                                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                                                                                        if you like.
                                                                                    </Typography>
                                                                                </CardContent>
                                                                                <CardActions disableSpacing>
                                                                                    <Col md={11}>

                                                                                    </Col>
                                                                                    <Col md={1}>

                                                                                    </Col>
                                                                                </CardActions>
                                                                            </Card>
                                                                        </TabPane>
                                                                    </TabContent>
                                                                </CardBody>
                                                            </Col>
                                                        </Row>

                                                    </Col>
                                                </Row>
                                            </CardBody>


                                        </Card>
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
                                    </TabPane>
                                    <TabPane tabId="ht3">




                                        <Row>
                                            <Col xs={12} md={12}>

                                                <Card>
                                                    <CardBody>

                                                        <Row>
                                                            <Col xs={12} md={2} size="sm"  >
                                                                Status
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
                                                                <i className="now-ui-icons arrows-1_cloud-download-93" />
                                                            </Col>
                                                        </Row>

                                                    </CardBody>
                                                    <CardBody>
                                                        <Row>
                                                            <Col xs={12} md={2} size="sm"  >
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
                                                                <i className="now-ui-icons arrows-1_cloud-download-93" />
                                                            </Col>
                                                        </Row>


                                                    </CardBody>

                                                    <CardBody>

                                                        <Row>
                                                            <Col xs={12} md={2} size="sm"  >
                                                                Translator
                                                            </Col>
                                                            <Col xs={12} md={5} size="sm"  >
                                                                Vo Khac Trieu
                                                            </Col>
                                                            <Col xs={12} md={5} size="sm"  >
                                                                <i className="now-ui-icons ui-1_email-85" />
                                                            </Col>
                                                        </Row>

                                                    </CardBody>
                                                    <CardBody>

                                                        <Row>
                                                            <Col xs={12} md={2} size="sm"  >
                                                                Auditor
                                                            </Col>
                                                            <Col xs={12} md={5} size="sm"  >
                                                                Tran Manh Hung
                                                            </Col>
                                                            <Col xs={12} md={5} size="sm"  >
                                                                <i className="now-ui-icons ui-1_email-85" />

                                                            </Col>
                                                        </Row>

                                                    </CardBody>

                                                </Card>
                                            </Col>

                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="ht4">
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
                                                <Button onClick={onClickFeedback} className="btn-info" color="default" style={
                                                    {

                                                        fontSize: "10px",

                                                    }
                                                }>
                                                    Add Feedback
                                                </Button>
                                            </Col>
                                        </Row>
                                        <Card>

                                            <CardBody>
                                                <Row>
                                                    <Col xs={12} md={12}>



                                                        <CardHeader>
                                                            <CardTitle tag="h4" >Feedbacks</CardTitle>
                                                            <StarRateIcon></StarRateIcon>
                                                            <StarRateIcon></StarRateIcon>
                                                            <StarRateIcon></StarRateIcon>
                                                            <StarRateIcon></StarRateIcon>
                                                        </CardHeader>

                                                        <Button onClick={onClick} color="primary" className="btn-round" style={
                                                            {

                                                                fontSize: "10px",
                                                                marginLeft: "20px",

                                                            }
                                                        }>
                                                            <i className="now-ui-icons users_single-02" /> Tran Manh Hung
                                                        </Button>


                                                        <Row>
                                                            <Col xs={12} md={12}>


                                                            </Col>
                                                            <Col xs={12} md={12}>
                                                                <CardHeader>
                                                                    <CardTitle className="text-primary" >Created Date : 06/08/2022 12:00 AM</CardTitle>
                                                                </CardHeader>
                                                            </Col>
                                                        </Row>


                                                        <Row>
                                                            <Col xs={12} md={12}>
                                                                <CardHeader>
                                                                    <CardTitle >Category :</CardTitle>
                                                                </CardHeader>
                                                                <CardBody>
                                                                    <div className="btns-mr-5">
                                                                        <Button>Default</Button>
                                                                        <Button color="primary">Category 1</Button>
                                                                        <Button color="danger">Category 2</Button>

                                                                        <Button color="success">Category 3</Button>
                                                                        <Button color="warning">Category 4</Button>
                                                                        <Button color="info">+ More</Button>
                                                                    </div>
                                                                </CardBody>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col xs={12} md={12}>
                                                                <CardHeader>
                                                                    <CardTitle >Summary</CardTitle>
                                                                </CardHeader>
                                                                <CardBody>
                                                                    <TabContent activeTab={hTabs} className="tab-space">
                                                                        <TabPane tabId="ht4">
                                                                            <Card sx={{ maxWidth: 1500, borderStyle: 'groove', borderRadius: 8 }}>

                                                                                <CardContent>
                                                                                    <Typography variant="body2" color="text.secondary">
                                                                                        This impressive paella is a perfect party dish and a fun meal to cook
                                                                                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                                                                                        if you like.
                                                                                    </Typography>
                                                                                </CardContent>
                                                                                <CardActions disableSpacing>
                                                                                    <Col md={11}>

                                                                                    </Col>
                                                                                    <Col md={1}>

                                                                                    </Col>
                                                                                </CardActions>
                                                                            </Card>
                                                                        </TabPane>
                                                                    </TabContent>
                                                                </CardBody>
                                                            </Col>
                                                        </Row>

                                                    </Col>
                                                </Row>
                                            </CardBody>


                                        </Card>
                                    </TabPane>
                                </TabContent>
                            </CardBody>
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
                        </Card>
                    </Col>
                </Row>

            </div>
        </>
    );
}

export default CustomerProgressArticle;
