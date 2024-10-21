// import { Outlet, Route, Routes } from "react-router-dom";
// import {
//   Login,
//   CreateAccount,
// } from "../pages/index";
// import { PATH } from "../globals/app-constants";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATH } from "../globals/app-constants";
import RetailsOrders from "../shared/page/orders/RetailsOrders";
import React from "react";
import Order from "../shared/page/orders/Order";
import OrdersDetails from "../shared/page/orders/OrdersDetails";
import OrdersView from "../shared/page/orders/OrdersView";
import Tabstatus from "../shared/page/orders/TabStatus";

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
        <Route path={PATH.PAGE.ORDERS} element={<Order />} />
        <Route path={PATH.PAGE.RETAILS_ORDERS} element={<RetailsOrders />} />
        <Route path={PATH.PAGE.ADD_ORDERS} element={<OrdersDetails />} />
        <Route path={PATH.PAGE.EDIT_ORDER} element={<OrdersDetails />} />
        <Route path={PATH.PAGE.ORDER_DETAILS_VIEW} element={<OrdersView />} />
        <Route path={PATH.PAGE.TAB_MANAGER_COMPLETED} element={<Tabstatus />} />
        <Route path={PATH.PAGE.TAB_MANAGER_IN_PROGRESS} element={<Tabstatus />} />
        <Route path={PATH.PAGE.TAB_MANAGER_TO_DO} element={<Tabstatus />} />
      </Routes>
    </BrowserRouter>
    // </Routes>
  );
};

export default Routers;
