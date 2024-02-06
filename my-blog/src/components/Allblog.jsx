import { useEffect, useState } from "react";
import { Card } from "./Card";
export function Allblog() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=j471n&per_page=9&page=1")
      .then((Response) => Response.json())
      .then((data) => setArticles(data));
  }, []);

  function Nextpage() {
    fetch(
      `https://dev.to/api/articles?username=j471n&per_page=9&page=${page + 1} `
    )
      .then((response) => response.json())
      .then((data) => {
        setArticles([...articles, ...data]);
        setPage(page + 1);
      });
  }

  async function getTag({ item }) {
    const path = await fetch(
      `https://dev.to/api/articles?username=j471n&per_page=9&page=${
        page + 1
      }&tag=${item}`
    );
    const data = await path.json();
    setArticles(data);
  }

  const arr = ["All", "Design", "Travel", "Fashion", "Technology", "Branding"];
  return (
    <div>
      <p className="font-bold text-2xl md:mb-8 my-4 flex justify-center md:block">
        All Blog Post
      </p>
      <div className="md:flex hidden  justify-between">
        <div className="flex gap-3">
          {arr.map((item) => {
            return <p onClick={getTag}>{item}</p>;
          })}
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
          onClick={Nextpage}
          className="p-6 bg-blue-100 hover:bg-blue-300 rounded-md"
        >
          Load more
        </button>
      </div>
    </div>
  );
}
