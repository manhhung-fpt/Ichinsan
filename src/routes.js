
import Dashboard from "views/Dashboard/Dashboard.js";
import Home from "views/Home/Home.js";
import Buttons from "views/Components/Buttons.js";
import GridSystem from "views/Components/GridSystem.js";
import Panels from "views/Components/Panels.js";
import SweetAlert from "views/Components/SweetAlertPage.js";
import Notifications from "views/Components/Notifications.js";
import Icons from "views/Components/Icons.js";
import Typography from "views/Components/Typography.js";
import Wizard from "views/Forms/Wizard/Wizard.js";
import UserPage from "views/Pages/UserPage.js";
import LoginPage from "views/Pages/LoginPage.js";
import RegisterPage from "views/Pages/RegisterPage";

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
import CustomerArticleDetail from './views/CustomerArticleDetail/CustomerArticleDetail';
import CustomerEditProject from './views/CustomerEditProject/CustomerEditProject';
import CustomerEditFeedback from './views/CustomerEditFeedback/CustomerEditFeedback';
import CustomerEditArticle from './views/CustomerEditArticle/CustomerEditArticle';
import TranslatorProgress from './views/TranslatorProgress/TranslatorProgress';
import Wallet from './views/Wallet/Wallet';
import SearchFilter from './views/SearchFilter/SearchFilter';
import TranslatorProgressArticle from './views/TranslatorProgressArticle/TranslatorProgressArticle';
import TranslatorRecruiment from './views/TranslatorRecruitment/TranslatorRecruiment';
import AdminViewAccount from './views/AdminViewAccount/AdminViewAccount';
import CustomerRecruitmentDetail from './views/CustomerRecruitmentDetail/CustomerRecruitmentDetail';
import TranslatorViewArticle from './views/TranslatorViewArticle/TranslatorViewArticle';
import AuditorProgress from './views/AuditorProgress/AuditorProgress';
import AuditorProgressArticle from './views/AuditorProgressArticle/AuditorProgressArticle';
import AuditorCreateFeedback from './views/AuditorCreateFeedback/AuditorCreateFeedback';
import AuditorEditFeedback from './views/AuditorEditFeedback/AuditorEditFeedback';
import SearchView from './views/SearchFilter/SearchView';


