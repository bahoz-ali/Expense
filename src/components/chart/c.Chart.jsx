import React from "react";
import ChartBar from "./c.ChartBar";
import "./s.Chart.scss";

function Chart({ dataPoints }) {
  const dataPointValues = dataPoints.map((data) => data.value);
  const totalMaximum = Math.max(...dataPointValues);
  
  return (
    <div className="chart">
      {dataPoints.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          maxValue={totalMaximum}
          label={data.label}
        />
      ))}
    </div>
  );
}

export default Chart;
