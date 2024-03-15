import { Vector } from "@/components/icons/Vector";
import axios from "axios";
import { useState } from "react";
import React from "react";
import Select from "react-select";
import { FaMoneyBill } from "react-icons/fa";
import { GiTwoCoins } from "react-icons/gi";
export default function confirmation() {
  const [step1, setStep1] = useState(false);
  const [selectValue, setSelectValue] = useState();
  const [hidden, setHidden] = useState(false);
  const [accountAmount, setAccountAmount] = useState("");
  const [second, SetSecond] = useState("false");
  const [second1, SetSecond1] = useState("false");

  const arr = [
    {
      value: "MNT",
      label: "MNT",
    },
    {
      value: "USD",
      label: "USD",
    },
    {
      value: "EUR",
      label: "EUR",
    },
  ];
  const options = arr.map((items) => {
    return {
      value: items.value,
      label: items.label,
    };
  });
  function confirmBtn() {
    if (selectValue) {
      setHidden(true);
      setStep1(true);
    }
  }
  function secondStage() {
    if (accountAmount) {
      SetSecond(true);
      SetSecond1(true);
    }
  }
  console.log(selectValue, hidden);

  return (
    <div className="bg-white h-screen pt-20">
      <div className="  flex justify-center items-center p-4">
        <div className="text-black">
          <div className="flex gap-2 mb-14  justify-center items-center">
            <Vector /> <p>Geld</p>
          </div>
          <ul className="steps steps-vertical lg:steps-horizontal w-[330px]">
            <li className="step step-primary">Currency</li>
            <li className={`step , ${step1 == true ? "step-primary" : ""}`}>
              Balance
            </li>
            <li className={`step , ${second == true ? "step-primary" : ""}`}>
              Finish
            </li>
          </ul>
          <div className={`${hidden == true ? "hidden" : "block"}`}>
            <div className="mx-auto flex justify-center  mt-20">
              <FaMoneyBill size="50px" />
            </div>
            <h1 className="text-center text-black">Select base currency</h1>
            <div className="mt-2">
              <Select
                className="w-full"
                options={options}
                onChange={(value) => setSelectValue(value)}
                defaultValue={selectValue}
              />

              <button
                onClick={confirmBtn}
                className="btn  bg-blue-600 w-full mt-4"
              >
                confirm
              </button>
            </div>
          </div>
          <div className={`${second1 == true ? "hidden" : ""}`}>
            <div className={`${hidden == true ? "block" : "hidden"}`}>
              <div className="mx-auto flex justify-center  mt-20">
                <GiTwoCoins size="50px" />
              </div>
              <h1 className="text-center text-black">
                Set up your cash Balance{" "}
              </h1>
              <div className="mt-2">
                <input
                  type="number"
                  className="input border w-full"
                  placeholder="amout"
                  onChange={(value) => setAccountAmount(value)}
                ></input>
                <button
                  onClick={secondStage}
                  className="btn  bg-blue-600 w-full mt-4"
                >
                  confirm
                </button>
              </div>
            </div>
          </div>

          <div className={`${second1 == false ? "hidden" : "block"}`}>
            <div className={`${hidden == false ? "hidden" : ""}`}>
              <div className="mx-auto flex justify-center  mt-20">
                <GiTwoCoins size="50px" />
              </div>
              <h1 className="text-center text-black">Good job</h1>
              <div className="mt-2">
                <a href="/dashboard" className="btn  bg-blue-600 w-full mt-4">
                  confirm
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
