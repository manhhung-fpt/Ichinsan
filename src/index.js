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
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v=1.5.0";
import "assets/css/demo.css";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import Common from "layouts/Common.js"
import Test from './TestCard';
import TestCard from './TestCard';
import TestWrapper from './TestWrapper';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route
        path="/admin"
        render={(props) => {
          return <AdminLayout {...props} />;
        }}
      />
      <Route
        path="/auth"
        render={(props) => {
          return <AuthLayout {...props} />;
        }}
      />
      <Route
        path="/common"
        render={(props) => {
          return <Common {...props} />;
        }}
      />

      <Route
        path="/test"
        render={(props) => {
          return <TestWrapper {...props} />;
        }}
      />
      <Redirect to="/admin/dashboard" />
    </Switch>


  </BrowserRouter>,
  document.getElementById("root")
);
