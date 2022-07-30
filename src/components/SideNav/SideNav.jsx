import React from "react";
import {
  FaFileAlt,
  FaHome,
  FaMoneyBill,
  FaShoppingCart,
  FaSignOutAlt,
  FaUserAlt,
  FaHandHoldingUsd,
  FaBabyCarriage,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import AuthUser from "../LoginLogOut/AuthUser/AuthUser";
import "./SideNav.css";

const SideNav = () => {
  const {token, logout} = AuthUser();

  const logOutUser = () => {
    if(token != undefined){
      logout();
    }
  }
  return (
    <div className="SideNav">
      <div className="Nav">
        <ul>
          <NavLink to="/" className="navItem">
            <li>
              <FaHome />
              <br />
              Home
            </li>
          </NavLink>
          <NavLink to="/profile" className="navItem">
            <li>
              <FaUserAlt />
              <br />
              Profile
            </li>
          </NavLink>
          <NavLink to="/salary" className="navItem">
            <li>
              <FaHandHoldingUsd />
              <br />
              Salary
            </li>
          </NavLink>
          <NavLink to="/form" className="navItem">
            <li>
              {" "}
              <FaFileAlt />
              <br />
              Form
            </li>
          </NavLink>
          <NavLink to="/order" className="navItem">
            <li>
              {" "}
              <FaShoppingCart />
              <br />
              Orders
            </li>
          </NavLink>
          {/* <NavLink to="m/application" className="navItem">
            <li>
              {" "}
              <HiDocumentText />
              <br />
              Applications
            </li>
          </NavLink> */}
          <NavLink to="/income" className="navItem">
            <li>
              {" "}
              <FaMoneyBill />
              <br />
               Incomes
            </li>
          </NavLink>
          <NavLink to="/expense" className="navItem">
            <li>
              {" "}
              <FaBabyCarriage />
              <br />
               Expense
            </li>
          </NavLink>
          {/* <NavLink to="m/settings" className="navItem">
            <li>
              {" "}
              <FaRegSun />
              <br />
              Settings
            </li>
          </NavLink> */}
          {/* <NavLink to="/auth" className="navItem">
            <li>
              {" "}
              <FaSignOutAlt />
              <br />
              log in 
            </li>
          </NavLink> */}
          <NavLink to="/auth" className="navItem" onClick={logOutUser}>
            <li>
              {" "}
              <FaSignOutAlt />
              <br />
              Log out
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
