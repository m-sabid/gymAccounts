import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export function MyVerticallyCenteredModal(props) {
  const [expenseSource, setExpenseSource] = useState();
  const [expenseAmount, setExpenseAmount] = useState();
  const [expenseDate, setExpenseDate] = useState();
  const [expenseMessage, setExpenseMessage] = useState();
  const [expenseFile, setExpenseFile] = useState();

  console.log("expenseSource:", expenseSource);
  console.log("expenseAmount:", expenseAmount);
  console.log("expenseDate:", expenseDate);
  console.log("expenseMessage:", expenseMessage);
  console.log("expenseFile:", expenseFile);

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
                onChange={(e) => setExpenseSource(e.target.value)}
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
                onChange={(e) => setExpenseAmount(e.target.value)}
              />
            </Form.Group>
            {/* Remarks */}
            {/* Date */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Expense Date</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => setExpenseDate(e.target.value)}
              />
            </Form.Group>
            {/* Date */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Write Any Message For This Income"
                onChange={(e) => setExpenseMessage(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Upload File</Form.Label>
              <Form.Control
                type="file"
                placeholder="Write Any Message For This Income"
                onChange={(e) => setExpenseFile(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onChange={(e) => setExpenseMessage(e.target.value)}
            >
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
export function MyIncomeModals(params) {
  //   income
  const [incomeSource, setIncomeSource] = useState();
  const [incomeAmount, setIncomeAmount] = useState();
  const [incomeDate, setIncomeDate] = useState();
  const [incomeMessage, setIncomeMessage] = useState();

  console.log("incomeSource:", incomeSource);
  console.log("incomeAmount:", incomeAmount);
  console.log("incomeDate:", incomeDate);
  console.log("incomeMessage:", incomeMessage);
  return (
    <Modal
      {...params}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Income</Modal.Title>
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
              onChange={(e) => setIncomeSource(e.target.value)}
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
              onChange={(e) => setIncomeAmount(e.target.value)}
            />
          </Form.Group>
          {/* Remarks */}
          {/* Date */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Income Date</Form.Label>
            <Form.Control
              type="date"
              onChange={(e) => setIncomeDate(e.target.value)}
            />
          </Form.Group>
          {/* Date */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Write Any Message For This Income"
              onChange={(e) => setIncomeMessage(e.target.value)}
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
