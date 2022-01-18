import React from "react";
import "./s.ChartBar.scss";

//* this component is used in (Chart.jsx)
function ChartBar({ label, maxValue, value }) {
  let barFillHeight = "0%";

  if (maxValue > 0) {
    const high = (value / maxValue) * 100;
    barFillHeight = `${Math.round(high)}%`;
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          style={{ height: barFillHeight }}
          className="chart-bar__fill"
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
}

export default ChartBar;
