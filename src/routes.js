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
import Dashboard from "views/Dashboard/Dashboard.js";
import Home from "views/Home/Home.js";
import Buttons from "views/Components/Buttons.js";
import GridSystem from "views/Components/GridSystem.js";
import Panels from "views/Components/Panels.js";
import SweetAlert from "views/Components/SweetAlertPage.js";
import Notifications from "views/Components/Notifications.js";
import Icons from "views/Components/Icons.js";
import Typography from "views/Components/Typography.js";
import RegularForms from "views/Forms/RegularForms.js";
import ExtendedForms from "views/Forms/ExtendedForms.js";
import ValidationForms from "views/Forms/ValidationForms.js";
import Wizard from "views/Forms/Wizard/Wizard.js";
import RegularTables from "views/Tables/RegularTables.js";
import ExtendedTables from "views/Tables/ExtendedTables.js";
import ReactTable from "views/Tables/ReactTable.js";
import GoogleMaps from "views/Maps/GoogleMaps.js";
import FullScreenMap from "views/Maps/FullScreenMap.js";
import VectorMap from "views/Maps/VectorMap.js";
import Charts from "views/Charts/Charts.js";
import Calendar from "views/Calendar/Calendar.js";
import Widgets from "views/Widgets/Widgets.js";
import UserPage from "views/Pages/UserPage.js";
import TimelinePage from "views/Pages/TimelinePage.js";
import RTL from "views/Pages/RTL.js";
import PricingPage from "views/Pages/PricingPage.js";
import LoginPage from "views/Pages/LoginPage.js";
import RegisterPage from "views/Pages/RegisterPage.js";
import LockScreenPage from "views/Pages/LockScreenPage.js";

import AdminAccount from "views/AdminAccount/AdminAccount.js";
import AdminProject from "views/AdminProject/AdminProject.js";
import AdminProjectDetails from "views/AdminProjectDetails/AdminProjectDetails";
import AdminAddAuditor from "views/AdminAddAuditor/AdminAddAuditor";
import AdminAssign from "views/AdminAssign/AdminAssign";
import AdminCategoryHome from "views/AdminCategoryHome/AdminCategoryHome";
import AdminProjectCategory from "views/AdminProjectCategory/AdminProjectCategory";
import AdminAddCategory from "views/AdminAddCategory/AdminAddCategory";
import AdminFeedBackCategory from "views/AdminFeedBackCategory/AdminFeedBackCategory";
import CustomerHome from './views/CustomerHome/CustomerHome';
import CustomerProgressProject from './views/CustomerProgressProject/CustomerProgressProject';
import CustomerCreate from './views/CustomerCreate/CustomerCreate';
import CustomeArticle from './views/CustomeArticle/CustomeArticle';
import CustomerAddArticle from './views/CustomerAddArticle/CustomerAddArticle';
import CustomerProgressArticle from './views/CustomerProgressArticle/CustomerProgressArticle';
import CustomerCreateFeedback from './views/CustomerCreateFeedback/CustomerCreateFeedback';

