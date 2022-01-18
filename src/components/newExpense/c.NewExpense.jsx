import React, { useState } from "react";
import ExpenseForm from "../expenseForm/c.ExpenseForm";
import "./s.NewExpense.scss";

//* this component is used in (ExpensePage.jsx)
function NewExpense({ onAddExpense }) {
  const [toggleForm, setToggleForm] = useState(false);

  function toggle() {
    setToggleForm(!toggleForm);
  }


  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData };
    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!toggleForm && <button onClick={toggle}>Add Expense</button>}
      {toggleForm && <ExpenseForm onClose={toggle} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
}

export default NewExpense;
