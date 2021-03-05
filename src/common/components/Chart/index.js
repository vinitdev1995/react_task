import React from "react";

import { Line } from "react-chartjs-2";

const ChartReusable = ({ data }) => {
  const sortData = data.sort((a, b) => b.name - a.name);
  const label = sortData.map(a => a.name);
  const totalPrice = sortData.map(a => parseFloat(a.total_price));
  const chartData = {
    labels: label,
    datasets: [
      {
        label: "Price",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: totalPrice
      }
    ]
  };
  return (
    <div>
      <h2>Data Analysis</h2>
      <Line data={chartData} />
    </div>
  );
};

export default ChartReusable;
