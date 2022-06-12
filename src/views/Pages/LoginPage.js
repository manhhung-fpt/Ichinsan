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