import { useEffect, useState } from "react";
import { Allblog } from "./Allblog";
import { Storymode } from "./Storymode";
import { data } from "autoprefixer";
  
import { Section } from "./Section";
export function Home() {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    fetch("https://dev.to/api/articles?username=j471n")
      .then((Response) => Response.json())
      .then((data) => setArr(data));
  }, []);

  return (
    <>
      {" "}
      <Section />
      <div className="my-10"></div>
      <h1 className="text-2xl font-bold md:block  md:m-0 flex justify-center ">
        Trending
      </h1>
      <div className="" style={{ overflow: "scroll" }}>
        <div className="flex" style={{ width: "20000px" }}>
          {arr
            .sort((a, b) => {
              return b.positive_reactions_count - a.positive_reactions_count;
            })
            .map((item) => {
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
