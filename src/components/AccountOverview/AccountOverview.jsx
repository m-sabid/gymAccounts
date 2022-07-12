import React, { useState } from "react";
import "./AccountOverview.css";
import { FiFilter } from "react-icons/fi";
import Overview from "./Overview.json";
import { Button, Form, Modal } from "react-bootstrap";

const AccountOverview = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalShowIncome, setModalShowIncome] = useState(false);
  // currentBalance
  const currentBalance = Overview.map((dt) => dt.income).reduce(
    (a, b) => a + b,
    0
  );

  // totalExpense
  const totalExpense = Overview.map((dt) => dt.expense).reduce(
    (a, b) => a + b,
    0
  );
  // Total Income
  const totalIncome = currentBalance - totalExpense;

  // Add Expense BS Modals
  // Add Expense BS Modals
  // Add Expense BS Modals
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Expense
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" /> <br />
          <input type="text" /> <br />
          <input type="text" /> <br />
          <input type="submit" value="Submit" />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  // Add Expense BS Modals
  // Add Expense BS Modals
  // Add Expense BS Modals

  // add income modals
  // add income modals
  // add income modals
  function MyIncomeModals(params) {
    return (
      <Modal
        {...params}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Income
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Income Form */}

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {/* income source */}
              <Form.Label>Source Name</Form.Label>
              <Form.Control type="text" placeholder="Enter The Name of Income Source" />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>
              {/* Amount */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Amount</Form.Label>
              <Form.Control type="number" placeholder="Enter The Amount of Income" />
            </Form.Group>
            {/* Remarks */}
            {/* Date */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Income Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            {/* Date */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" placeholder="Write Any Message For This Income" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

          {/* Income Form */}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={params.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  // add income modals
  // add income modals
  // add income modals

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
            {/* Add Expense BS Modals*/}
            {/* Add Expense BS Modals*/}
            {/* Add Expense BS Modals*/}
            <p className="ad-top">
              <Button onClick={() => setModalShow(true)}>+</Button>
            </p>

            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />

            {/* Add Expense BS Modals*/}
            {/* Add Expense BS Modals*/}
            {/* Add Expense BS Modals*/}
            <p style={{ color: "#F04F23", marginTop: "-30px" }}>
              Total Expense
            </p>
            <h5 style={{ fontWeight: "700", color: "#F04F23" }}>
              ${totalExpense}
            </h5>
          </div>
          <div className="b-3">
            {/* add income modal */}
            {/* add income modal */}
            {/* add income modal */}
            <p className="ad-top">
              <Button onClick={() => setModalShowIncome(true)}>+</Button>
            </p>
            <MyIncomeModals
              show={modalShowIncome}
              onHide={() => setModalShowIncome(false)}
            />

            {/* add income modal */}
            {/* add income modal */}
            {/* add income modal */}
            <p style={{ color: "#7CBC71", marginTop: "-30px" }}>Total Income</p>
            <h5 style={{ fontWeight: "700", color: "#7CBC71" }}>
              ${totalIncome}
            </h5>
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
