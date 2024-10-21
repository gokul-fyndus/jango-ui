// import LOGO from "../assets/images/logo.svg";
// import LOGIN_BG from "../assets/images/bg-layout.png";
export const PATH = {
  IMG: {
    // LOGO,
    // LOGIN_BG,
  },
  PAGE: {
    HOME: "",
    ABOUT: "/about-us",
    LOGIN: "/login",
    CREATE_ACCOUNT: "/create-account",
    FORGOT_PASSWORD: "/forgot-password",
    //Admin-Employee
    EMPLOYEE_LIST:"/employee/orders",
    EMPLOYEE_DETAILS:"/employee/:id",
    ADD_EMPLOYEE:"/add-employee",
    EDIT_EMPLOYEE:"/edit-employee",
    //Admin-Raw Materials
    RAW_MATERIALS_LIST:"/raw-material/orders",
    RAW_MATERIALS_DETAILS:"/raw-material/:id",
    ADD_RAW_MATERIALS:"/add-raw-material",
    EDIT_RAW_MATERIALS:"/edit-raw-material",
    //Customer
    CUSTOMER: "/customer",
    EDIT_CUSTOMER: "/edit-customer",
    ADD_CUSTOMER: "/add-customer",
    FETCH_CUSTOMER_DETAILS :"/fetch-customer-details",
    RETAIL_CUSTOMER : "/retail-customer",
    //orders
    ORDERS :"/orders",
    ORDER_DETAILS:"/order-details",
    ADD_ORDERS:"/add-orders",
    EDIT_ORDER:"/edit-orders",
    RETAILS_ORDERS : "/retails-orders",
    ORDER_DETAILS_VIEW : "orders-view",
    TAB_MANAGER_COMPLETED : "orders-completed",
    TAB_MANAGER_TO_DO : "orders-to-do",
    TAB_MANAGER_IN_PROGRESS : "orders-in-progress"

  },
};