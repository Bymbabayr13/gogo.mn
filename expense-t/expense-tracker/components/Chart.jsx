import React, { useEffect, useState } from "react";
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
  chartArr.map((item) => {
    if (item.amount_type == "Exp") {
      expanse.push(item.amount);
    } else {
      income.push(item.amount);
    }
  });
  console.log(expanse, income);

  function fetchdata() {
    let item = [];
    fetch("http://localhost:4000/Transactions")
      .then((res) => res.json())
      .then((data) => setChartArr(data));
  }

  useEffect(() => {
    fetchdata();
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
        label: "",
        data: income,
        backgroundColor: "green",
        stack: "Stack 1",
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
