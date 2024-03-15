import React, { useEffect, useState } from "react";
const dayjs = require("dayjs");
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
import exp from "constants";

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

  let January = 0;
  let February = 0;
  let March = 0;
  let April = 0;
  let May = 0;
  let June = 0;
  let July = 0;
  let August = 0;
  let September = 0;
  let October = 0;
  let November = 0;
  let December = 0;

  let January1 = 0;
  let February1 = 0;
  let March1 = 0;
  let April1 = 0;
  let May1 = 0;
  let June1 = 0;
  let July1 = 0;
  let August1 = 0;
  let September1 = 0;
  let October1 = 0;
  let November1 = 0;
  let December1 = 0;
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
    fetch("http://localhost:4000/Transactions")
      .then((res) => res.json())
      .then((data) => setChartArr(data));
  }

  useEffect(() => {
    fetchdata();

    // labels.map((item) => {
    //   if (item == months) {
    //   }
    // });
  }, []);

  const marchStart = new Date("2024-3-01");
  const marchEnd = new Date("2024-3-31");
  console.log();
  let value = 0;
  let result = 0;

  const income1 = chartArr.filter((item) => item.amount_type == "Inc");
  const expense1 = chartArr.filter((item) => item.amount_type == "Exp");
  console.log(income1, expense1);
  for (let index = 0; index < income1.length; index++) {
    const march = dayjs(income1[index].dates).format("YYYY-MM-DD");
    const march1 = new Date(march);

    if (marchStart < march1 && march1 < marchEnd) {
      value = income1[index].amount + value;
      console.log(value, "value");
      March = March + value;
      console.log(March);
    }
  }
  //1
  for (let index = 0; index < expense1.length; index++) {
    const march = dayjs(expense1[index].dates).format("YYYY-MM-DD");
    const march1 = new Date(march);

    if (marchStart < march1 && march1 < marchEnd) {
      result = expense1[index].amount + result;
      console.log(result, "value");
      March1 = March1 + result;
      console.log(March1);
    }
  }

  let income = [
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December,
  ];
  let expanse = [
    January1,
    February1,
    March1,
    April1,
    May1,
    June1,
    July1,
    August1,
    September1,
    October1,
    November1,
    December1,
  ];
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
