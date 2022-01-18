import React from "react";
import ExpenseForm from "../expenseForm/c.ExpenseForm";
import "./s.NewExpense.scss";

//* this component is used in (ExpensePage.jsx)
function NewExpense({ onAddExpense }) {
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData };
    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
