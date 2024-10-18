import { Outlet, Route, Routes, BrowserRouter } from "react-router-dom";
import { PATH } from "../globals/app-constants";
import EmployeeOrderList from "../shared/pages/employee/EmployeeOrderList";
import { EmployeeDetails } from "../shared/pages/employee/EmployeeDetails";
import CreateEmployee from "../shared/pages/employee/CreateEmployee";
import RawMaterialOrderList from "../shared/pages/rawMaterial/RawMaterialOrderList";
import RawMaterialDetails from "../shared/pages/rawMaterial/RawMaterialDetails";
import CreateRawMaterial from "../shared/pages/rawMaterial/CreateRawMaterial";
// import {
//   Login,
//   CreateAccount,
// } from "../pages/index";
// import { PATH } from "../globals/app-constants";

const Routers = () => {
  const Layout = () => {
    return (
      // <Stack height={"100vh"} color={"black"}>
      //   <Header />
      //   <Stack flexGrow={1} p={2} overflow={"auto"}>
      //     <Outlet />
      //   </Stack>
      // </Stack>
      <></>
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
    // <></>
    <BrowserRouter>
      <Routes>
        <Route path={PATH.PAGE.EMPLYEE_LIST} element={<EmployeeOrderList />}/>
        <Route path={PATH.PAGE.EMPLYEE_DETAILS} element={<EmployeeDetails />}/>
        <Route path={PATH.PAGE.ADD_EMPLYEE} element={<CreateEmployee />}/>
        <Route path={PATH.PAGE.EDIT_EMPLYEE} element={<CreateEmployee />}/>
        <Route path={PATH.PAGE.RAW_MATERIALS_LIST} element={<RawMaterialOrderList />}/>
        <Route path={PATH.PAGE.RAW_MATERIALS_DETAILS} element={<RawMaterialDetails />}/>
        <Route path={PATH.PAGE.ADD_RAW_MATERIALS} element={<CreateRawMaterial />}/>
        <Route path={PATH.PAGE.EDIT_RAW_MATERIALS} element={<CreateRawMaterial />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
