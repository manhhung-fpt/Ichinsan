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

// reactstrap components
import {
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
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import {
  dashboardPanelChart,
  dashboardActiveUsersChart,
  dashboardSummerChart,
  dashboardActiveCountriesCard,
} from "variables/charts.js";

import jacket from "assets/img/saint-laurent.jpg";
import shirt from "assets/img/balmain.jpg";
import swim from "assets/img/prada.jpg";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
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

function Home() {
  const [openedCollapses, setOpenCollapses] = React.useState(["collapseOne"]);
  const [hTabs, sethTabs] = React.useState("ht1");
  const [vTabs, setvTabs] = React.useState("vt1");
  const [vTabsIcons, setvTabsIcons] = React.useState("vti1");
  const [pageSubcategories, setpageSubcategories] = React.useState("ps1");


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
  return (
    <>
      <PanelHeader
        size="sm" />
      <div className="content">
        <Row>
          <Col xs={12} md={12}>
            <Card className="card-stats card-raised">
              <CardBody>
                <img src="https://as1.ftcdn.net/v2/jpg/04/72/19/88/1000_F_472198810_bvrfLv3QhdQKQYjJXWTCCVFmvBARuoJy.jpg"></img>
              </CardBody>
            </Card>
          </Col>
          <Col lg={12} md={12} xs={12}>
            <Card>
              <CardBody>
                <Nav pills className="nav-pills-primary">
                  <NavItem>
                    <NavLink
                      className={hTabs === "ht1" ? "active" : ""}
                      onClick={() => sethTabs("ht1")}
                      
                    >
                      User Guides
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={hTabs === "ht2" ? "active" : ""}
                      onClick={() => sethTabs("ht2")}
                    >
                      Maintenance Manuals
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={hTabs === "ht3" ? "active" : ""}
                      onClick={() => sethTabs("ht3")}
                    >
                      Instruction Manuals
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={hTabs === "ht4" ? "active" : ""}
                      onClick={() => sethTabs("ht4")}
                    >
                      Handbooks
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={hTabs === "ht5" ? "active" : ""}
                      onClick={() => sethTabs("ht5")}
                    >
                      eLearning & Courses
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={hTabs === "ht6" ? "active" : ""}
                      onClick={() => sethTabs("ht6")}
                    >
                      API Documentation
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={hTabs === "ht7" ? "active" : ""}
                      onClick={() => sethTabs("ht7")}
                    >
                      Webpages
                    </NavLink>
                  </NavItem>
                  <ExpandCircleDownIcon sx={{ fontSize: 40 }}></ExpandCircleDownIcon>
                </Nav>
                <TabContent activeTab={hTabs} className="tab-space">
                  <TabPane tabId="ht1">
                    <Card sx={{ maxWidth: 1500, borderStyle: 'groove', borderRadius: 8 }}>
                      <CardHeader
                        avatar={
                          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            R
                          </Avatar>
                        }
                        action={
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="Vietnamese - English"
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          This impressive paella is a perfect party dish and a fun meal to cook
                          together with your guests. Add 1 cup of frozen peas along with the mussels,
                          if you like.
                          Called I Miss the Old Kanye That’s all it was Kanye And I love you like Kanye loves Kanye Famous viewing @ Figueroa and 12th in downtown LA 11:10PM

                          What if Kanye made a song about Kanye Royère doesn't make a Polar bear bed but the Polar bear couch is my favorite piece of furniture we own It wasn’t any Kanyes Set on his goals Kanye
                        </Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                      <Col md={11}>
                        <IconButton aria-label="add to favorites">
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                          <ShareIcon />
                        </IconButton>
                        </Col>
                        <Col md={1}>
                        <Button color="primary" className="btn-round" style={
              {
               
                fontSize: "10px",
               
              }
            }>
                          Apply
                        </Button>
                        </Col>
                      </CardActions>
                    </Card>
                  </TabPane>
                  <TabPane tabId="ht2">
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br />
                    Dramatically maintain clicks-and-mortar solutions without
                    functional solutions.
                  </TabPane>
                  <TabPane tabId="ht3">
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
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

export default Home;
