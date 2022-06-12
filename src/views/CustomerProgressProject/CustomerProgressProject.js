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
function CustomerProgressProject() {
    let history = useHistory();
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
    const onClick = () => {
        history.push("/admin/admin-projec/admin-project-details")
    };
    return (
        <>
            <PanelHeader
                size="sm" />
            <div className="content">
                <Row>

                    <Col lg={12} md={12} xs={12}>
                        <Card>



                            <CardBody>
                                <Button color="info" >+ Create project</Button>
                                <CardTitle tag="h4" >Progress</CardTitle>


                                <Nav pills className="nav-pills-primary">
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

                                    <ExpandCircleDownIcon sx={{ fontSize: 40 }}></ExpandCircleDownIcon>
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
                                                    className="react-select primary"
                                                    classNamePrefix="react-select"
                                                    placeholder="Single Select"
                                                    name="singleSelect"
                                                    value={singleSelect}
                                                    options={selectOptions}
                                                    onChange={(value) => setSingleSelect(value)}
                                                />
                                            </Col>
                                            <Col xs={12} md={3} size="sm">
                                                Number of Projects : 5
                                            </Col>
                                            <Col xs={12} md={3} size="sm">

                                            </Col>
                                            <Col xs={12} md={3} size="sm">

                                            </Col>
                                        </Row>

                                        <Card>
                                            <CardHeader>
                                                <CardTitle tag="h4" >Project Name</CardTitle>
                                            </CardHeader>
                                            <Row>
                                                <Col xs={12} md={6}>

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
                                                <Col xs={12} md={6}>
                                                    <CardHeader>
                                                        <CardTitle className="text-primary" >Date : 06/08/2022 12:00 AM</CardTitle>
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
                                                    <CardBody>

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
                                            <CardActions disableSpacing>
                                                <Col md={10}>

                                                </Col>
                                                <Col md={1}>
                                                    <Button color="primary" className="btn-info" style={
                                                        {

                                                            fontSize: "10px",

                                                        }
                                                    }>
                                                        Edit
                                                    </Button>
                                                </Col>
                                                <Col md={1}>
                                                    <Button color="primary" className="btn-right" style={
                                                        {

                                                            fontSize: "10px",

                                                        }
                                                    }>
                                                        Postpose
                                                    </Button>
                                                </Col>
                                            </CardActions>
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
                                                        <th>Article Name</th>
                                                        <th>Applicants</th>
                                                        <th>Deadline</th>
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

                                            </Col>
                                            <Col xs={12} md={3} size="sm">

                                            </Col>
                                            <Col xs={12} md={3} size="sm">

                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col xs={12} md={4}>

                                                <Card>
                                                    <CardHeader>
                                                        <CardTitle tag="h4" >Project Name</CardTitle>
                                                    </CardHeader>
                                                    <CardHeader>
                                                        <CardTitle className="text-primary" >Deadline : 06/08/2022 12:00 AM</CardTitle>
                                                    </CardHeader>

                                                    <CardBody>

                                                        <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                            <img alt="" src="https://ids.si.edu/ids/deliveryService?max_w=210&amp;id=AAA-AAA_takatosh_3270221" width="100%">
                                                            </img>
                                                        </div>
                                                        <CardHeader>
                                                            <CardTitle tag="h4">Progress</CardTitle>
                                                        </CardHeader>
                                                        <ButtonToolbar>
                                                            <ButtonGroup>
                                                                <Button className="btn-round" color="success" style={
                                                                    {

                                                                        fontSize: "10px",

                                                                    }
                                                                }>
                                                                    Feedback
                                                                </Button>

                                                            </ButtonGroup>
                                                        </ButtonToolbar>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col xs={12} md={4}>
                                                <Card>
                                                    <CardHeader>
                                                        <CardTitle tag="h4" >Project Name</CardTitle>
                                                    </CardHeader>
                                                    <CardHeader>
                                                        <CardTitle className="text-primary" >Deadline : 06/08/2022 12:00 AM</CardTitle>
                                                    </CardHeader>

                                                    <CardBody>

                                                        <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                            <img alt="" src="https://ids.si.edu/ids/deliveryService?max_w=210&amp;id=AAA-AAA_takatosh_3270221" width="100%">
                                                            </img>
                                                        </div>
                                                        <CardHeader>
                                                            <CardTitle tag="h4">Progress</CardTitle>
                                                        </CardHeader>
                                                        <ButtonToolbar>
                                                            <ButtonGroup>
                                                                <Button className="btn-round" color="success" style={
                                                                    {

                                                                        fontSize: "10px",

                                                                    }
                                                                }>
                                                                    Feedback
                                                                </Button>
                                                            </ButtonGroup>
                                                        </ButtonToolbar>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col xs={12} md={4}>
                                                <Card>
                                                    <CardHeader>
                                                        <CardTitle tag="h4" >Project Name</CardTitle>
                                                    </CardHeader>
                                                    <CardHeader>
                                                        <CardTitle className="text-primary" >Deadline : 06/08/2022 12:00 AM</CardTitle>
                                                    </CardHeader>

                                                    <CardBody>

                                                        <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                            <img alt="" src="https://ids.si.edu/ids/deliveryService?max_w=210&amp;id=AAA-AAA_takatosh_3270221" width="100%">
                                                            </img>
                                                        </div>
                                                        <CardHeader>
                                                            <CardTitle tag="h4">Progress</CardTitle>
                                                        </CardHeader>
                                                        <ButtonToolbar>
                                                            <ButtonGroup>
                                                                <Button className="btn-round" color="success" style={
                                                                    {

                                                                        fontSize: "10px",

                                                                    }
                                                                }>
                                                                    Feedback
                                                                </Button>
                                                            </ButtonGroup>
                                                        </ButtonToolbar>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        </Row>
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

export default CustomerProgressProject;
