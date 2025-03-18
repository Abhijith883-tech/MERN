import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SalesChart = ({ data }) => {
  const chartData = {
    labels: data.map((entry) => entry.date), // Dates on x-axis
    datasets: [
      {
        label: "Sales ($)",
        data: data.map((entry) => entry.sales), // Sales on y-axis
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        tension: 0.4, // Smooth curve
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
    },
  };

  return (
    <div style={{width:'500px',height:'300px'}}>
        <Line data={chartData} options={options} />;
    </div>
  );
};

export default SalesChart;