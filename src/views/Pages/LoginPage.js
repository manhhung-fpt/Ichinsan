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

// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Form,
  Container,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Button,
} from "reactstrap";

// core components
import nowLogo from "assets/img/now-logo.png";
import { useEffect } from "react";
import { auth } from "Firebase";
import  {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import bgImage from "assets/img/bg14.jpg";
import { useHistory } from "react-router-dom";




function LoginPage() {
  let history = useHistory();
  const signInWithGooggle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) =>{
        console.log(result);
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
        history.push("/admin/home")
    }).catch((error) =>{
        console.log(error);
    });

};
  const [firstnameFocus, setfirstnameFocus] = React.useState(false);
  const [lastnameFocus, setlastnameFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("login-page");
    return function cleanup() {
      document.body.classList.remove("login-page");
    };
  }, []);
  return (
    <>
      <div className="content">
        <div className="login-page">
          <Container>
            <Col xs={12} md={8} lg={4} className="ml-auto mr-auto">
              <Form>
                <Card className="card-login card-plain">
                  <CardHeader>
                    <div className="logo-container">
                      <img src={nowLogo} alt="now-logo" />
                    </div>
                  </CardHeader>
                  <CardBody>
                    <InputGroup
                      className={
                        "no-border form-control-lg " +
                        (firstnameFocus ? "input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="First Name..."
                        onFocus={(e) => setfirstnameFocus(true)}
                        onBlur={(e) => setfirstnameFocus(false)}
                      />
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border form-control-lg " +
                        (lastnameFocus ? "input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons text_caps-small" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="Last Name..."
                        onFocus={(e) => setlastnameFocus(true)}
                        onBlur={(e) => setlastnameFocus(false)}
                      />
                    </InputGroup>
                  </CardBody>
                  <CardFooter>
                    <Button
                      block
                      color="primary"
                      size="lg"
                      href="#pablo"
                      className="mb-3 btn-round"
                      onClick={signInWithGooggle}
                    >
                      Sign in with Googgle
                    </Button>
                    <div className="pull-left">
                      <h6>
                        <a href="#pablo" className="link footer-link">
                          Create Account
                        </a>
                      </h6>
                    </div>
                    <div className="pull-right">
                      <h6>
                        <a href="#pablo" className="link footer-link">
                          Need Help?
                        </a>
                      </h6>
                    </div>
                  </CardFooter>
                </Card>
              </Form>
            </Col>
          </Container>
        </div>
      </div>
      <div
        className="full-page-background"
        style={{ backgroundImage: "url(" + bgImage + ")" }}
      />
    </>
  );
}

export default LoginPage;
