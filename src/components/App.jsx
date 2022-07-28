import React from "react";
import { Route, Routes } from "react-router-dom";
import AllProducts from "./AccountOverview/AllProducts/AllProducts";
import "./App.css";
import Applications from "./Applications/Applications";
import Expense from "./Expense/Expense";
import FooterSec from "./Footer/FooterSec";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Income from "./Income/Income";
import LoginLogOut from "./LoginLogOut/LoginLogOut";
import Order from "./Order/Order";
import PackagesOrder from "./Order/PackagesOrder/PackagesOrder";
import ProductsOrder from "./Order/ProductsOrder/ProductsOrder";
import PrivetOutlet from "./PrivetOutlet/PrivetOutlet";
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

        <Route path="/*" element={<PrivetOutlet />}>
          <Route path="m/profile" element={<ProfilePage />} />
          <Route path="m/form" element={<TFrom />} />
          <Route path="m/income" element={<Income />} />
          <Route path="m/expense" element={<Expense />} />
          <Route path="m/order" element={<Order />} />
          <Route path="m/application" element={<Applications />} />
          <Route path="m/salary" element={<SalaryOverview />} />
          <Route path="m/order/packages" element={<PackagesOrder />} />
          <Route path="m/order/products" element={<ProductsOrder />} />
          <Route path="m/overview" element={<AllProducts />} />
          
        </Route>
          <Route path="m/auth" element={<LoginLogOut />} />
      </Routes>
      <div className="footer">
        <FooterSec />
      </div>
    </div>
  );
};

export default App;
