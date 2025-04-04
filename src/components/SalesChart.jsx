import React from "react";
import { Line } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Register Chart.js components
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


const data = [
  { category: 'Men', sales: 1200 },
  { category: 'Women', sales: 1500 },
  { category: 'Kids', sales: 800 },
  
];


const SalesChart = () => {


  return (
    <div style={{ width: '500px', height: '300px' }}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#8884d8" barSize={50} />
        </BarChart>
      </ResponsiveContainer>    </div>
  );
};

export default SalesChart;