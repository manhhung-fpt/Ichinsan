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
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import bgImage from "assets/img/bg14.jpg";
import { useHistory } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import SweetAlert from "react-bootstrap-sweetalert";




function LoginPage() {
  let history = useHistory();
  const [alert, setAlert] = React.useState(null);
  const closeAlert = () => {
    localStorage.clear();
    setAlert(null) ;
  }
  const titleAndTextAlert = () => {
    setAlert(
      <SweetAlert
        style={{ display: "block", marginTop: "-100px" }}
        title="Alert"
        onConfirm={closeAlert}
        confirmBtnBsStyle="info"
      >
        This account is not in the system
      </SweetAlert>
    );
  };
  const getToken = (email) => {
    var axios = require('axios');
    var data = JSON.stringify({
      "email": email
    });

    var config = {
      method: 'post',
      url: 'https://api-dotnet-test.herokuapp.com/api/account/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data === 'User is not existed');
       if(response.data === 'User is not existed'){
          titleAndTextAlert();
          }else{
          var token = response.data.token;
          var decoded = jwt_decode(token);      
          localStorage.setItem("role", decoded.role);
          history.push("/admin/home")
         }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const signInWithGooggle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
        getToken(email);
      }).catch((error) => {
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
                  {alert}
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