let routes = [
  {
    path: "/home",
    name: "Home",
    icon: "now-ui-icons shopping_shop",
    component: Home,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "now-ui-icons design_app",
    component: Dashboard,
    layout: "/admin",
  },

  {
    path: "/admin-account",
    name: "Admin Account",
    icon: "now-ui-icons business_badge",
    component: AdminAccount,
    layout: "/admin",
  },
  {
    path: "/admin-project",
    name: "Admin Project",
    icon: "now-ui-icons business_badge",
    component: AdminProject,
    layout: "/admin",
  },
  {
    path: "/admin-projec/admin-project-details",
    name: "Admin Project Details",
    icon: "now-ui-icons business_badge",
    component: AdminProjectDetails,
    layout: "/admin",
    hideInDetail: true,
  },
  {
    path: "/admin-add-auditor",
    name: "Admin Add Auditor",
    icon: "now-ui-icons business_badge",
    component: AdminAddAuditor,
    hideInDetail: true,
    layout: "/admin",
  },


  {
    path: "/wizard",
    name: "Edit Profile",
    component: Wizard,
    hideInDetail: true,
    layout: "/admin",
  },
  {
    path: "/admin-assign",
    name: "Admin Assign",
    icon: "now-ui-icons business_badge",
    component: AdminAssign,
    hideInDetail: true,
    layout: "/admin",
  },
  {
    path: "/admin-category-home",
    name: "Admin Category Home",
    icon: "now-ui-icons business_badge",
    component: AdminCategoryHome,
    layout: "/admin",
  },
  {
    path: "/customer-home",
    name: "Customer Home",
    icon: "now-ui-icons business_badge",
    component: CustomerHome,

    layout: "/admin",
  },
  {
    path: "/customer-progress-project",
    name: "Customer Progress Project",
    icon: "now-ui-icons business_badge",
    component: CustomerProgressProject,

    layout: "/admin",
  },
  {
    path: "/customer-create-project",
    name: "Customer Create Project",
    icon: "now-ui-icons business_badge",
    component: CustomerCreate,

    layout: "/admin",
  },
  {
    path: "/customer-article",
    name: "Customer Article",
    icon: "now-ui-icons business_badge",
    component: CustomeArticle,

    layout: "/admin",
  },
  {
    path: "/customer-add-article",
    name: "Customer Add Article",
    icon: "now-ui-icons business_badge",
    component: CustomerAddArticle,

    layout: "/admin",
  },
  {
    path: "/customer-progress-article",
    name: "Customer Progress Article",
    icon: "now-ui-icons business_badge",
    component: CustomerProgressArticle,

    layout: "/admin",
  },
  {
    path: "/customer-create=feedback",
    name: "Customer Create Feedback",
    icon: "now-ui-icons business_badge",
    component: CustomerCreateFeedback,

    layout: "/admin",
  },
  {
    path: "/admin-projec-category",
    name: "Admin Project Category",
    icon: "now-ui-icons business_badge",
    component: AdminProjectCategory,
    layout: "/admin",
    hideInDetail: true,
  },
  {
    path: "/admin-feedback-category",
    name: "Admin Feedback Category",
    icon: "now-ui-icons business_badge",
    component: AdminFeedBackCategory,
    layout: "/admin",
    hideInDetail: true,
  },
  {
    path: "/admin-add-category",
    name: "Admin Add Category",
    icon: "now-ui-icons business_badge",
    hideInDetail: true,
    component: AdminAddCategory,
    layout: "/admin",
  },
  {
    path: "/login-page",
    short: "Login",
    component: LoginPage,
    hideInDetail: true,
    layout: "/auth",
  },
  {
    path: "/user-page",
    component: UserPage,
    hideInDetail: true,
    layout: "/common",
  },
  // {
  //   collapse: true,
  //   path: "/pages",
  //   name: "Pages",
  //   state: "openPages",
  //   icon: "now-ui-icons design_image",
  //   views: [
  //     {
  //       path: "/timeline-page",
  //       name: "Timeline Page",
  //       mini: "TP",
  //       component: TimelinePage,
  //       layout: "/admin",
  //     },

  //     {
  //       path: "/rtl-support",
  //       name: "RTL Support",
  //       mini: "RS",
  //       component: RTL,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/register-page",
  //       name: "Register Page",
  //       short: "Register",
  //       mini: "RP",
  //       component: RegisterPage,
  //       layout: "/auth",
  //     },

  //     {
  //       path: "/pricing-page",
  //       name: "Pricing Page",
  //       short: "Pricing",
  //       mini: "PP",
  //       component: PricingPage,
  //       layout: "/auth",
  //     },
  //     {
  //       path: "/lock-screen-page",
  //       name: "Lock Screen Page",
  //       short: "Lock",
  //       mini: "LSP",
  //       component: LockScreenPage,
  //       layout: "/auth",
  //     },
  //   ],
  // },
  {
    collapse: true,
    path: "/components",
    name: "Components",
    state: "openComponents",
    icon: "now-ui-icons education_atom",
    hideInDetail: true,
    views: [
      {
        path: "/buttons",
        name: "Buttons",
        mini: "B",
        component: Buttons,
        layout: "/admin",
      },
      {
        path: "/grid-system",
        name: "Grid System",
        mini: "GS",
        component: GridSystem,
        layout: "/admin",
      },
      {
        path: "/panels",
        name: "Panels",
        mini: "P",
        component: Panels,
        layout: "/admin",
      },
      {
        path: "/sweet-alert",
        name: "Sweet Alert",
        mini: "SA",
        component: SweetAlert,
        layout: "/admin",
      },
      {
        path: "/notifications",
        name: "Notifications",
        mini: "N",
        component: Notifications,
        layout: "/admin",
      },
      {
        path: "/icons",
        name: "Icons",
        mini: "I",
        component: Icons,
        layout: "/admin",
      },
      {
        path: "/typography",
        name: "Typography",
        mini: "T",
        component: Typography,
        layout: "/admin",
      },
    ],
  },
  // {
  //   collapse: true,
  //   path: "/forms",
  //   name: "Forms",
  //   state: "openForms",
  //   icon: "now-ui-icons design_bullet-list-67",
  //   views: [
  //     {
  //       path: "/regular-forms",
  //       name: "Regular Forms",
  //       mini: "RF",
  //       component: RegularForms,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/extended-forms",
  //       name: "Extended Forms",
  //       mini: "EF",
  //       component: ExtendedForms,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/validation-forms",
  //       name: "Validation Forms",
  //       mini: "VF",
  //       component: ValidationForms,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/wizard",
  //       name: "Wizard",
  //       mini: "W",
  //       component: Wizard,
  //       layout: "/admin",
  //     },
  //   ],
  // },
  // {
  //   collapse: true,
  //   path: "/tables",
  //   name: "Tables",
  //   state: "openTables",
  //   icon: "now-ui-icons files_single-copy-04",
  //   views: [
  //     {
  //       path: "/regular-tables",
  //       name: "Regular Tables",
  //       mini: "RT",
  //       component: RegularTables,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/extended-tables",
  //       name: "Extended Tables",
  //       mini: "ET",
  //       component: ExtendedTables,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/react-table",
  //       name: "React Table",
  //       mini: "RT",
  //       component: ReactTable,
  //       layout: "/admin",
  //     },
  //   ],
  // },
  // {
  //   collapse: true,
  //   path: "/maps",
  //   name: "Maps",
  //   state: "openMaps",
  //   icon: "now-ui-icons location_pin",
  //   views: [
  //     {
  //       path: "/google-maps",
  //       name: "Google Maps",
  //       mini: "GM",
  //       component: GoogleMaps,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/full-screen-maps",
  //       name: "Full Screen Map",
  //       mini: "FSM",
  //       component: FullScreenMap,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/vector-maps",
  //       name: "Vector Map",
  //       mini: "VM",
  //       component: VectorMap,
  //       layout: "/admin",
  //     },
  //   ],
  // },
  // {
  //   path: "/widgets",
  //   name: "Widgets",
  //   icon: "now-ui-icons objects_diamond",
  //   component: Widgets,
  //   layout: "/admin",
  // },
  // {
  //   path: "/charts",
  //   name: "Charts",
  //   icon: "now-ui-icons business_chart-pie-36",
  //   component: Charts,
  //   layout: "/admin",
  // },
  // {
  //   path: "/calendar",
  //   name: "Calendar",
  //   icon: "now-ui-icons media-1_album",
  //   component: Calendar,
  //   layout: "/admin",
  // },
];

export default routes;
