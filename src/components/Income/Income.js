import React, { useState, useEffect } from "react";
import { FiFilter } from "react-icons/fi";
import AuthUser from "../LoginLogOut/AuthUser/AuthUser";

const Income = () => {
    const { getToken } = AuthUser();
    const token = getToken();



  const [income, setIncome] = useState([]);

  useEffect(() => {
    const url =
      "https://gym-management97.herokuapp.com/api/complete_product_orders";

    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setIncome(data.data));
  }, []);

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
          <h6 className="form-h6">Income History</h6>
        </div>
      </div>
      <div className="time-fl">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <div>
              <p id="date">{today}</p>
            </div>
            <div>
              {/* <input className="date-input ms-4" type="date" /> */}
            </div>
          </div>
          {/* <div>
            <p className="fil">
              <FiFilter className="me-2" />
              Filter list
            </p>
          </div> */}
        </div>
      </div>

      {income.map((dt) => (
        <div className="mt-4">
          <div className="mt-4">
            <div className="sel-list d-flex justify-content-between">
              <div className="ms-5">
                <p>{dt.order_date}</p>
              </div>
              <div className="ms-5">
                <p>{dt.user}</p>
              </div>
              <div className="ms-5">
                <p>${dt.total_price}</p>
              </div>
              <div className="ms-5">
                <p>{dt.payment_type_value}</p>
              </div>
              <button className="detail-btn ms-5">Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Income;
