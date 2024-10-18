// import { Outlet, Route, Routes } from "react-router-dom";
// import {
//   Login,
//   CreateAccount,
// } from "../pages/index";
// import { PATH } from "../globals/app-constants";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATH } from "../globals/app-constants";
import OrderDetails from "../shared/page/OrderDetails";
import IndividualOrder from "../shared/page/IndividualOrder";
import AddOrder from "../shared/page/AddOrder";

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
        <Route path={PATH.PAGE.ORDER_DETAILS} element={<OrderDetails />} />
        <Route path={PATH.PAGE.INDIVIDUAL_ORDER} element={<IndividualOrder />} />
        <Route path={PATH.PAGE.ADD_ORDER} element={<AddOrder />} />
      </Routes>
    </BrowserRouter>
    // </Routes>
  );
};

export default Routers;
