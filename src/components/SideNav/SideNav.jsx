import React from "react";
import { HiDocumentText } from "react-icons/hi";
import {

  FaFileAlt,
  FaHome,
  FaMoneyBill,
  FaRegSun,
  FaShoppingCart,
  FaSignOutAlt,
  FaStar,
  FaUserAlt,
  FaHandHoldingUsd,
  FaBabyCarriage,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./SideNav.css";

const SideNav = () => {
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
          <NavLink to="m/profile" className="navItem">
            <li>
              <FaUserAlt />
              <br />
              Profile
            </li>
          </NavLink>
          <NavLink to="m/salary" className="navItem">
            <li>
              <FaHandHoldingUsd />
              <br />
              Salary
            </li>
          </NavLink>
          <NavLink to="m/form" className="navItem">
            <li>
              {" "}
              <FaFileAlt />
              <br />
              Form
            </li>
          </NavLink>
          <NavLink to="m/order" className="navItem">
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
          <NavLink to="m/income" className="navItem">
            <li>
              {" "}
              <FaMoneyBill />
              <br />
               Incomes
            </li>
          </NavLink>
          <NavLink to="m/expense" className="navItem">
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
          <NavLink to="m/auth" className="navItem">
            <li>
              {" "}
              <FaSignOutAlt />
              <br />
              Log out / log in 
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
