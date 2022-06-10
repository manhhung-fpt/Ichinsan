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
/* eslint-disable no-unused-vars*/
import React from "react";

// reactstrap components
import {
  Form,
  FormGroup,
  Input,
  Label,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardFooter,
  Row,
  Col,
  Button,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

function ValidationForms() {
  // register form
  const [registerEmail, setregisterEmail] = React.useState("");
  const [registerPassword, setregisterPassword] = React.useState("");
  const [registerConfirmPassword, setregisterConfirmPassword] = React.useState(
    ""
  );
  const [registerEmailState, setregisterEmailState] = React.useState("");
  const [registerPasswordState, setregisterPasswordState] = React.useState("");
  const [
    registerConfirmPasswordState,
    setregisterConfirmPasswordState,
  ] = React.useState("");
  // login form
  const [loginFullName, setloginFullName] = React.useState("");
  const [loginEmail, setloginEmail] = React.useState("");
  const [loginPassword, setloginPassword] = React.useState("");
  const [loginFullNameState, setloginFullNameState] = React.useState("");
  const [loginEmailState, setloginEmailState] = React.useState("");
  const [loginPasswordState, setloginPasswordState] = React.useState("");
  // type validation form
  const [required, setrequired] = React.useState("");
  const [email, setemail] = React.useState("");
  const [number, setnumber] = React.useState("");
  const [url, seturl] = React.useState("");
  const [source, setsource] = React.useState("");
  const [destination, setdestination] = React.useState("");
  const [requiredState, setrequiredState] = React.useState("");
  const [emailState, setemailState] = React.useState("");
  const [numberState, setnumberState] = React.useState("");
  const [urlState, seturlState] = React.useState("");
  const [sourceState, setsourceState] = React.useState("");
  const [destinationState, setdestinationState] = React.useState("");
  // range validation form
  const [minLength, setminLength] = React.useState("");
  const [maxLength, setmaxLength] = React.useState("");
  const [range, setrange] = React.useState("");
  const [min, setmin] = React.useState("");
  const [max, setmax] = React.useState("");
  const [minLengthState, setminLengthState] = React.useState("");
  const [maxLengthState, setmaxLengthState] = React.useState("");
  const [rangeState, setrangeState] = React.useState("");
  const [minState, setminState] = React.useState("");
  const [maxState, setmaxState] = React.useState("");
  // function that returns true if value is email, false otherwise
  const verifyEmail = (value) => {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  };
  // function that verifies if a string has a given length or not
  const verifyLength = (value, length) => {
    if (value.length >= length) {
      return true;
    }
    return false;
  };
  // function that verifies if two strings are equal
  const compare = (string1, string2) => {
    if (string1 === string2) {
      return true;
    }
    return false;
  };
  // function that verifies if value contains only numbers
  const verifyNumber = (value) => {
    var numberRex = new RegExp("^[0-9]+$");
    if (numberRex.test(value)) {
      return true;
    }
    return false;
  };
  // verifies if value is a valid URL
  const verifyUrl = (value) => {
    try {
      new URL(value);
      return true;
    } catch (_) {
      return false;
    }
  };
  const registerClick = () => {
    if (registerEmailState === "") {
      setregisterEmailState("has-danger");
    }
    if (registerPasswordState === "" || registerConfirmPasswordState === "") {
      setregisterPasswordState("has-danger");
      setregisterConfirmPasswordState("has-danger");
    }
  };
  const loginClick = () => {
    if (loginFullNameState === "") {
      setloginFullNameState("has-danger");
    }
    if (loginEmailState === "") {
      setloginEmailState("has-danger");
    }
    if (loginPasswordState === "") {
      setloginPasswordState("has-danger");
    }
  };
  const typeClick = () => {
    if (requiredState === "") {
      setrequiredState("has-danger");
    }
    if (emailState === "") {
      setemailState("has-danger");
    }
    if (numberState === "") {
      setnumberState("has-danger");
    }
    if (urlState === "") {
      seturlState("has-danger");
    }
    if (sourceState === "" || destinationState === "") {
      setsourceState("has-danger");
      setdestinationState("has-danger");
    }
  };
  const rangeClick = () => {
    if (minLengthState === "") {
      setminLengthState("has-danger");
    }
    if (maxLengthState === "") {
      setmaxLengthState("has-danger");
    }
    if (rangeState === "") {
      setrangeState("has-danger");
    }
    if (minState === "") {
      setminState("has-danger");
    }
    if (maxState === "") {
      setmaxState("has-danger");
    }
  };
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md="4">
            <Form id="RegisterValidation">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Register Form</CardTitle>
                </CardHeader>
                <CardBody>
                  <FormGroup className={`has-label ${registerEmailState}`}>
                    <label>Email Address *</label>
                    <Input
                      name="email"
                      type="email"
                      onChange={(e) => {
                        if (!verifyEmail(e.target.value)) {
                          setregisterEmailState("has-danger");
                        } else {
                          setregisterEmailState("has-success");
                        }
                        setregisterEmail(e.target.value);
                      }}
                    />
                    {registerEmailState === "has-danger" ? (
                      <label className="error">
                        Please enter a valid email address.
                      </label>
                    ) : null}
                  </FormGroup>
                  <FormGroup className={`has-label ${registerPasswordState}`}>
                    <label>Password *</label>
                    <Input
                      id="registerPassword"
                      name="password"
                      type="password"
                      autoComplete="off"
                      onChange={(e) => {
                        if (!verifyLength(e.target.value, 1)) {
                          setregisterPasswordState("has-danger");
                        } else {
                          setregisterPasswordState("has-success");
                        }
                        setregisterPassword(e.target.value);
                      }}
                    />
                    {registerPasswordState === "has-danger" ? (
                      <label className="error">This field is required.</label>
                    ) : null}
                  </FormGroup>
                  <FormGroup
                    className={`has-label ${registerConfirmPasswordState}`}
                  >
                    <label>Confirm Password *</label>
                    <Input
                      equalto="#registerPassword"
                      id="registerPasswordConfirmation"
                      name="password_confirmation"
                      type="password"
                      autoComplete="off"
                      onChange={(e) => {
                        if (!compare(e.target.value, registerPassword)) {
                          setregisterConfirmPasswordState("has-danger");
                          setregisterPasswordState("has-danger");
                        } else {
                          setregisterConfirmPasswordState("has-success");
                          setregisterPasswordState("has-success");
                        }
                        setregisterConfirmPassword(e.target.value);
                      }}
                    />
                    {registerConfirmPasswordState === "has-danger" ? (
                      <label className="error">This field is required.</label>
                    ) : null}
                  </FormGroup>
                  <div className="category form-category">
                    * Required fields
                  </div>
                </CardBody>
                <CardFooter className="text-right">
                  <FormGroup check className="pull-left">
                    <Label check>
                      <Input name="optionCheckboxes" type="checkbox" />
                      <span className="form-check-sign" />
                      Subscribe to newsletter
                    </Label>
                  </FormGroup>
                  <Button color="primary" onClick={registerClick}>
                    Register
                  </Button>
                </CardFooter>
              </Card>
            </Form>
          </Col>
          <Col md="8">
            <Form id="LoginValidation">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Login Form</CardTitle>
                </CardHeader>
                <CardBody>
                  <FormGroup className={`has-label ${loginFullNameState}`}>
                    <label>Full Name *</label>
                    <Input
                      name="fullname"
                      type="text"
                      onChange={(e) => {
                        if (!verifyLength(e.target.value, 1)) {
                          setloginFullNameState("has-danger");
                        } else {
                          setloginFullNameState("has-success");
                        }
                        setloginFullName(e.target.value);
                      }}
                    />
                    {loginFullNameState === "has-danger" ? (
                      <label className="error">This field is required.</label>
                    ) : null}
                  </FormGroup>
                  <FormGroup className={`has-label ${loginEmailState}`}>
                    <label>Email Address *</label>
                    <Input
                      name="email"
                      type="email"
                      onChange={(e) => {
                        if (!verifyEmail(e.target.value)) {
                          setloginEmailState("has-danger");
                        } else {
                          setloginEmailState("has-success");
                        }
                        setloginEmail(e.target.value);
                      }}
                    />
                    {loginEmailState === "has-danger" ? (
                      <label className="error">
                        Please enter a valid email address.
                      </label>
                    ) : null}
                  </FormGroup>
                  <FormGroup className={`has-label ${loginPasswordState}`}>
                    <label>Password *</label>
                    <Input
                      name="password"
                      type="password"
                      autoComplete="off"
                      onChange={(e) => {
                        if (!verifyLength(e.target.value, 1)) {
                          setloginPasswordState("has-danger");
                        } else {
                          setloginPasswordState("has-success");
                        }
                        setloginPassword(e.target.value);
                      }}
                    />
                    {loginPasswordState === "has-danger" ? (
                      <label className="error">This field is required.</label>
                    ) : null}
                  </FormGroup>
                  <div className="category form-category">
                    * Required fields
                  </div>
                </CardBody>
                <CardFooter className="text-center">
                  <Button color="primary" onClick={loginClick}>
                    Login
                  </Button>
                </CardFooter>
              </Card>
            </Form>
          </Col>
          <Col md="12">
            <Form className="form-horizontal" id="TypeValidation">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Type Validation</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Label sm="2">Required Text</Label>
                    <Col sm="7">
                      <FormGroup className={requiredState}>
                        <Input
                          name="required"
                          type="text"
                          onChange={(e) => {
                            if (!verifyLength(e.target.value, 1)) {
                              setrequiredState("has-danger");
                            } else {
                              setrequiredState("has-success");
                            }
                            setrequired(e.target.value);
                          }}
                        />
                        {requiredState === "has-danger" ? (
                          <label className="error">
                            This field is required.
                          </label>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col className="label-on-right" tag="label" sm="3">
                      <code>required</code>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">Email</Label>
                    <Col sm="7">
                      <FormGroup className={emailState}>
                        <Input
                          name="email"
                          type="text"
                          onChange={(e) => {
                            if (!verifyEmail(e.target.value)) {
                              setemailState("has-danger");
                            } else {
                              setemailState("has-success");
                            }
                            setemail(e.target.value);
                          }}
                        />
                        {emailState === "has-danger" ? (
                          <label className="error">
                            Please enter a valid email address.
                          </label>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col className="label-on-right" tag="label" sm="3">
                      <code>email</code>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">Number</Label>
                    <Col sm="7">
                      <FormGroup className={numberState}>
                        <Input
                          name="number"
                          type="text"
                          onChange={(e) => {
                            if (!verifyNumber(e.target.value)) {
                              setnumberState("has-danger");
                            } else {
                              setnumberState("has-success");
                            }
                            setnumber(e.target.value);
                          }}
                        />
                        {numberState === "has-danger" ? (
                          <label className="error">
                            Please enter a valid number.
                          </label>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col className="label-on-right" tag="label" sm="3">
                      <code>number</code>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">Url</Label>
                    <Col sm="7">
                      <FormGroup className={urlState}>
                        <Input
                          name="url"
                          type="text"
                          onChange={(e) => {
                            if (!verifyUrl(e.target.value)) {
                              seturlState("has-danger");
                            } else {
                              seturlState("has-success");
                            }
                            seturl(e.target.value);
                          }}
                        />
                        {urlState === "has-danger" ? (
                          <label className="error">
                            Please enter a valid URL.
                          </label>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col className="label-on-right" tag="label" sm="3">
                      <code>url</code>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">Equal to</Label>
                    <Col sm="3">
                      <FormGroup className={sourceState}>
                        <Input
                          id="idSource"
                          placeholder="#idSource"
                          type="text"
                          onChange={(e) => {
                            if (!compare(e.target.value, destination)) {
                              setsourceState("has-danger");
                              setdestinationState("has-danger");
                            } else {
                              setsourceState("has-success");
                              setdestinationState("has-success");
                            }
                            setsource(e.target.value);
                          }}
                        />
                      </FormGroup>
                    </Col>
                    <Col sm="3">
                      <FormGroup className={destinationState}>
                        <Input
                          id="idDestination"
                          placeholder="#idDestination"
                          type="text"
                          onChange={(e) => {
                            if (!compare(e.target.value, source)) {
                              setdestinationState("has-danger");
                              setsourceState("has-danger");
                            } else {
                              setdestinationState("has-success");
                              setsourceState("has-success");
                            }
                            setdestination(e.target.value);
                          }}
                        />
                        {destinationState === "has-danger" ? (
                          <label className="error">
                            Please enter the same value.
                          </label>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col className="label-on-right" tag="label" sm="4">
                      <code>equalTo</code>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter className="text-center">
                  <Button color="primary" onClick={typeClick}>
                    Validate Inputs
                  </Button>
                </CardFooter>
              </Card>
            </Form>
          </Col>
          <Col md="12">
            <Form className="form-horizontal" id="RangeValidation">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Range Validation</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Label sm="2">Min Length</Label>
                    <Col sm="7">
                      <FormGroup className={minLengthState}>
                        <Input
                          name="min_length"
                          type="text"
                          onChange={(e) => {
                            if (!verifyLength(e.target.value, 5)) {
                              setminLengthState("has-danger");
                            } else {
                              setminLengthState("has-success");
                            }
                            setminLength(e.target.value);
                          }}
                        />
                        {minLengthState === "has-danger" ? (
                          <label className="error">
                            Please enter at least 5 characters.
                          </label>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col className="label-on-right" tag="label" sm="3">
                      <code>minLength="5"</code>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">Max Length</Label>
                    <Col sm="7">
                      <FormGroup className={maxLengthState}>
                        <Input
                          name="max_length"
                          type="text"
                          onChange={(e) => {
                            if (verifyLength(e.target.value, 6)) {
                              setmaxLengthState("has-danger");
                            } else {
                              setmaxLengthState("has-success");
                            }
                            setmaxLength(e.target.value);
                          }}
                        />
                        {maxLengthState === "has-danger" ? (
                          <label className="error">
                            Please enter 5 or less characters.
                          </label>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col className="label-on-right" tag="label" sm="3">
                      <code>maxLength="5"</code>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">Range</Label>
                    <Col sm="7">
                      <FormGroup className={rangeState}>
                        <Input
                          name="range"
                          type="text"
                          onChange={(e) => {
                            if (
                              !(
                                verifyNumber(e.target.value) &&
                                e.target.value >= 6 &&
                                e.target.value <= 10
                              )
                            ) {
                              setrangeState("has-danger");
                            } else {
                              setrangeState("has-success");
                            }
                            setrange(e.target.value);
                          }}
                        />
                        {rangeState === "has-danger" ? (
                          <label className="error">
                            Please enter a value between 6 and 10.
                          </label>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col className="label-on-right" tag="label" sm="3">
                      <code>range="[6,10]"</code>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">Min Value</Label>
                    <Col sm="7">
                      <FormGroup className={minState}>
                        <Input
                          name="min"
                          type="text"
                          onChange={(e) => {
                            if (
                              !(
                                verifyNumber(e.target.value) &&
                                e.target.value >= 6
                              )
                            ) {
                              setminState("has-danger");
                            } else {
                              setminState("has-success");
                            }
                            setmin(e.target.value);
                          }}
                        />
                        {minState === "has-danger" ? (
                          <label className="error">
                            Please enter a value greater than or equal to 6.
                          </label>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col className="label-on-right" tag="label" sm="3">
                      <code>min="6"</code>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">Max Value</Label>
                    <Col sm="7">
                      <FormGroup className={maxState}>
                        <Input
                          name="max"
                          type="text"
                          onChange={(e) => {
                            if (
                              !(
                                verifyNumber(e.target.value) &&
                                e.target.value <= 6
                              )
                            ) {
                              setmaxState("has-danger");
                            } else {
                              setmaxState("has-success");
                            }
                            setmax(e.target.value);
                          }}
                        />
                        {maxState === "has-danger" ? (
                          <label className="error">
                            Please enter a value less than or equal to 6.
                          </label>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col className="label-on-right" tag="label" sm="3">
                      <code>max="6"</code>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter className="text-center">
                  <Button color="primary" onClick={rangeClick}>
                    Validate Inputs
                  </Button>
                </CardFooter>
              </Card>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ValidationForms;
