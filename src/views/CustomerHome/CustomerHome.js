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

// reactstrap components
import {
  Table,
  UncontrolledTooltip,
  ButtonGroup,
  FormGroup,
  Label,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button,
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

function CustomerHome() {

  const onClickView = () => {

  }


  return (
    <>
      <PanelHeader
        size="sm" />
      <div className="content">
        <Card>

          <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={false}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
          </Swiper>
        </Card>


        <Swiper
          slidesPerView={5}
          spaceBetween={12}
          slidesPerGroup={5}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          style={
            {
              height: "80px",

            }
          }
        >
          <SwiperSlide style={
            {
              // display: "flex",


            }
          }>
            <Button onClick={onClickView} color="primary" className="btn-round" style={
              {
                // margin: "auto",

                marginBottom: "20px",
                marginLeft: "80px",
              }
            }>
              <i className="now-ui-icons users_single-02" /> View
            </Button>
          </SwiperSlide>
          <SwiperSlide>
            <Button onClick={onClickView} color="primary" className="btn-round" style={
              {
                // margin: "auto",

                marginBottom: "20px",
                marginLeft: "80px",
              }
            }>
              <i className="now-ui-icons users_single-02" /> View
            </Button>
          </SwiperSlide>
          <SwiperSlide>
            <Button onClick={onClickView} color="primary" className="btn-round" style={
              {
                // margin: "auto",

                marginBottom: "20px",
                marginLeft: "80px",
              }
            }>
              <i className="now-ui-icons users_single-02" /> View
            </Button>
          </SwiperSlide>
          <SwiperSlide>
            <Button onClick={onClickView} color="primary" className="btn-round" style={
              {
                // margin: "auto",

                marginBottom: "20px",
                marginLeft: "80px",
              }
            }>
              <i className="now-ui-icons users_single-02" /> View
            </Button>
          </SwiperSlide>
          <SwiperSlide>
            <Button onClick={onClickView} color="primary" className="btn-round" style={
              {
                // margin: "auto",

                marginBottom: "20px",
                marginLeft: "80px",
              }
            }>
              <i className="now-ui-icons users_single-02" /> View
            </Button>
          </SwiperSlide>
          <SwiperSlide>
            <Button onClick={onClickView} color="primary" className="btn-round" style={
              {
                // margin: "auto",

                marginBottom: "20px",
                marginLeft: "80px",
              }
            }>
              <i className="now-ui-icons users_single-02" /> View
            </Button>
          </SwiperSlide>
          <SwiperSlide>
            <Button onClick={onClickView} color="primary" className="btn-round" style={
              {
                // margin: "auto",

                marginBottom: "20px",
                marginLeft: "80px",
              }
            }>
              <i className="now-ui-icons users_single-02" /> View
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
            <Button color="info">
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
                <CardTitle tag="h4">Project Name</CardTitle>
              </CardHeader>
              <CardHeader>
                <CardTitle tag="h4">Deadline</CardTitle>
              </CardHeader>
              <CardHeader>
                <CardTitle tag="h4">Status</CardTitle>
              </CardHeader>
              <CardBody>

              </CardBody>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Project Name</CardTitle>
              </CardHeader>
              <CardHeader>
                <CardTitle tag="h4">Deadline</CardTitle>
              </CardHeader>
              <CardHeader>
                <CardTitle tag="h4">Status</CardTitle>
              </CardHeader>
              <CardBody>

              </CardBody>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Project Name</CardTitle>
              </CardHeader>
              <CardHeader>
                <CardTitle tag="h4">Deadline</CardTitle>
              </CardHeader>
              <CardHeader>
                <CardTitle tag="h4">Status</CardTitle>
              </CardHeader>
              <CardBody>

              </CardBody>
            </Card>
          </Col>
        </Row>

        <CardTitle tag="h4">Lastest transaction</CardTitle>
        <Row>

          <Col xs={12} md={5} size="sm">


          </Col>
          <Col xs={12} md={5} size="sm">

          </Col>
          <Col xs={12} md={1} size="sm">

          </Col>
          <Col xs={12} md={1} size="sm">
            <Button color="info">
              More...
              <span className="btn-label">
                <i className="now-ui-icons arrows-1_minimal-right" />
              </span>

            </Button>

          </Col>
        </Row>
      </div>



    </>
  );
}


export default CustomerHome;