let routes = [
  {
    path: "/home",
    name: "Home",
    icon: "now-ui-icons shopping_shop",
    component: Home,
    layout: "/admin",
    hideInDetail: true

  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "now-ui-icons design_app",
    component: Dashboard,
    hideInDetail: true,
    layout: "/admin",
   
  },

  {
    path: "/admin-account",
    name: "Account",
    icon: "now-ui-icons business_badge",
    component: AdminAccount,
    layout: "/admin",
    rolePermission: "Admin"
  },
  {
    path: "/admin-view-info",
    name: "View Info",
    icon: "now-ui-icons business_badge",
    component: AdminViewAccount,
    props: {a:"a"},
    layout: "/admin",
    hideInDetail: true,
    rolePermission: "Admin"
  },
  {
    path: "/admin-project",
    name: "Project",
    icon: "now-ui-icons business_badge",
    component: AdminProject,
    layout: "/admin",
    rolePermission: "Admin"
  },
  {
    path: "/admin-projec/admin-project-details",
    name: "Project Details",
    icon: "now-ui-icons business_badge",
    component: AdminProjectDetails,
    layout: "/admin",
    hideInDetail: true,
  },
  {
    path: "/admin-add-auditor",
    name: "Add Auditor",
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
    name: "Assign",
    icon: "now-ui-icons business_badge",
    component: AdminAssign,
    hideInDetail: true,
    layout: "/admin",
  },
  {
    path: "/admin-category-home",
    name: "Category Home",
    icon: "now-ui-icons business_badge",
    component: AdminCategoryHome,
    layout: "/admin",
    rolePermission: "Admin"
  },
  {
    path: "/customer-create-project",
    name: "Create Project",
    icon: "now-ui-icons business_badge",
    hideInDetail: true,
    component: CustomerCreate,
    rolePermission: "Customer",
    layout: "/admin",
  },
  {
    path: "/customer-home",
    name: "Progress",
    icon: "now-ui-icons business_badge",
    component: CustomerHome,
    layout: "/admin",
    rolePermission: "Customer"

  },

  {
    path: "/Search",
    name: "Search Filter",
    icon: "now-ui-icons business_badge",
    component:  SearchFilter,
    hideInDetail: true,
    layout: "/admin",
  },
  {
    path: "/SearchView",
    name: "Search View",
    icon: "now-ui-icons business_badge",
    component:  SearchView,
    hideInDetail: true,
    layout: "/admin",
  },
  
  {
    path: "/customer-progress-project",
    name: "Progress Project",
    icon: "now-ui-icons business_badge",
    component: CustomerProgressProject,
    hideInDetail: true,
    layout: "/admin",
  },
  
  {
    path: "/customer-edit-project",
    name: "Edit Project",
    icon: "now-ui-icons business_badge",
    component: CustomerEditProject,
    hideInDetail: true,
    layout: "/admin",
  },
  {
    path: "/customer-article",
    name: "Article",
    icon: "now-ui-icons business_badge",
    component: CustomeArticle,
    hideInDetail: true,
    layout: "/admin",
  },
  {
    path: "/customer-add-article",
    name: "Add Article",
    icon: "now-ui-icons business_badge",
    component: CustomerAddArticle,
    hideInDetail: true,
    layout: "/admin",
  },
  {
    path: "/customer-edit-article",
    name: "Edit Article",
    icon: "now-ui-icons business_badge",
    component: CustomerEditArticle,
    hideInDetail: true,
    layout: "/admin",
  },
  {
    path: "/customer-progress-article",
    name: "Recruitment",
    icon: "now-ui-icons business_badge",
    component: CustomerProgressArticle,
    
    rolePermission: "Customer",
    layout: "/admin",
  },
  {
    path: "/customer-create-feedback",
    name: "Create Feedback",
    icon: "now-ui-icons business_badge",
    component: CustomerCreateFeedback,
    hideInDetail: true,
    layout: "/admin",
  },
  {
    path: "/customer-edit-feedback",
    name: "Edit Feedback",
    icon: "now-ui-icons business_badge",
    component: CustomerEditFeedback,
    hideInDetail: true,
    layout: "/admin",
  },
  {
    path: "/customer-arti-detail",
    name: "Article Detail",
    icon: "now-ui-icons business_badge",
    component: CustomerArticleDetail,
    props: {a:"a"},
    hideInDetail: true,
    rolePermission: "Customer",
    layout: "/admin",
  },
  {
    path: "/customer-recruitment-detail",
    name: "Recruitment Article Detail",
    icon: "now-ui-icons business_badge",
    component: CustomerRecruitmentDetail,
    hideInDetail: true,
    rolePermission: "Customer",
    layout: "/admin",
  },
  {
    path: "/translator-recruitment",
    name: "Recruitment",
    icon: "now-ui-icons business_badge",
    component: TranslatorRecruiment,
    rolePermission: "Translator",
    layout: "/admin",
  },
  {
    path: "/recruitment-view-article",
    name: "View Article",
    icon: "now-ui-icons business_badge",
    component: TranslatorViewArticle,
    props: {a:"a"},
    rolePermission: "Translator",
    hideInDetail: true,
    layout: "/admin",
  },
  {
    path: "/translator-progress",
    name: "Progress",
    icon: "now-ui-icons business_badge",
    component: TranslatorProgress,
    rolePermission: "Translator",
    layout: "/admin",
  },
  {
    path: "/translator-progress-article",
    name: "Article",
    icon: "now-ui-icons business_badge",
    component: TranslatorProgressArticle,
    props: {a:"a"},
    rolePermission: "Translator",
    hideInDetail: true,
    layout: "/admin",
  },
  
  {
    path: "/auditor-progress",
    name: "Progress",
    icon: "now-ui-icons business_badge",
    component: AuditorProgress,
    rolePermission: "Auditor",
    layout: "/admin",
  },
  {
    path: "/auditor-progress-article",
    name: "Article",
    icon: "now-ui-icons business_badge",
    component: AuditorProgressArticle,
    props: {a:"a"},
    rolePermission: "Auditor",
    hideInDetail: true,
    layout: "/admin",
  },
  {
    path: "/auditor-create=feedback",
    name: "Create Feedback",
    icon: "now-ui-icons business_badge",
    component: AuditorCreateFeedback,
    hideInDetail: true,
    layout: "/admin",
  },
  {
    path: "/auditor-edit-feedback",
    name: "Edit Feedback",
    icon: "now-ui-icons business_badge",
    component: AuditorEditFeedback,
    hideInDetail: true,
    layout: "/admin",
  },
  {
    path: "/wallet",
    name: "Wallet",
    icon: "now-ui-icons business_badge",
    component: Wallet,
    mainScreen: true,
    layout: "/admin",
  },
  {
    path: "/admin-projec-category",
    name: "Project Category",
    icon: "now-ui-icons business_badge",
    component: AdminProjectCategory,
    layout: "/admin",
    hideInDetail: true,
  },
  {
    path: "/admin-feedback-category",
    name: "Feedback Category",
    icon: "now-ui-icons business_badge",
    component: AdminFeedBackCategory,
    layout: "/admin",
    hideInDetail: true,
  },
  {
    path: "/admin-add-category",
    name: "Add Category",
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
      {
        path: "/register-page",
        name: "Register Page",
        short: "Register",
        mini: "RP",
        hideInDetail: true,
        component: RegisterPage,
        layout: "/auth",
      },

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
