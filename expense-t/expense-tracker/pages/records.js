import { Header } from "@/components/Header";
import { Showmodal } from "@/components/Showmodal";
import axios from "axios";
import { useEffect, useState } from "react";
export default function () {
  const [render, setRender] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  function fetchdata() {
    fetch("http://localhost:4000/Transactions", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => setRender(data));
  }

  async function removeCard(id) {
    if (confirm("delete?")) {
      try {
        await axios
          .delete(`http://localhost:4000/Transactions/${id}`)
          .then(() => {
            fetchdata();
          });
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <div className="container mx-auto m-4">
      <Header />
      <div className="flex mt-5">
        <div className="w-1/4 pr-4 mr-4">
          <h1 className="font-bold text-2xl mb-4">Records</h1>
          <Showmodal props={fetchdata} />
        </div>

        <div className="w-3/4 pl-4 ml-6">
          {render.map((item) => {
            return (
              <div className="card grid grid-cols-2 my-4  bg-slate-700 p-4">
                <div className="">
                  <button
                    onClick={() => {
                      removeCard(item.id);
                    }}
                    className="btn"
                  >
                    delete
                  </button>
                  <p className="font-bold text-xl">{item.name}</p>
                  <p>{item.description}</p>
                  <p>{item.created_at}</p>
                </div>
                <div className="flex justify-end items-center">
                  <div>{item.amount}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
