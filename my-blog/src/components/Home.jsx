import { useEffect, useState } from "react";
import { Allblog } from "./Allblog";
import { Storymode } from "./Storymode";
import { data } from "autoprefixer";
import { IoChevronBack } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
export function Home() {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    fetch("https://dev.to/api/articles?username=adriens")
      .then((Response) => Response.json())
      .then((data) => setArr(data));
  });

  return (
    <>
      {" "}
      <div className="w-full mt-24 relative mb-5">
        <img src="Image.png" className="w-full md:block hidden"></img>
        <div className="w-1/2 hidden md:block bg-white p-8 rounded absolute bottom-2 left-2">
          <div className="bg-blue-700 text-white rounded inline p-1">
            Technology
          </div>
          <h1 className="font-bold text-2xl mt-4 mb-6">
            Grid system for better Design User Interface
          </h1>
          <p className="text-gray-600">August 20, 2022</p>
        </div>
      </div>
      <div className=" justify-end mb-24 md:flex hidden">
        <button className="border p-2 rounded">
          {" "}
          <IoChevronBack />{" "}
        </button>
        <button className="border p-2 rounded">
          {" "}
          <IoIosArrowForward />
        </button>
      </div>
      <div className="my-10">
        <p className="text-2xl font-bold md:block  md:m-0 flex justify-center ">
          Trending
        </p>
        <Trendingitem promps={arr} />
      </div>
      <h1 className="text-2xl font-bold md:block  md:m-0 flex justify-center ">
        Story
      </h1>
      <div className="" style={{ overflow: "scroll" }}>
        <div className="flex" style={{ width: "20000px" }}>
          {arr.map((item) => {
            return <Storymode promps={item} />;
          })}
        </div>
      </div>
      <div>
        <Allblog />
      </div>
    </>
  );
}
function Trendingitem({ promps }) {
  {
    promps.sort((trendingitem, vs) => {
      trendingitem.public_reactions_count - vs.public_reactions_count;
    });
  }
}
