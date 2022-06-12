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
import Switch from "react-bootstrap-switch";

// Core modules imports are same as usual
import { Navigation, Pagination } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/scrollbar/scrollbar.scss'; // Scrollbar module
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module
import 'swiper/modules/effect-fade/effect-fade.scss'; // Pagination module
import { EffectFade } from "swiper";
import { Keyboard, Scrollbar, Mousewheel } from "swiper";
import "./CustomerHome.css"
import ProgressBar from 'react-bootstrap/ProgressBar';

// reactstrap components
import {
  Table,
  UncontrolledTooltip,
  ButtonGroup,
  FormGroup,
  Label,
  Input,
  Card,
  TabContent,
  TabPane,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button,
  ButtonToolbar,
  Form,
} from "reactstrap";
import { useHistory } from "react-router-dom";

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Select from "react-select";
import Slider from "react-slick";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import SwiperFirst from './SwiperFirst';
import ImageUpload from './../../components/CustomUpload/ImageUpload';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

function CustomerHome() {

  const [hTabs, sethTabs] = React.useState("ht1");
  let history = useHistory();
  const onClickView = () => {

    history.push("/admin/customer-progress-project")
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
            modules={[EffectFade, Navigation]}
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


        <Swiper
          slidesPerView={6}
          spaceBetween={12}
          slidesPerGroup={6}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          style={
            {
              height: "80px",

            }
          }
        >
          <SwiperSlide >
            <Button onClick={onClickView} color="primary" className="btn-round" style={
              {
                // margin: "auto",
                fontSize: "10px",
                marginBottom: "20px",
                marginLeft: "40px",
              }
            }>

              <i className="now-ui-icons users_single-02" /> Maintenance Manuals
            </Button>
          </SwiperSlide>
          <SwiperSlide>
            <Button onClick={onClickView} color="primary" className="btn-round" style={
              {
                // margin: "auto",
                fontSize: "10px",
                marginBottom: "20px",
                marginLeft: "40px",
              }
            }>
              <i className="now-ui-icons users_single-02" /> Maintenance Manuals
            </Button>
          </SwiperSlide>
          <SwiperSlide>
            <Button onClick={onClickView} color="primary" className="btn-round" style={
              {
                // margin: "auto",
                fontSize: "10px",
                marginBottom: "20px",
                marginLeft: "40px",
              }
            }>
              <i className="now-ui-icons users_single-02" /> Maintenance Manuals
            </Button>
          </SwiperSlide>
          <SwiperSlide>
            <Button onClick={onClickView} color="primary" className="btn-round" style={
              {
                // margin: "auto",
                fontSize: "10px",
                marginBottom: "20px",
                marginLeft: "40px",
              }
            }>
              <i className="now-ui-icons users_single-02" /> 	Maintenance Manuals
            </Button>
          </SwiperSlide>
          <SwiperSlide>
            <Button onClick={onClickView} color="primary" className="btn-round" style={
              {
                // margin: "auto",
                fontSize: "10px",
                marginBottom: "20px",
                marginLeft: "40px",
              }
            }>
              <i className="now-ui-icons users_single-02" /> Maintenance Manuals
            </Button>
          </SwiperSlide>
          <SwiperSlide>
            <Button onClick={onClickView} color="primary" className="btn-round" style={
              {
                // margin: "auto",
                fontSize: "10px",
                marginBottom: "20px",
                marginLeft: "40px",
              }
            }>
              <i className="now-ui-icons users_single-02" /> Maintenance Manuals
            </Button>
          </SwiperSlide>
          <SwiperSlide>
            <Button onClick={onClickView} color="primary" className="btn-round" style={
              {
                // margin: "auto",
                fontSize: "10px",
                marginBottom: "20px",
                marginLeft: "40px",
              }
            }>
              <i className="now-ui-icons users_single-02" /> Maintenance Manuals
            </Button>
          </SwiperSlide>
          <SwiperSlide>
            <Button onClick={onClickView} color="primary" className="btn-round" style={
              {
                // margin: "auto",
                fontSize: "10px",
                marginBottom: "20px",
                marginLeft: "40px",
              }
            }>
              <i className="now-ui-icons users_single-02" /> Maintenance Manuals
            </Button>
          </SwiperSlide>
          <SwiperSlide>
            <Button onClick={onClickView} color="primary" className="btn-round" style={
              {
                // margin: "auto",
                fontSize: "10px",
                marginBottom: "20px",
                marginLeft: "40px",
              }
            }>
              <i className="now-ui-icons users_single-02" /> Maintenance Manuals
            </Button>
          </SwiperSlide>
          <SwiperSlide>
            <Button onClick={onClickView} color="primary" className="btn-round" style={
              {
                // margin: "auto",
                fontSize: "10px",
                marginBottom: "20px",
                marginLeft: "40px",
              }
            }>
              <i className="now-ui-icons users_single-02" /> Maintenance Manuals
            </Button>
          </SwiperSlide>
          <SwiperSlide>
            <Button onClick={onClickView} color="primary" className="btn-round" style={
              {
                // margin: "auto",
                fontSize: "10px",
                marginBottom: "20px",
                marginLeft: "40px",
              }
            }>
              <i className="now-ui-icons users_single-02" /> Maintenance Manuals
            </Button>
          </SwiperSlide>
          <SwiperSlide>
            <Button onClick={onClickView} color="primary" className="btn-round" style={
              {
                // margin: "auto",
                fontSize: "10px",
                marginBottom: "20px",
                marginLeft: "40px",
              }
            }>
              <i className="now-ui-icons users_single-02" /> Maintenance Manuals
            </Button>
          </SwiperSlide>

        </Swiper>

        <CardTitle tag="h4">Progress</CardTitle>
        <Row>

          <Col xs={12} md={5} size="sm">


          </Col>
          <Col xs={12} md={5} size="sm">

          </Col>
          <Col xs={12} md={1} size="sm">

          </Col>
          <Col xs={12} md={1} size="sm">
            <Button onClick={onClickView} color="info" style={
              {

                fontSize: "10px",

              }
            }>
              More...
              <span className="btn-label">
                <i className="now-ui-icons arrows-1_minimal-right" />
              </span>

            </Button>

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

                </div>
                <CardHeader>
                  <CardTitle tag="h4">Progress : Pending</CardTitle>
                </CardHeader>
                <ProgressBar>
                  <ProgressBar variant="success" now={35} key={1} />
                  <ProgressBar variant="danger" now={65} key={2} />
                </ProgressBar>
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
                </div>
                <CardHeader>
                  <CardTitle tag="h4">Progress : Pending</CardTitle>
                </CardHeader>
                <ProgressBar>
                  <ProgressBar variant="success" now={35} key={1} />
                  <ProgressBar variant="danger" now={65} key={2} />
                </ProgressBar>
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
                </div>
                <CardHeader>
                  <CardTitle tag="h4">Progress : Pending</CardTitle>
                </CardHeader>
                <ProgressBar>
                  <ProgressBar variant="success" now={35} key={1} />
                  <ProgressBar variant="danger" now={65} key={2} />
                </ProgressBar>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <CardTitle tag="h4">Lastest Project</CardTitle>
        <Row>

          <Col xs={12} md={5} size="sm">


          </Col>
          <Col xs={12} md={5} size="sm">

          </Col>
          <Col xs={12} md={1} size="sm">

          </Col>
          <Col xs={12} md={1} size="sm">
            <Button color="info" style={
              {

                fontSize: "10px",

              }
            }>
              More...
              <span className="btn-label">
                <i className="now-ui-icons arrows-1_minimal-right" />
              </span>

            </Button>

          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>

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

                </Col>
              </Row>
              <CardHeader>
                <CardTitle className="text-primary" >Date : 06/08/2022 12:00 AM</CardTitle>
              </CardHeader>
              <Row>
                <Col xs={12} md={3}>
                  <CardHeader>
                    <CardTitle >Category :</CardTitle>
                  </CardHeader>
                </Col>
                <Col xs={12} md={1}>
                  <CardBody>
                    <div className="btns-mr-5">
                      <Button>Cate1</Button>
                    </div>
                  </CardBody>
                </Col>
                <Col xs={12} md={8}>

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
              <Row>
                <Col xs={12} md={4}>
                </Col>
                <Col xs={12} md={4}>
                  <Button onClick={onClick} color="info" style={
                    {

                      fontSize: "10px",

                    }
                  }>
                    View
                    <span className="btn-label">
                      <i className="now-ui-icons arrows-1_minimal-right" />
                    </span>

                  </Button>
                </Col>
                <Col xs={12} md={4}>

                </Col>

              </Row>
            </Card>
          </Col>
          <Col xs={12} md={6}>
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

                </Col>

              </Row>
              <CardHeader>
                <CardTitle className="text-primary" >Date : 06/08/2022 12:00 AM</CardTitle>
              </CardHeader>
              <Row>
                <Col xs={12} md={3}>
                  <CardHeader>
                    <CardTitle >Category :</CardTitle>
                  </CardHeader>
                </Col>
                <Col xs={12} md={1}>
                  <CardBody>
                    <div className="btns-mr-5">
                      <Button color="success">Cate2</Button>
                    </div>
                  </CardBody>
                </Col>
                <Col xs={12} md={8}>

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
            </Card>
          </Col>

        </Row>
      </div>



    </>
  );
}


export default CustomerHome;