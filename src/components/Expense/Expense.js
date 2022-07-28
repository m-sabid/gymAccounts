import React, { useEffect, useState } from "react";
import { FiFilter } from "react-icons/fi";
import AuthUser from "../LoginLogOut/AuthUser/AuthUser";

const Expense = () => {
  const { getToken } = AuthUser();
  const token = getToken();

  const [expense, setExpense] = useState([]);

  // Date
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = today.toLocaleString("bd", { month: "long" }); //January is 0!
  const yyyy = today.getFullYear();
  const dayName = today.toLocaleString("bd", { weekday: "long" });

  today = dd + " " + mm + " " + yyyy + ", " + dayName;
  // Date

  useEffect(() => {
    const expenseUrl = "https://gym-management97.herokuapp.com/api/expense";
    fetch(expenseUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setExpense(data.data));
  }, []);

//   console.log(expense);

  return (
    <div>
      <div>
        <div className="mt-3">
          <h6 className="form-h6">Expense History</h6>
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
      {expense.map((dt) => (
        <div className="mt-4">
          <div className="sel-list d-flex justify-content-between">
            <div>
              <p>{dt.name}</p>
            </div>
            <div className="ms-5">
              <p>{dt.expense_date}</p>
            </div>
            <div className="ms-5">
              <p>{dt.amount}</p>
            </div>
            <div className="ms-5">
              <p>{dt.message}</p>
            </div>
            <button className="detail-btn ms-5">Details</button>
          </div>
        </div>
      ))
      }
    </div>
  );
};

export default Expense;
