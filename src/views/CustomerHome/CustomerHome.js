
import React from "react";


// Core modules imports are same as usual
// import { Navigation, Pagination } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/scrollbar/scrollbar.scss'; // Scrollbar module
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module
import 'swiper/modules/effect-fade/effect-fade.scss'; // Pagination module
import { EffectFade } from "swiper";

import "./CustomerHome.css"

import CategoryIcon from '@mui/icons-material/Category';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';
import SignalWifiStatusbar4BarIcon from '@mui/icons-material/SignalWifiStatusbar4Bar';

// reactstrap components
import {
  Card,
  Pagination,
  PaginationItem,
  PaginationLink,
  TabContent,
  TabPane,
  CardHeader,
  CardTitle,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,


} from "reactstrap";
import { useHistory } from "react-router-dom";

import Select from "react-select";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import './Card.css';

var rolesOptions = [
  { value: "Option1", label: "Option1" },
  { value: "Option2", label: "Option2" },
  { value: "Option3", label: "Option3" },
];
function CustomerHome() {

  const [hTabs, sethTabs] = React.useState("ht1");
  let history = useHistory();
  const [singleRoleSelect, setSingleRoleSelect] = React.useState(null);
  const selectFilterHandler = (e) => {
    alert(e.value)
    setSingleRoleSelect(() => e.value);
  }
  const onClickView = () => {

    history.push("/admin/customer-arti-detail")
  }
  const onClick = () => {

    history.push("/admin/customer-article")
  }


  return (
    <>


      <PanelHeader
        size="sm"
      />

      <div className="content">
        <Card>

          <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={false}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade]}
            className="mySwiper"
            style={
              {
                height: "300px",
                width: "50%",
              }
            }
          >
            <SwiperSlide>
              <img src="https://as1.ftcdn.net/v2/jpg/04/72/19/88/1000_F_472198810_bvrfLv3QhdQKQYjJXWTCCVFmvBARuoJy.jpg"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://as1.ftcdn.net/v2/jpg/04/72/19/88/1000_F_472198810_bvrfLv3QhdQKQYjJXWTCCVFmvBARuoJy.jpg"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://as1.ftcdn.net/v2/jpg/04/72/19/88/1000_F_472198810_bvrfLv3QhdQKQYjJXWTCCVFmvBARuoJy.jpg"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://as1.ftcdn.net/v2/jpg/04/72/19/88/1000_F_472198810_bvrfLv3QhdQKQYjJXWTCCVFmvBARuoJy.jpg"></img>
            </SwiperSlide>
          </Swiper>
        </Card>




        <CardTitle tag="h4">Progress
          <span class="fi fi-AU"></span> <span class="fi fi-gr fis"></span>
        </CardTitle>

        <Nav pills className="nav-pills-info"

        >
          <NavItem>

            <NavLink
              className={hTabs === "ht1" ? "active" : ""}
              onClick={() => sethTabs("ht1")}

            >
              Pending

            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={hTabs === "ht2" ? "active" : ""}
              onClick={() => sethTabs("ht2")}
            >
              In-Progress
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={hTabs === "ht3" ? "active" : ""}
              onClick={() => sethTabs("ht3")}
            >
              Done
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={hTabs === "ht4" ? "active" : ""}
              onClick={() => sethTabs("ht4")}
            >
              Postpose
            </NavLink>
          </NavItem>

        </Nav>
        <Row style={{
          marginTop: "20px"
        }}>
          <Col xs={12} md={1} size="sm"  >
            Sort :
          </Col>
          <Col Col xs={12} md={2} size="sm" >
            <Select
              className="react-select primary"
              classNamePrefix="react-select"
              placeholder="Select a role"
              name="singleSelect"
              value={singleRoleSelect}
              options={rolesOptions}
              onChange={selectFilterHandler}
            />
          </Col>
          <Col Col xs={12} md={9} size="sm" >
          </Col>
        </Row>
        <TabContent activeTab={hTabs} className="tab-space">
          <TabPane tabId="ht1">
            <Row style={{
              marginTop: "40px",
            }}>
              <Col xs={12} md={3}>
                <a classname="card" href="" onClick={onClickView}>
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
                        color: "orange",
                      }}>
                        <SignalWifiStatusbar4BarIcon></SignalWifiStatusbar4BarIcon>
                        Pending</CardTitle>
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
                    </CardHeader>

                    <div class="go-corner" href="#">
                      <div class="go-arrow">
                        →
                      </div>
                    </div>

                  </Card>
                </a>
              </Col>
              <Col xs={12} md={3}>
                <a classname="card" href="" onClick={onClickView}>
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
                        color: "orange",
                      }}>
                        <SignalWifiStatusbar4BarIcon></SignalWifiStatusbar4BarIcon>
                        Pending</CardTitle>
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
                    </CardHeader>

                    <div class="go-corner" href="#">
                      <div class="go-arrow">
                        →
                      </div>
                    </div>

                  </Card>
                </a>
              </Col>
              <Col xs={12} md={3}>
                <a classname="card" href="" onClick={onClickView}>
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
                        color: "orange",
                      }}>
                        <SignalWifiStatusbar4BarIcon></SignalWifiStatusbar4BarIcon>
                        Pending</CardTitle>
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
                    </CardHeader>

                    <div class="go-corner" href="#">
                      <div class="go-arrow">
                        →
                      </div>
                    </div>

                  </Card>
                </a>
              </Col>
              <Col xs={12} md={3}>
                <a classname="card" href="" onClick={onClickView}>
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
                        color: "orange",
                      }}>
                        <SignalWifiStatusbar4BarIcon></SignalWifiStatusbar4BarIcon>
                        Pending</CardTitle>
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
                    </CardHeader>

                    <div class="go-corner" href="#">
                      <div class="go-arrow">
                        →
                      </div>
                    </div>

                  </Card>
                </a>
              </Col>
            </Row>




            <Row style={{
              marginTop: "40px",
            }}>
              <Col xs={12} md={3}>
                <a classname="card" href="" onClick={onClickView}>
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
                        color: "orange",
                      }}>
                        <SignalWifiStatusbar4BarIcon></SignalWifiStatusbar4BarIcon>
                        Pending</CardTitle>
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
                    </CardHeader>

                    <div class="go-corner" href="#">
                      <div class="go-arrow">
                        →
                      </div>
                    </div>

                  </Card>
                </a>
              </Col>
              <Col xs={12} md={3}>
                <a classname="card" href="" onClick={onClickView}>
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
                        color: "orange",
                      }}>
                        <SignalWifiStatusbar4BarIcon></SignalWifiStatusbar4BarIcon>
                        Pending</CardTitle>
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
                    </CardHeader>

                    <div class="go-corner" href="#">
                      <div class="go-arrow">
                        →
                      </div>
                    </div>

                  </Card>
                </a>
              </Col>
              <Col xs={12} md={3}>
                <a classname="card" href="" onClick={onClickView}>
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
                        color: "orange",
                      }}>
                        <SignalWifiStatusbar4BarIcon></SignalWifiStatusbar4BarIcon>
                        Pending</CardTitle>
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
                    </CardHeader>

                    <div class="go-corner" href="#">
                      <div class="go-arrow">
                        →
                      </div>
                    </div>

                  </Card>
                </a>
              </Col>
              <Col xs={12} md={3}>
                <a classname="card" href="" onClick={onClickView}>
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
                        color: "orange",
                      }}>
                        <SignalWifiStatusbar4BarIcon></SignalWifiStatusbar4BarIcon>
                        Pending</CardTitle>
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
                    </CardHeader>

                    <div class="go-corner" href="#">
                      <div class="go-arrow">
                        →
                      </div>
                    </div>

                  </Card>
                </a>
              </Col>

            </Row>
          </TabPane>
          <TabPane tabId="ht2">
            <Row style={{
              marginTop: "40px",
            }}>
              <Col xs={12} md={3}>
                <a classname="card" href="" onClick={onClickView}>
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
                        color: "blue",
                      }}>
                        <SignalWifiStatusbar4BarIcon></SignalWifiStatusbar4BarIcon>
                        In-process</CardTitle>
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
                    </CardHeader>

                    <div class="go-corner" href="#">
                      <div class="go-arrow">
                        →
                      </div>
                    </div>

                  </Card>
                </a>
              </Col>
              <Col xs={12} md={3}>
                <a classname="card" href="" onClick={onClickView}>
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
                        color: "blue",
                      }}>
                        <SignalWifiStatusbar4BarIcon></SignalWifiStatusbar4BarIcon>
                        In-process</CardTitle>
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
                    </CardHeader>

                    <div class="go-corner" href="#">
                      <div class="go-arrow">
                        →
                      </div>
                    </div>

                  </Card>
                </a>
              </Col>
              <Col xs={12} md={3}>
                <a classname="card" href="" onClick={onClickView}>
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
                        color: "blue",
                      }}>
                        <SignalWifiStatusbar4BarIcon></SignalWifiStatusbar4BarIcon>
                        In-process</CardTitle>
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
                    </CardHeader>

                    <div class="go-corner" href="#">
                      <div class="go-arrow">
                        →
                      </div>
                    </div>

                  </Card>
                </a>
              </Col>
              <Col xs={12} md={3}>
                <a classname="card" href="" onClick={onClickView}>
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
                        color: "blue",
                      }}>
                        <SignalWifiStatusbar4BarIcon></SignalWifiStatusbar4BarIcon>
                        In-process</CardTitle>
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
                    </CardHeader>

                    <div class="go-corner" href="#">
                      <div class="go-arrow">
                        →
                      </div>
                    </div>

                  </Card>
                </a>
              </Col>
            </Row>





          </TabPane>
          <TabPane tabId="ht3">
            <Row style={{
              marginTop: "40px",
            }}>
              <Col xs={12} md={3}>
                <a classname="card" href="" onClick={onClickView}>
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
                        color: "green",
                      }}>
                        <SignalWifiStatusbar4BarIcon></SignalWifiStatusbar4BarIcon>
                        Done</CardTitle>
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
                    </CardHeader>

                    <div class="go-corner" href="#">
                      <div class="go-arrow">
                        →
                      </div>
                    </div>

                  </Card>
                </a>
              </Col>
              <Col xs={12} md={3}>
                <a classname="card" href="" onClick={onClickView}>
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
                        color: "green",
                      }}>
                        <SignalWifiStatusbar4BarIcon></SignalWifiStatusbar4BarIcon>
                        Done</CardTitle>
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
                    </CardHeader>

                    <div class="go-corner" href="#">
                      <div class="go-arrow">
                        →
                      </div>
                    </div>

                  </Card>
                </a>
              </Col>
              <Col xs={12} md={3}>

              </Col>
              <Col xs={12} md={3}>

              </Col>
            </Row>





          </TabPane>
          <TabPane tabId="ht4">
            <Row style={{
              marginTop: "40px",
            }}>
              <Col xs={12} md={3}>
                <a classname="card" href="" onClick={onClickView}>
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
                        <SignalWifiStatusbar4BarIcon></SignalWifiStatusbar4BarIcon>
                        Postponed</CardTitle>
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
                    </CardHeader>

                    <div class="go-corner" href="#">
                      <div class="go-arrow">
                        →
                      </div>
                    </div>

                  </Card>
                </a>
              </Col>
              <Col xs={12} md={3}>
                <a classname="card" href="" onClick={onClickView}>
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
                        <SignalWifiStatusbar4BarIcon></SignalWifiStatusbar4BarIcon>
                        Postponed</CardTitle>
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
                    </CardHeader>

                    <div class="go-corner" href="#">
                      <div class="go-arrow">
                        →
                      </div>
                    </div>

                  </Card>
                </a>
              </Col>
              <Col xs={12} md={3}>
                <a classname="card" href="" onClick={onClickView}>
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
                        <SignalWifiStatusbar4BarIcon></SignalWifiStatusbar4BarIcon>
                        Postponed</CardTitle>
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
                    </CardHeader>

                    <div class="go-corner" href="#">
                      <div class="go-arrow">
                        →
                      </div>
                    </div>

                  </Card>
                </a>
              </Col>
              <Col xs={12} md={3}>
                <a classname="card" href="" onClick={onClickView}>
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
                        <SignalWifiStatusbar4BarIcon></SignalWifiStatusbar4BarIcon>
                        Postponed</CardTitle>
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
                    </CardHeader>

                    <div class="go-corner" href="#">
                      <div class="go-arrow">
                        →
                      </div>
                    </div>

                  </Card>
                </a>
              </Col>
            </Row>




            <Row style={{
              marginTop: "40px",
            }}>
              <Col xs={12} md={3}>
                <a classname="card" href="" onClick={onClickView}>
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
                        <SignalWifiStatusbar4BarIcon></SignalWifiStatusbar4BarIcon>
                        Postponed</CardTitle>
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
                    </CardHeader>

                    <div class="go-corner" href="#">
                      <div class="go-arrow">
                        →
                      </div>
                    </div>

                  </Card>
                </a>
              </Col>
              <Col xs={12} md={3}>
                <a classname="card" href="" onClick={onClickView}>
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
                        <SignalWifiStatusbar4BarIcon></SignalWifiStatusbar4BarIcon>
                        Postponed</CardTitle>
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
                    </CardHeader>

                    <div class="go-corner" href="#">
                      <div class="go-arrow">
                        →
                      </div>
                    </div>

                  </Card>
                </a>
              </Col>
              <Col xs={12} md={3}>
                <a classname="card" href="" onClick={onClickView}>
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
                        <SignalWifiStatusbar4BarIcon></SignalWifiStatusbar4BarIcon>
                        Postponed</CardTitle>
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
                    </CardHeader>

                    <div class="go-corner" href="#">
                      <div class="go-arrow">
                        →
                      </div>
                    </div>

                  </Card>
                </a>
              </Col>
              <Col xs={12} md={3}>
                <a classname="card" href="" onClick={onClickView}>
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
                        <SignalWifiStatusbar4BarIcon></SignalWifiStatusbar4BarIcon>
                        Postponed</CardTitle>
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
                    </CardHeader>

                    <div class="go-corner" href="#">
                      <div class="go-arrow">
                        →
                      </div>
                    </div>

                  </Card>
                </a>
              </Col>

            </Row>
          </TabPane>
        </TabContent>


      </div>
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

    </>
  );
}


export default CustomerHome;