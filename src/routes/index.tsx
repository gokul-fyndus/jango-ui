// import { Outlet, Route, Routes } from "react-router-dom";
// import {
//   Login,
//   CreateAccount,
// } from "../pages/index";
// import { PATH } from "../globals/app-constants";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATH } from "../globals/app-constants";
import IndividualCustomer from "../shared/page/IndividualCustomer";
import EditCustomerDetails from "../shared/page/EditCustomerDetails";
import AddCustomerDetails from "../shared/page/AddCustomerDetails";
import CustomerList from "../shared/page/CustomerList";

const Routers = () => {
  const Layout = () => {
    return (
      // <Stack height={"100vh"} color={"black"}>
      //   <Header />
      //   <Stack flexGrow={1} p={2} overflow={"auto"}>
      //     <Outlet />
      //   </Stack>
      // </Stack>
      <>
      </>
    );
  };
  return (
    // <Routes>
    //   <Route path="/" element={<Login />} />
    //   <Route path={PATH.PAGE.LOGIN} element={<Login />} />
    //   <Route path={PATH.PAGE.CREATE_ACCOUNT} element={<CreateAccount />} />
    //   <Route element={<Layout />}>
    //     <Route path={PATH.PAGE.CREATE_BILL} element={<CreateBill />} />
    //     <Route path={PATH.PAGE.BILL_HISTORY} element={<BillHistory />} />
    //     <Route path={PATH.PAGE.BILL_DETAILS} element={<BillDetails />} />
    //   </Route>
    // </Routes>
    // <Routes>
    <BrowserRouter>
      <Routes>
        <Route path={PATH.PAGE.CUSTOMER} element={<CustomerList/>} />
        <Route path={PATH.PAGE.INDIVIDUAL_CUSTOMER} element={<IndividualCustomer />} />
        <Route path={PATH.PAGE.EDIT_CUSTOMER_DETAILS} element={<EditCustomerDetails />} />
        <Route path={PATH.PAGE.ADD_CUSTOMER_DETAILS} element={<AddCustomerDetails />} />
        <Route />
      </Routes>
    </BrowserRouter>
    // </Routes>
  );
};

export default Routers;
