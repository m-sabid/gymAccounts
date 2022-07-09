import React from "react";
import { FiFilter } from "react-icons/fi";
import "./SalaryOverview.css";
import FData from "./salary.json";

const SalaryOverview = () => {
  // Date
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = today.toLocaleString("bd", { month: "long" }); //January is 0!
  const yyyy = today.getFullYear();
  const dayName = today.toLocaleString("bd", { weekday: "long" });

  today = dd + " " + mm + " " + yyyy + ", " + dayName;
  // Date

  return (
    <div>
      <div>
        <div className="mt-3">
          <h6 className="form-h6">Salary Overview</h6>
        </div>
      </div>
      <div className="b-box">
        <div className="d-flex">
          <div className="b-1">
            <p>Total Pending</p>
            <h5 style={{ fontWeight: "700" }}>$100.00</h5>
          </div>
          <div className="b-1">
            <p className="ad-top">+</p>
            <p style={{ color: "#F04F23", marginTop: "-30px" }}>Total Unpaid</p>
            <h5 style={{ fontWeight: "700", color: "#F04F23" }}>$100.00</h5>
          </div>
          <div className="b-3">
            <p className="ad-top">+</p>
            <p style={{ color: "#7CBC71", marginTop: "-30px" }}>Total Paid</p>
            <h5 style={{ fontWeight: "700", color: "#7CBC71" }}>$100.00</h5>
          </div>
        </div>
      </div>
      <div className="time-fl">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <div>
              <p id="date">{today}</p>
            </div>
            <div>
              <input className="date-input ms-4" type="date" />
            </div>
          </div>
          <div>
            <p className="fil">
              <FiFilter className="me-2" />
              Filter list
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        {/* 1 */}
        {FData.map((dt) => (
          <div className="sel-list d-flex justify-content-between">
            <div>
              <img
                className="ava-img"
                src={dt.profileImage}
                alt=""
              />
            </div>
            <div className="ms-5">
              <p>{dt.SDate}</p>
            </div>
            <div className="ms-5">
              <p>{dt.userName}</p>
            </div>
            <div className="ms-5">
              <p
                className={`${
                  dt.Status === "Paid"
                    ? "SPaid"
                    : dt.Status === "Hold"
                    ? "SHold"
                    : dt.Status === "Un paid"
                    ? "SUnpaid"
                    : ""
                }`}
              >
                {dt.Status}
              </p>
            </div>
          </div>
        ))
        }
      </div>
    </div>
  );
};

export default SalaryOverview;
