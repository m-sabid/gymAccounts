import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./ProductsOrder.css";
import AuthUser from "../../LoginLogOut/AuthUser/AuthUser";

const ProductsOrder = () => {
  const { getToken } = AuthUser();
  const token = getToken();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = "https://gym-management97.herokuapp.com/api/product_orders";

    fetch(url, {
      method: "GET",
      headers: {
        Authorization:
          `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
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
        <h6 className="form-h6">Product Orders List</h6>
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
      {/* Body Section */}
      {products.map((dt) => (
        <>
          {dt.order_details.map((item) => (
            <div className="sel-list d-flex justify-content-between">
              <div className="ms-5">
                <p>Product Id: {item.id}</p>
              </div>
              <div className="ms-5"></div>
              <div className="ms-5">
                <p>{item.name}</p>
              </div>
              <div className="ms-5">
                <p>৳ {item.price}</p>
              </div>
              <div className="ms-5">
                <p
                  className={`${
                    item.status === "complete"
                      ? "OComplete"
                      : item.status === "processing"
                      ? "OProcessing"
                      : item.status === "hold"
                      ? "OHold"
                      : ""
                  }`}
                >
                  {item.status}
                </p>
              </div>
            </div>
          ))}
        </>
      ))}
    </>
  );
};

export default ProductsOrder;
