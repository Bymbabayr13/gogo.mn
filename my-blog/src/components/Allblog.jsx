import { useEffect, useState } from "react";
import { Card } from "./Card";
export function Allblog() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=j471n&per_page=9")
      .then((Response) => Response.json())
      .then((data) => setArticles(data));
  }, []);
  return (
    <div>
      <p className="font-bold text-2xl md:mb-8 my-4 flex justify-center md:block">
        All Blog Post
      </p>
      <div className="md:flex hidden  justify-between">
        <div className="flex gap-3">
          <p className="text-yellow-500">All</p>
          <p>Design</p>
          <p>Travel</p>
          <p>Fashion</p>
          <p>Technology</p>
          <p>Branding</p>
        </div>
        <p>View All</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {articles.map((item) => {
          return <Card article={item} key={item.id} />;
        })}
      </div>
      <div className="text-center mt-10">
        {" "}
        <button
          // onClick={Nextpage}
          className="p-6 bg-blue-100 hover:bg-blue-300 rounded-md"
        >
          Load more
        </button>
      </div>
    </div>
  );
}
