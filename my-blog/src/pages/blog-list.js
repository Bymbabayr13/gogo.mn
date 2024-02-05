import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/Card";
export default function Home() {
  const [items, setItems] = useState([]);
  const [nextpage, setNextpage] = useState(1);

  async function nextpageanditem() {
    const item = await fetch(
      `https://dev.to/api/articles?username=j471n&per_page=12&page=1`
    );
    const data = await item.json();
    setItems(data);
  }

  useEffect(() => {
    nextpageanditem();
  }, []);

  async function Nextpage() {
    const page = await fetch(
      `https://dev.to/api/articles?username=j471n&per_page=12&page=${
        nextpage + 1
      }`
    );
    const pagenumber = await page.json();
    console.error(pagenumber);
    setItems([...items, ...pagenumber]);
    setNextpage(nextpage + 1);
  }

  return (
    <>
      <div className="container max-w-7xl mx-auto m-4">
        <div className="container mx-auto m-4">
          <Header />
          <p className="text-2xl font-bold mt-8">All blog</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {items.map((item) => {
              return <Card article={item} key={item.id} />;
            })}
          </div>
          <div className="flex justify-center mt-9">
            <button
              onClick={Nextpage}
              className="p-6 bg-blue-100 hover:bg-blue-300 rounded-md"
            >
              Load more
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </>
  );
}
