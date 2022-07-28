import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./PackagesOrder.css";
import { NavLink } from "react-router-dom";
import AuthUser from "../../LoginLogOut/AuthUser/AuthUser";

const PackagesOrder = () => {
  const { getToken } = AuthUser();
  const token = getToken();


  const [packages, setPackages] = useState([]);
  useEffect(() => {
    const url = "https://gym-management97.herokuapp.com/api/package_order";

    fetch(url, {
      method: "GET",
      headers: {
        Authorization:
          `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setPackages(data.data));
  }, []);
  return (
    <>
      <div className="order-top">
        <div className="d-flex">
          <div>
            <FaShoppingCart className="o-s-i" />
          </div>
          <div className="ms-4">
            <p className="o-p">ORDERS</p>
            <h6 className="o-h6">125</h6>
          </div>
        </div>
      </div>
      <div
        className="mt-4 d-flex justify-content-between"
        style={{ marginBottom: "50px" }}
      >
        <h6 className="form-h6">Package Orders List</h6>
        {/* Filter */}
        <NavLink to="/order" className="fil">
          All
        </NavLink>
        <NavLink to="/order/products" className="fil">
          Products
        </NavLink>
        <NavLink to="/order/packages" className="fil">
          Packages
        </NavLink>
      </div>

      {/* Body Data */}
      {packages.map((dt) => (
        <>
          <div className="sel-list d-flex justify-content-between">
            <div className="ms-5">
              <p>Package Id: {dt.id}</p>
            </div>
            <div className="ms-5"></div>
            <div className="ms-5">
              <p>{dt.package.package_type.package_title}</p>
            </div>
            <div className="ms-5">
              <p>৳ {parseInt(dt.package.discounted_price)}</p>
            </div>
            <div className="ms-5">
              <p className="OComplete">Complete</p>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default PackagesOrder;
