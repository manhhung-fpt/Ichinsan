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
/*eslint-disable*/
import React from "react";
// react component used to create a calendar with events on it
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
// dependency plugin for react-big-calendar
import moment from "moment";
// react component used to create alerts
import SweetAlert from "react-bootstrap-sweetalert";

// reactstrap components
import { Card, CardBody, Row, Col } from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import { events } from "variables/general.js";

const localizer = momentLocalizer(moment);

function Calendar() {
  const [eventsState, setEventsState] = React.useState(events);
  const [alert, setAlert] = React.useState(null);
  const selectedEvent = (event) => {
    window.alert(event.title);
  };
  const addNewEventAlert = (slotInfo) => {
    setAlert(
      <SweetAlert
        input
        showCancel
        style={{ display: "block", marginTop: "-100px" }}
        title="Input something"
        onConfirm={(e) => addNewEvent(e, slotInfo)}
        onCancel={() => hideAlert()}
        confirmBtnBsStyle="info"
        cancelBtnBsStyle="danger"
      />
    );
  };
  const addNewEvent = (e, slotInfo) => {
    var newEvents = eventsState;
    newEvents.push({
      title: e,
      start: slotInfo.start,
      end: slotInfo.end,
    });
    setAlert(null);
    setEventsState(newEvents);
  };
  const hideAlert = () => {
    setAlert(null);
  };
  const eventColors = (event, start, end, isSelected) => {
    var backgroundColor = "event-";
    event.color
      ? (backgroundColor = backgroundColor + event.color)
      : (backgroundColor = backgroundColor + "default");
    return {
      className: backgroundColor,
    };
  };
  return (
    <>
      <PanelHeader
        content={
          <div className="header text-center">
            <h2 className="title">React Big Calendar</h2>
            <p className="category">
              A beautiful react component made by{" "}
              <a href="https://github.com/intljusticemission" target="_blank">
                International Justice Mission
              </a>
              . Please checkout their{" "}
              <a
                href="https://github.com/intljusticemission/react-big-calendar"
                target="_blank"
              >
                full documentation.
              </a>
            </p>
          </div>
        }
      />
      <div className="content">
        {alert}
        <Row>
          <Col xs={12} md={10} className="ml-auto mr-auto">
            <Card className="card-calendar">
              <CardBody>
                <BigCalendar
                  selectable
                  localizer={localizer}
                  events={eventsState}
                  defaultView="month"
                  scrollToTime={new Date(1970, 1, 1, 6)}
                  defaultDate={new Date()}
                  onSelectEvent={(event) => selectedEvent(event)}
                  onSelectSlot={(slotInfo) => addNewEventAlert(slotInfo)}
                  eventPropGetter={eventColors}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Calendar;
