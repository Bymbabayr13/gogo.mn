import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";

export function Section() {
  const [render, setRender] = useState([]);

  async function fetchData() {
    const path = await fetch(
      "https://dev.to/api/articles?username=mmazzarolo&per_page=5"
    );
    const data = await path.json();
    setRender(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  if (render.length == 0) {
    return null;
  }
  function Goleft() {}
  function Goright() {}
  return (
    <div className="hidden">
      {render.map((item, index) => {
        return (
          <div className="grid grid-cols-5">
            <div>
              <div style={{ backgroundImage: `url(${item.cover_image})` }}>
                sadfsafdsafss
              </div>
            </div>
          </div>
        );
      })}
      <div className=" justify-end mb-24 md:flex hidden">
        <button onClick={Goleft} className="border p-2 rounded">
          {" "}
          <IoChevronBack />{" "}
        </button>
        <button onClick={Goright} className="border p-2 rounded">
          {" "}
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}
