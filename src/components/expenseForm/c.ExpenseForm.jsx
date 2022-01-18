import React, { useState } from "react";
import "./s.ExpenseForm.scss";
import { v4 as uuid } from "uuid";

//* this component is used in (NewExpense.jsx)
function ExpenseForm({ onSaveExpenseData }) {
  const initialUserInput = {
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  };

  const [userInput, setUserInput] = useState(initialUserInput);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let {
      enteredTitle: title,
      enteredAmount: amount,
      enteredDate: date,
    } = userInput;

    amount = parseInt(amount);
    const expenseData = {
      title,
      amount: amount,
      date: new Date(date),
      id: uuid(),
    };
    onSaveExpenseData(expenseData);

    setUserInput(initialUserInput); //* to clear up the form inputs.
  };

  return (
    <form onSubmit={handleSubmit} action="">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            name="enteredTitle"
            id=""
            onChange={handleChange}
            value={userInput.enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="text"
            name="enteredAmount"
            value={userInput.enteredAmount}
            onChange={handleChange}
            min="0.01"
            step="0.01"
            id=""
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            name="enteredDate"
            value={userInput.enteredDate}
            onChange={handleChange}
            min="2020-01-01"
            max="2023-12-20"
            step="0.01"
            id=""
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
