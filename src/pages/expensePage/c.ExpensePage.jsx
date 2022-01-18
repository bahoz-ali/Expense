import React, { useState } from "react";
import ExpenseChart from "../../components/ExpenseChart/c.ExpenseChart";
import ExpenseFilter from "../../components/expenseFilter/c.ExpenseFilter";
import ExpenseItem from "../../components/expenseItem/c.ExpenseItem";
import NewExpense from "../../components/newExpense/c.NewExpense";
import { v4 as uuid } from "uuid";
import "./s.expensePage.scss";

function ExpensePage() {
  const DUMMY_EXPENSES = [
    {
      id: uuid(),
      title: "Car Insurance",
      amount: 50.3,
      date: new Date(2022, 1, 10),
    },
    {
      id: uuid(),
      title: "Car Insurance",
      amount: 100.0,
      date: new Date(2022, 1, 10),
    },
    {
      id: uuid(),
      title: "new clothes",
      amount: 94.3,
      date: new Date(2021, 1, 10),
    },
    {
      id: uuid(),
      title: "new T-shirt",
      amount: 117.32,
      date: new Date(2020, 1, 10),
    },
  ];

  const [expenses, setExpense] = useState(DUMMY_EXPENSES);
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const addExpenseHandler = (expense) => {
    setExpense((prev) => {
      return [expense, ...prev];
    });
  };

  const filteredExpenses = expenses.filter(
    (exp) => exp.date.getFullYear().toString() === filteredYear
  );

  return (
    <div className="expense-page">
      <NewExpense onAddExpense={addExpenseHandler} />
      <div className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        {filteredExpenses.length > 0 ? (
          filteredExpenses.map((expense) => (
            <ExpenseItem key={expense.id} expenseItem={expense} />
          ))
        ) : (
          <h3 style={{ color: "white" }}>NO EXPENSE FOUND.!</h3>
        )}
      </div>
    </div>
  );
}

export default ExpensePage;
