// import { Outlet, Route, Routes } from "react-router-dom";
// import {
//   Login,
//   CreateAccount,
// } from "../pages/index";
// import { PATH } from "../globals/app-constants";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATH } from "../globals/app-constants";
import Customer from "../shared/page/Customer";
import CustomerDetails from "../shared/page/CustomerDetails";
import RetrieveCustomerDetails from "../shared/page/RetrieveCustomerDetails";
import RetailCustomer from "../shared/page/RetailCustomer";

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
        <Route path={PATH.PAGE.CUSTOMER} element={<Customer />}/>
        <Route path={PATH.PAGE.ADD_CUSTOMER} element={<CustomerDetails />} />
        <Route path={PATH.PAGE.FETCH_CUSTOMER_DETAILS} element={<RetrieveCustomerDetails />} />
        <Route path={PATH.PAGE.RETAIL_CUSTOMER} element={<RetailCustomer />} />
        <Route />
      </Routes>
      <Layout />
    </BrowserRouter>
    // </Routes>
  );
};

export default Routers;
