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
// react component used to create sweet alerts
import SweetAlert from "react-bootstrap-sweetalert";

// reactstrap components
import { Card, CardBody, CardText, Row, Col, Button } from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

function SweetAlertPage() {
  const [alert, setAlert] = React.useState(null);
  React.useEffect(() => {
    return function cleanup() {
      var id = window.setTimeout(null, 0);
      while (id--) {
        window.clearTimeout(id);
      }
    };
  }, []);
  const basicAlert = () => {
    setAlert(
      <SweetAlert
        style={{ display: "block", marginTop: "-100px" }}
        title="Here's a message!"
        onConfirm={() => this.hideAlert()}
        onCancel={() => this.hideAlert()}
        confirmBtnBsStyle="info"
      />
    );
  };
  const titleAndTextAlert = () => {
    setAlert(
      <SweetAlert
        style={{ display: "block", marginTop: "-100px" }}
        title="Here's a message!"
        onConfirm={() => this.hideAlert()}
        onCancel={() => this.hideAlert()}
        confirmBtnBsStyle="info"
      >
        It's pretty, isn't it?
      </SweetAlert>
    );
  };
  const successAlert = () => {
    setAlert(
      <SweetAlert
        success
        style={{ display: "block", marginTop: "-100px" }}
        title="Good job!"
        onConfirm={() => this.hideAlert()}
        onCancel={() => this.hideAlert()}
        confirmBtnBsStyle="info"
      >
        You clicked the button!
      </SweetAlert>
    );
  };
  const htmlAlert = () => {
    setAlert(
      <SweetAlert
        style={{ display: "block", marginTop: "-100px" }}
        title="HTML example"
        onConfirm={() => this.hideAlert()}
        onCancel={() => this.hideAlert()}
        confirmBtnBsStyle="info"
      >
        You can use <b>bold</b> text,{" "}
        <a
          href="https://www.creative-tim.com/?ref=nudr-sweetalert-page"
          target="_blank"
        >
          links
        </a>{" "}
        and other HTML tags
      </SweetAlert>
    );
  };
  const warningWithConfirmMessage = () => {
    setAlert(
      <SweetAlert
        warning
        style={{ display: "block", marginTop: "-100px" }}
        title="Are you sure?"
        onConfirm={() => this.successDelete()}
        onCancel={() => this.hideAlert()}
        confirmBtnBsStyle="info"
        cancelBtnBsStyle="danger"
        confirmBtnText="Yes, delete it!"
        cancelBtnText="Cancel"
        showCancel
      >
        You will not be able to recover this imaginary file!
      </SweetAlert>
    );
  };
  const warningWithConfirmAndCancelMessage = () => {
    setAlert(
      <SweetAlert
        warning
        style={{ display: "block", marginTop: "-100px" }}
        title="Are you sure?"
        onConfirm={() => this.successDelete()}
        onCancel={() => this.cancelDetele()}
        confirmBtnBsStyle="info"
        cancelBtnBsStyle="danger"
        confirmBtnText="Yes, delete it!"
        cancelBtnText="Cancel"
        showCancel
      >
        You will not be able to recover this imaginary file!
      </SweetAlert>
    );
  };
  const autoCloseAlert = () => {
    setAlert(
      <SweetAlert
        style={{ display: "block", marginTop: "-100px" }}
        title="Auto close alert!"
        onConfirm={() => this.hideAlert()}
        showConfirm={false}
      >
        I will close in 2 seconds.
      </SweetAlert>
    );
    setTimeout(hideAlert, 2000);
  };
  const inputAlert = () => {
    setAlert(
      <SweetAlert
        input
        showCancel
        style={{ display: "block", marginTop: "-100px" }}
        title="Input something"
        onConfirm={(e) => this.inputConfirmAlert(e)}
        onCancel={() => this.hideAlert()}
        confirmBtnBsStyle="info"
        cancelBtnBsStyle="danger"
      />
    );
  };
  const inputConfirmAlert = (e) => {
    setAlert(
      <SweetAlert
        style={{ display: "block", marginTop: "-100px" }}
        onConfirm={() => this.hideAlert()}
        onCancel={() => this.hideAlert()}
        confirmBtnBsStyle="info"
        title={
          <p>
            You entered: <b>{e}</b>
          </p>
        }
      />
    );
  };
  const successDelete = () => {
    setAlert(
      <SweetAlert
        success
        style={{ display: "block", marginTop: "-100px" }}
        title="Deleted!"
        onConfirm={() => this.hideAlert()}
        onCancel={() => this.hideAlert()}
        confirmBtnBsStyle="info"
      >
        Your imaginary file has been deleted.
      </SweetAlert>
    );
  };
  const cancelDetele = () => {
    setAlert(
      <SweetAlert
        danger
        style={{ display: "block", marginTop: "-100px" }}
        title="Cancelled"
        onConfirm={() => this.hideAlert()}
        onCancel={() => this.hideAlert()}
        confirmBtnBsStyle="info"
      >
        Your imaginary file is safe :)
      </SweetAlert>
    );
  };
  const hideAlert = () => {
    setAlert(null);
  };
  return (
    <>
      <PanelHeader
        content={
          <div className="header text-center">
            <h2 className="title">Sweet Alert</h2>
            <p className="category">
              A beautiful plugin, that replace the classic alert, Handcrafted by
              our friend{" "}
              <a target="_blank" href="https://github.com/djorg83">
                Daniel Jorgensen
              </a>
              . Please check out the{" "}
              <a
                href="https://github.com/djorg83/react-bootstrap-sweetalert"
                target="_blank"
              >
                full documentation.
              </a>
              .
            </p>
          </div>
        }
      />
      <div className="content">
        {alert}
        <div className="places-sweet-alerts">
          <Row>
            <Col md={3} xs={12} className="ml-auto">
              <Card>
                <CardBody className="text-center">
                  <CardText>Basic example</CardText>
                  <Button color="primary" onClick={basicAlert}>
                    Try me!
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col md={3} xs={12} className="mr-auto">
              <Card>
                <CardBody className="text-center">
                  <CardText>A success message</CardText>
                  <Button color="primary" onClick={successAlert}>
                    Try me!
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={3} xs={12} className="ml-auto">
              <Card>
                <CardBody className="text-center">
                  <CardText>Custom HTML description</CardText>
                  <Button color="primary" onClick={htmlAlert}>
                    Try me!
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col md={3} xs={12} className="mr-auto">
              <Card>
                <CardBody className="text-center">
                  <CardText>
                    A warning message, with a function attached to the "Confirm"
                    Button...
                  </CardText>
                  <Button color="primary" onClick={warningWithConfirmMessage}>
                    Try me!
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={3} xs={12} className="ml-auto">
              <Card>
                <CardBody className="text-center">
                  <CardText>Modal window with input field</CardText>
                  <Button color="primary" onClick={inputAlert}>
                    Try me!
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col md={3} xs={12} className="mr-auto">
              <Card>
                <CardBody className="text-center">
                  <CardText>A title with a text under</CardText>
                  <Button color="primary" onClick={titleAndTextAlert}>
                    Try me!
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={3} xs={12} className="ml-auto">
              <Card>
                <CardBody className="text-center">
                  <CardText>
                    A message with auto close timer set to 2 seconds
                  </CardText>
                  <Button color="primary" onClick={autoCloseAlert}>
                    Try me!
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col md={3} xs={12} className="mr-auto">
              <Card>
                <CardBody className="text-center">
                  <CardText>
                    ...and by passing a parameter, you can execute something
                    else for "Cancel"
                  </CardText>
                  <Button
                    color="primary"
                    onClick={warningWithConfirmAndCancelMessage}
                  >
                    Try me!
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default SweetAlertPage;
