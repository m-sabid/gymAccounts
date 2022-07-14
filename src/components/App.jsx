import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Applications from "./Applications/Applications";
import Expense from "./Expense/Expense";
import FooterSec from "./Footer/FooterSec";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Income from "./Income/Income";
import LoginLogOut from "./LoginLogOut/LoginLogOut";
import NoMatch from "./NoMatch/NoMatch";
import Order from "./Order/Order";
import PackagesOrder from "./Order/PackagesOrder/PackagesOrder";
import ProductsOrder from "./Order/ProductsOrder/ProductsOrder";
import ProfilePage from "./ProfilePage/ProfilePage";
import SalaryOverview from "./SalaryOverview/SalaryOverview";
import SideNav from "./SideNav/SideNav";
import TFrom from "./TFrom/TFrom";

const App = () => {
  return (
    <div className="App">
      <SideNav />
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="m/profile" element={<ProfilePage />} />
        <Route path="m/form" element={<TFrom />} />
        <Route path="m/income" element={<Income />} />
        <Route path="m/expense" element={<Expense />} />
        <Route path="m/order" element={<Order />} />
        <Route path="m/application" element={<Applications />} />
        <Route path="m/salary" element={<SalaryOverview />} />
        <Route path="m/logout" element={<LoginLogOut />} />
        <Route path="m/order/packages" element={<PackagesOrder />} />
        <Route path="m/order/products" element={<ProductsOrder />} />
        {/* Error Page */}
        <Route path="*" element={<NoMatch />} />

      </Routes>
      <div className="footer"> 
        <FooterSec />
      </div>
    </div>
  );
};

export default App;
