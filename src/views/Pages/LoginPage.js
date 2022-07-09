import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardFooter,
  Form,
  Container,
  Col,
  Button,
} from "reactstrap";


// core components
import nowLogo from "assets/img/now-logo.png";
import { auth } from "Firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import bgImage from "assets/img/bg14.jpg";
import { useHistory } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import NotificationAlert from "react-notification-alert";




function LoginPage() {
  const notificationAlert = React.useRef();
  let history = useHistory();
  const [alert, setAlert] = React.useState(null);
  const closeAlert = () => {
    localStorage.clear();
    setAlert(null);
  }
  const alertSuccesfully = () =>{
    var options = {};
    options = {
      place: "tr",
      message:"Login sucessfully",
      type: "info",
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 7,
    };
    notificationAlert.current.notificationAlert(options);
  }
  const alertError = (e) =>{
    var options = {};
    options = {
      place: "tr",
      message:e,
      type: "danger",
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 7,
    };
    notificationAlert.current.notificationAlert(options);
  }
  
  
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
        if (response.data === 'User is not existed') {
          alertError(response.data)
        } else {
          var token = response.data.token;
          var decoded = jwt_decode(token);
          var userId = response.data.id;
          var profileId = response.data.profileId;
          localStorage.setItem("token", token);
          localStorage.setItem("userId", userId);
          localStorage.setItem("profileId", profileId);
          localStorage.setItem("role", decoded.role);
          alertSuccesfully()
          setTimeout(() => {
            history.push("/admin/home");
        }, 2000);
          
        }
      })
      .catch(function (error) {
        alertError(error.message)
      });
  }
  const signInWithGooggle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
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
    <NotificationAlert ref={notificationAlert} />
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
                      className="mb-3 btn-round"
                      onClick={signInWithGooggle}
                    >
                      Sign in with Googgle
                    </Button>
                    <div className="pull-left">
                      <h6>
                        <a href="/auth/register-page" className="link footer-link">
                          Dont have an account ?
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