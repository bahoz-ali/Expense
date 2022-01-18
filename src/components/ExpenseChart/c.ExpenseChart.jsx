import React from "react";
import Chart from "../chart/c.Chart";

function ExpenseChart({ expenses }) {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  expenses.forEach((exp) => {
    const monthIndex = exp.date.getMonth();
    chartDataPoints[monthIndex].value += exp.amount;
  });

  return <Chart dataPoints={chartDataPoints} />;
}

export default ExpenseChart;
