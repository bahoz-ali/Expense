import React from "react";
import ExpenseDate from "../expenseDate/c.ExpenseDate";
import "./s.ExpenseItem.scss";

//* this component is used inside (ExpensePage.jsx)
function ExpenseItem({ expenseItem }) {
  const { id, title, amount, date } = expenseItem;

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{`$${amount}`}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
