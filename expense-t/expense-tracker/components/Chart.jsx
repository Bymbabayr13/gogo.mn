import React, { useEffect, useState } from "react";
const dayjs = require('dayjs')
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export function Chart() {
  const [chartArr, setChartArr] = useState([]);
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Expenses tracker 2024",
      },
    },

    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
  let expanse = [];
  let income = [];

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
 
  function fetchdata() {
    let item = [];
    fetch("http://localhost:4000/Transactions")
      .then((res) => res.json())
      .then((data) => setChartArr(data));
  }
  const months = dayjs(chartArr.created_at).format('MMMM')
  
  
  

  useEffect(() => {
    fetchdata();

    labels.map((item)=>{
     if(item == months){
     
    }
    })
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: "Expanse",
        data: expanse,
        backgroundColor: "red",
        stack: "Stack 0",
      },
      {
        label: "Income",
        data: income,
        backgroundColor: "green",
        stack: "Stack 1",
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
