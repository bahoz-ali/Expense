import React from "react";
import ExpenseItem from "../../components/expenseItem/c.ExpenseItem";
import "./s.expensePage.scss";

function ExpensePage() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 68.3,
      date: new Date(2022, 1, 10),
    },
  ];

  return (
    <div className="expense-page">
      <div className="expenses">
        <ExpenseItem expenseItem={expenses[0]} />
        <ExpenseItem expenseItem={expenses[0]} />
      </div>
    </div>
  );
}

export default ExpensePage;
