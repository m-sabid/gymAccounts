import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from "react-bootstrap";

const AllProducts = () => {
    const [modalShow, setModalShow] = useState(false);
    const [modalShowIncome, setModalShowIncome] = useState(false);
    const [gymProduct, setGymProduct] = useState([]);

    useEffect(() => {
        const url =
          "https://gym-management97.herokuapp.com/api/complete_product_orders";
    
        fetch(url, {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU5MDA4NjgzLCJpYXQiOjE2NTg5MjIyODMsImp0aSI6IjMwMjk1NzcyNjc2MTRiMjNiMTZmYmZjMzZkMjI3NjI3IiwidXNlcl9pZCI6MTF9.qMMBTF-Tgq3KrkTl8gdSwrHyllBjrvUveJq3tgrPHIc",
          },
        })
          .then((res) => res.json())
          .then((data) => setGymProduct(data.data));
      }, []);
    
      // console.log("i am data", overview);
    
      // totalExpense
      const totalExpense = gymProduct
        .map((dt) => dt.expense)
        .reduce((a, b) => a + b, 0);
      // Total Income
      const totalIncome = gymProduct
        .map((dt) => {
          let x = parseInt(dt.total_price);
          return x;
        })
        .reduce((a, b) => a + b, 0);
      // Current Balance
      const currentBalance = totalIncome - totalExpense;
    
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
              {/* Modal Body */}
              {/* Modal Body */}
              {/* Modal Body */}
              <Modal.Body>
                {/* Expense Form */}
    
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    {/* Expense source */}
                    <Form.Label>Source Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter The Name of Expense Source"
                    />
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                  </Form.Group>
                  {/* Amount */}
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter The Amount of Expense"
                    />
                  </Form.Group>
                  {/* Remarks */}
                  {/* Date */}
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Expense Date</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                  {/* Date */}
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Write Any Message For This Income"
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
    
                {/* Income Form */}
              </Modal.Body>
              {/* Modal Body */}
              {/* Modal Body */}
              {/* Modal Body */}
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
                  <Form.Control
                    type="text"
                    placeholder="Enter The Name of Income Source"
                  />
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>
                {/* Amount */}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter The Amount of Income"
                  />
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
                  <Form.Control
                    as="textarea"
                    placeholder="Write Any Message For This Income"
                  />
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


    useEffect(() => {
        const url =
          "https://gym-management97.herokuapp.com/api/complete_product_orders";
    
        fetch(url, {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU5MDA4NjgzLCJpYXQiOjE2NTg5MjIyODMsImp0aSI6IjMwMjk1NzcyNjc2MTRiMjNiMTZmYmZjMzZkMjI3NjI3IiwidXNlcl9pZCI6MTF9.qMMBTF-Tgq3KrkTl8gdSwrHyllBjrvUveJq3tgrPHIc",
          },
        })
          .then((res) => res.json())
          .then((data) => setGymProduct(data.data));
      }, []);
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
            <h5 style={{ fontWeight: "700" }}>
              {/* ${currentBalance} */}
              $10000
            </h5>
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
              {/* ${totalExpense} */}$ 30000
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
        {gymProduct.map((dt) => (
            <>
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
            </>
      ))}
        </>
    );
};

export default AllProducts;