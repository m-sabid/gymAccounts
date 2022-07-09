import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import "./Order.css";
import FakeData from "./FakeOrder.json";


const Order = () => {
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
      <div className="mt-4 d-flex justify-content-between">
        <h6 className="form-h6">Orders List</h6>
        <div>
          <p className="fil">
            <FiFilter className="me-2" />
            Filter list
          </p>
        </div>
      </div>
      {FakeData.map((dt) => (
        <div className="sel-list d-flex justify-content-between">
          <div className="ms-5">
            <p>{dt.orderId}</p>
          </div>
          <div className="ms-5">
            <p>{dt.Date}</p>
          </div>
          <div className="ms-5">
            <p>{dt.PName}</p>
          </div>
          <div className="ms-5">
            <p>
              {dt.Amount}
            </p>
          </div>
          <div className="ms-5">
            <p className={`${
                dt.Status === "Complete"
                  ? "OComplete"
                  : dt.Status === "Processing"
                  ? "OProcessing"
                  : dt.Status === "Hold"
                  ? "OHold"
                  : ""
              }`}>
              {dt.Status}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Order;
