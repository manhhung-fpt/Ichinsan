
import React from "react";



// reactstrap components
import {

  Container,

  Row,
  Col,


} from "reactstrap";
import Step1 from "views/Forms/Wizard/Step1";
import Step2 from "views/Forms/Wizard/Step2";
import Step3 from "views/Forms/Wizard/Step3";
import ReactWizard from "react-bootstrap-wizard";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";


// core components
import bgImage from "assets/img/bg16.jpg";

function RegisterPage() {
  let history = useHistory();
  const [firstnameFocus, setfirstnameFocus] = React.useState(false);
  const [lastnameFocus, setlastnameFocus] = React.useState(false);
  const [emailFocus, setemailFocus] = React.useState(false);
  const finishButtonClick = (allStates) => {
    console.log(allStates);
    
    let email = allStates.About.email
    let fullName =allStates.About.firstname +' '+ allStates.About.lastname 
    let phoneNumber = allStates.About.phoneNumber
    let dob = allStates.About.dob
    let gender = allStates.About.select.value
    let num = allStates.Role.activeChoices[0]
    let Website = allStates.Role.Website
    let role =''
     if(num === 1 ){
      role = 'Translator'
     }else if(num === undefined){
      role = 'Translator'
     }else if(num === 2){
      role = 'Auditor'
     }else if(num === 3){
      role = 'Customer'
    }
    console.log(num);
    console.log(allStates.Role.activeChoices[0]);
    console.log(role);
    var axios = require('axios');
    var data = JSON.stringify({
      "email": email,
      "fullName": fullName,
      "phoneNumber": phoneNumber,
      "dob": dob,
      "gender": gender,
      "website": Website,
      "role": role
    });

    var config = {
      method: 'post',
      url: 'https://api-dotnet-test.herokuapp.com/api/account/register',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        getToken(email);
      })
      .catch(function (error) {
        console.log(error);
      });


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
        
          var token = response.data.token;
          var decoded = jwt_decode(token);
          var userId = response.data.id;
          var profileId = response.data.profileId;
          localStorage.setItem("token", token);
          localStorage.setItem("userId", userId);
          localStorage.setItem("profileId", profileId);
          localStorage.setItem("role", decoded.role);
          getProfile(profileId)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const getProfile = (id) => {
    var axios = require('axios');


    var config = {
      method: 'get',
      url: `https://api-dotnet-test.herokuapp.com/api/profiles/${id}`,
      headers: {
        'Content-Type': 'application/json'
      },

    };
    axios(config)
      .then(function (response) {
        debugger
        const profile = response.data[0];  
        const name = profile.fullName;
          console.log(profile);
          console.log(profile.fullName);
           localStorage.setItem("name", name);
          history.push("/admin/home")

      })
      .catch(function (error) {
        console.log(error);
      });
  }
  var steps = [
    {
      stepName: "About",
      stepIcon: "now-ui-icons users_circle-08",
      component: Step1,
    },
    {
      stepName: "Role",
      stepIcon: "now-ui-icons ui-1_settings-gear-63",
      component: Step2,
    },
  ];
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  }, []);
  return (
    <>
      <div className="content">
        <div className="register-page">
          <Container>
            <Row className="justify-content-center">
              <Col xs={12} md={10} className="mr-auto ml-auto">
                <ReactWizard
                  steps={steps}
                  finishButtonClick={finishButtonClick}
                  navSteps
                  validate
                  title="Build Your Profile"
                  description="This information will let us know more about you."
                  headerTextCenter
                  color="blue"
                  finishButtonClasses="btn-wd"
                  nextButtonClasses="btn-wd"
                  previousButtonClasses="btn-wd"
                />


              </Col>
            </Row>
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

export default RegisterPage;