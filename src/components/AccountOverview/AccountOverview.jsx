import React from "react";
import "./AccountOverview.css";
import { FiFilter } from "react-icons/fi";
import Overview from "./Overview.json";

const AccountOverview = () => {

    // currentBalance
    const currentBalance = Overview.map(dt =>(
        dt.income
    )).reduce((a, b) => a + b, 0);

    // totalExpense
    const totalExpense = Overview.map(dt =>(
        dt.expense
    )).reduce((a, b) => a + b, 0);
    // Total Income
    const totalIncome =  currentBalance - totalExpense

  // Date
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = today.toLocaleString("bd", { month: "long" }); //January is 0!
  const yyyy = today.getFullYear();
  const dayName = today.toLocaleString("bd", { weekday: "long" });

  today = dd + " " + mm + " " + yyyy + ", " + dayName;
  // Date

  return (
    <>
      <div>
        <div className="mt-3">
          <h6 className="form-h6">Account Overview</h6>
        </div>
      </div>
      <div className="b-box">
        <div className="d-flex">
          <div className="b-1">
            <p>Current Balance</p>
            <h5 style={{ fontWeight: "700" }}>${currentBalance}</h5>
          </div>
          <div className="b-1">
            <p className="ad-top">+</p>
            <p style={{ color: "#F04F23", marginTop: "-30px" }}>
              Total Expense
            </p>
            <h5 style={{ fontWeight: "700", color: "#F04F23" }}>${totalExpense}</h5>
          </div>
          <div className="b-3">
            <p className="ad-top">+</p>
            <p style={{ color: "#7CBC71", marginTop: "-30px" }}>Total Income</p>
            <h5 style={{ fontWeight: "700", color: "#7CBC71" }}>${totalIncome}</h5>
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
      {Overview.map((dt) => (
        <>
          <div className="mt-4">
            <div className="sel-list d-flex justify-content-between">
              <div className="ms-5">
                <p>{dt.date}</p>
              </div>
              <div className="ms-5">
                <p>{dt.pName}</p>
              </div>
              <div className="ms-5">
                <p>${dt.income}</p>
              </div>
              <button className="detail-btn ms-5">Details</button>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default AccountOverview;
